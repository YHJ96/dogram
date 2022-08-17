# dogram

## 📋 개요
- CRUD 어플리케이션을 만들어보기.
- 완성된 파일은 배포 홈페이지를 제공하여 확인할 수 있게 합니다.

## 💻 배포 페이지
[dogram 배포 페이지](dogram-yhj96.netlify.app)

<p align="center">
  <img src="./data/화면1.gif">
</p>

<p align="center">
  <img src="./data/화면2.gif">
</p>

## ✅ 체크리스트

- Feed
  - [x] 피드 추가 기능
  - [x] 피드 이미지 수정 기능
  - [x] 피드 삭제 기능
- Comment
  - [x] 댓글 추가 기능
  - [x] 댓글 수정 기능
  - [x] 댓글 삭제 기능
- Like
  - [x] 피드 좋아요 기능

## 🚀 트러블 슈팅

### 1. 이미지 파일 생성 오류
- 문제 : 이미지 파일이 한개씩 밀려서 들어가는 문제가 발생

```javascript
// NavBar Component
  const handleOnChange = ({ target }) => {
    const result = [...feedData];
    const file = target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const item = {
        id: "YHJ96",
        imgURL: reader.result, 
        avatarURL: avatar,
        likeAvatarURL: codestateAvatar,
        likeId: "codestates",
        likeLength: 1,
      };
      result.push(item);
    };
    setFeedData(result);
  };
```

- 해결 : FileReader의 onload 메소드는 비동기적으로 작동

```javascript
// NavBar Component
  const handleOnChange = ({ target }) => {
    const result = [...feedData];
    const file = target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const item = {
        id: "YHJ96",
        imgURL: reader.result, 
        avatarURL: avatar,
        likeAvatarURL: codestateAvatar,
        likeId: "codestates",
        likeLength: 1,
      };
      result.push(item);
      setFeedData(result);
    };
  };
```

### 2. 파일 선택 이벤트 발생 문제
- 문제: 파일 선택을 숨기고 해당 이벤트를 커스텀 버튼으로 해결하기 위한 문제 발생

- 해결: 파일 선택 input에 ref를 연결하고 `{ display: none }`을 사용하여 숨겨준 다음에 커스텀 버튼에 직접 ref를 이용해서 이벤트 연결

```javascript
const inputRef = useRef(null);
// ref를 이용해서 이벤트 발생 함수 생성
const handleOnClickAddItem = () => inputRef.current.click();
// 커스텀 버튼
<NavIcon src={plus} onClick={handleOnClickAddItem} />
// 파일 선택 input
<input
  ref={inputRef}
  type={"file"}
  accept="image/*"
  onChange={handleOnChange}
  style={{ display: "none" }}
/>
```

### 3. React-Render 문제
- 문제: Feed와 Comment의 props를 수정하면 부모의 state가 변경되어 해당 페이지의 state를 공유하는 여러개의 Comment 컴포넌트와 Recommend 컴포넌트가 랜더링 문제 발생

- 해결 : React.memo()를 사용해서 props 상태를 메모이제이션

```javascript
// Recommend Component
export default React.memo(Recommend);
```

```javascript
// Comment Component
export default React.memo(Comment);
```

### 4. onChange 이벤트로 인한 render 호출 문제
- 문제 : Feed의 input의 값의 따라 게시 버튼의 disabled 활성화 기능에서 문자를 입력할 때 마다 render 호출로 성능 이슈

- 해결 : 디바운스 함수을 생성해서 0.2초 간격으로 이벤트 발생으로 최적화

```javascript
// utils/debounce.js
export const debounce = (callback, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  }
};
```

```javascript
// Feed Component
const handleOnChangeCommentInput = (e) => setInputValue(e.target.value);
const debounceOnChange = debounce(handleOnChangeCommentInput, 200);
```


## 🙌 Git Commit Message

| 태그이름    | 설명                                                  |
| ----------- | -----------------------------------------------------|
| feat     | 새로운 기능 추가                                      |
| fix      | 버그 수정                                             |
| design   | CSS 등 사용자 UI 수정                                 |
| style    | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
| refactor | 코드 리팩토링                                         |
| comment  | 주석 추가 및 변경                                    |
| docs     | 문서 수정 (MD 파일)                                  | 
| chore    | 빌드 테스트, 패키지 매니저 설정                      |
| rename   | 파일 혹은 폴더명 수정하거나 옮기는 작업               |
| remove   | 파일을 삭제하는 작업만 하는 경우                     |
| change   | 문자만 변경한 경우                                  |