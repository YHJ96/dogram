import React, { useState, useRef, useEffect } from "react";
import { more, arrow, text, loveBlack, loveRed } from "../../images/index";
import propTypes from 'prop-types';
import Modal from '../Modal';
import {
  FeedContainer,
  FeedHeader,
  AvatarGroup,
  Avatar,
  AvatarText,
  HeadIconGroup,
  Icon,
  FeedImgGroup,
  FeedImg,
  FeedFooter,
  FooterIconGroup,
  LikeGroup,
  LikeText,
  CommentLength,
  FeedForm,
  FeedInput,
  FeedButton
} from './style';
import Commnet from "../Comment";

function Feed({
  idx,
  feedData,
  setFeedData,
  id,
  avatarURL,
  imgURL,
  likeAvatarURL,
  likeId,
  likeLength
}) {
  const feedRef = useRef(null);
  const fileLoaderRef = useRef(null);

  const [isCheck, setIsCheck] = useState({ modal: false, like: false });
  const [isChangeButton, setIsChangeButton] = useState(false);

  const [comment, setComment] = useState([]);
  const [commentIdx, setCommentIdx] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const onOpen = () => setIsCheck({...isCheck, modal: true});
  const onClose = () => setIsCheck({...isCheck, modal: false});

  useEffect(() => {
    window.addEventListener("mousedown", (e) => {
      if (!feedRef.current || feedRef.current.contains(e.target)) return;
      setIsChangeButton(false);
    });
  }, []);

  const deleteFeed = () => {
    const result = [...feedData];
    result.splice(idx, 1);
    setFeedData(result);
    onClose();
  };

  const updateFeed = () => {
    fileLoaderRef.current.click();
    onClose();
  };

  const handleFileUpLoaderChange = ({ target }) => {
    const result = [...feedData];
    const file = target.files[0];
    const reader = new FileReader();
    if (!file.type.match("image/.*")) return alert("이미지 파일만 가능합니다.");
    reader.readAsDataURL(file);
    reader.onload = () => {
      result[idx] = {...result[idx], imgURL: reader.result};
      setFeedData(result);
    };
  };

  const createModal = () => {
    return (
      <Modal isOpen={isCheck.modal} onClose={onClose}>
        <button onClick={updateFeed}>수정</button>
        <button onClick={deleteFeed} style={{ color: "#ED4956" }}>삭제</button>
      </Modal>
    );
  }

  const createComment = () => {
    return comment.map((item, index) => {
      return <Commnet
        key={index}
        idx={index}
        id={item?.id}
        text={item?.text}
        comment={comment}
        setComment={setComment}
        setCommentIdx={setCommentIdx}
        setIsChangeButton={setIsChangeButton}
      />
    });
  }

  const updateCommnet = (e) => {
    e.preventDefault();
    const result = [...comment];
    result[commentIdx]["text"] = inputValue;
    if (inputValue.trim().length === 0) alert("빈 문자열입니다.");
    setComment(result);
    setIsChangeButton(false);
    setInputValue("");
  }

  const createCommnet = (e) => {
    e.preventDefault();
    const result = [...comment];
    result.push({ id: "YHJ96", text: inputValue });
    setComment(result);
    setInputValue("");
  };

  const toggleChangeButton = () => {
    return isChangeButton
      ? <FeedButton act={true}>수정</FeedButton>
      : <FeedButton
        act={inputValue.length ? true : false}
        disabled={inputValue.length ? false : true}
        type={"submit"}
      >게시</FeedButton>
  }

  const handleOnClickLoveIcon = () => {
    const result = [...feedData];
    if (isCheck.like) {
      result[idx]["likeLength"] -= 1;
      setFeedData(result);
      setIsCheck({...isCheck, like: !isCheck.like});
    } else {
      result[idx]["likeLength"] += 1;
      setFeedData(result);
      setIsCheck({...isCheck, like: !isCheck.like});
    }
  }

  return (
    <FeedContainer ref={feedRef}>

      {isCheck.modal ? createModal() : null}

      <FeedHeader>
        <AvatarGroup>
          <Avatar src={avatarURL} />
          <AvatarText>{id}</AvatarText>
        </AvatarGroup>
        <HeadIconGroup>
          <Icon src={more} onClick={onOpen} />
        </HeadIconGroup>
      </FeedHeader>

      <FeedImgGroup>
        <FeedImg src={imgURL} alt={"IMG"} />
      </FeedImgGroup>

      <FeedFooter>
        <FooterIconGroup>
          <Icon width={"20px"} height={"20ppx"} onClick={handleOnClickLoveIcon} src={isCheck.like ? loveRed : loveBlack} />
          <Icon width={"20px"} height={"20ppx"} src={text} />
          <Icon width={"20px"} height={"20ppx"} src={arrow} />
        </FooterIconGroup>

        <LikeGroup>
          <Avatar width={"20px"} height={"20px"} src={likeAvatarURL} />
          <LikeText>
            <span>{likeId}</span>님
            <span> 외 {likeLength}명</span>이
            좋아합니다
          </LikeText>
        </LikeGroup>

        {comment.length !== 0 ? <CommentLength>댓글 {comment.length}개</CommentLength> : null}

        {createComment()}

        <FeedForm onSubmit={isChangeButton ? updateCommnet : createCommnet}>
          <FeedInput placeholder={isChangeButton ? "수정할 내용을 입력해주세요." : "댓글 달기..."}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          {toggleChangeButton()}
        </FeedForm>

      </FeedFooter>
      <input
        ref={fileLoaderRef}
        type={"file"}
        accept="image/*"
        onChange={handleFileUpLoaderChange}
        style={{ display: "none" }}
      />
    </FeedContainer>
  );
}

export default Feed;

Feed.propTypes = {
  idx: propTypes.number,
  feedData: propTypes.array.isRequired,
  setFeedData: propTypes.func.isRequired,
  id: propTypes.string,
  avatarURL: propTypes.string,
  imgURL: propTypes.string,
  likeAvatarURL: propTypes.string,
  likeId: propTypes.string,
  likeLength: propTypes.number
}

Feed.defaultProps = {
  idx: 1,
  feedData: [],
  setFeedData: () => { },
  id: "",
  avatarURL: "",
  imgURL: "",
  likeAvatarURL: "",
  likeId: "",
  likeLength: 0
}