import React, { useState, useRef } from "react";
import { avatar, more, love, arrow, text } from "../../images/index";
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
  CommentGroup,
  CommnetText,
  FeedForm,
  FeedInput,
  FeedButton
} from './style';

function Feed({ idx, feedData, setFeedData, FeedImgSrc }) {
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const handleOnClick = () => setIsOpen(true);

  const deleteFeed = () => {
    const result = [...feedData];
    result.splice(idx, 1);
    setFeedData(result);
    onClose();
  };

  const updateFeed = () => {
    inputRef.current.click();
    onClose();
  };

  const handleOnChange = ({ target }) => {
    const result = [...feedData];
    const file = target.files[0];
    const reader = new FileReader();
    if (!file.type.match("image/.*")) return alert("이미지 파일만 가능합니다.");
    reader.readAsDataURL(file);
    reader.onload = () => {
      result[idx] = reader.result;
      setFeedData(result);
    };
  };

  return (
    <FeedContainer>

      <Modal isOpen={isOpen} onClose={onClose}>
        <button onClick={updateFeed}>수정</button>
        <button onClick={deleteFeed}>삭제</button>
      </Modal>

      <FeedHeader>
        <AvatarGroup>
          <Avatar src={avatar} />
          <AvatarText>YHJ96</AvatarText>
        </AvatarGroup>
        <HeadIconGroup>
          <Icon src={more} onClick={handleOnClick}/>
        </HeadIconGroup>
      </FeedHeader>

      <FeedImgGroup>
        <FeedImg src={FeedImgSrc} alt={"IMG"}/>
      </FeedImgGroup>

      <FeedFooter>
        <FooterIconGroup>
          <Icon width={"20px"} height={"20ppx"} src={love} />
          <Icon width={"20px"} height={"20ppx"} src={text} />
          <Icon width={"20px"} height={"20ppx"} src={arrow} />
        </FooterIconGroup>

        <LikeGroup>
          <Avatar width={"20px"} height={"20px"} src={avatar} />
          <LikeText>
            <span>YHJ96</span>님
            <span> 외 67명</span>이
            좋아합니다
          </LikeText>
        </LikeGroup>

        <CommentLength>댓글 2개</CommentLength>

        <CommentGroup>
          <CommnetText><span>YHJ96</span> 소통해요~</CommnetText>
          <Icon src={more} />
        </CommentGroup>

        <CommentGroup>
          <CommnetText><span>YHJ96</span> 소통해요~</CommnetText>
          <Icon src={more} />
        </CommentGroup>

        <FeedForm>
          <FeedInput placeholder="댓글 달기..." />
          <FeedButton act={true}>게시</FeedButton>
        </FeedForm>

      </FeedFooter>
      <input
        ref={inputRef}
        type={"file"}
        accept="image/*"
        onChange={handleOnChange}
        style={{ display: "none" }}
      />
    </FeedContainer>
  );
}

export default Feed;