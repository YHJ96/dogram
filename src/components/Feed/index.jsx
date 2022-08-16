import React, { useState, useRef } from "react";
import { more, love, arrow, text } from "../../images/index";
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
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [comment, setComment] = useState([]);
  const [inputValue, setInputValue] = useState("");
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

  const createModal = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <button onClick={updateFeed}>수정</button>
        <button onClick={deleteFeed}>삭제</button>
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
      />
    });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const result = [...comment];
    result.push({ id: "YHJ96", text: inputValue });
    setComment(result);
    setInputValue("");
  };

  return (
    <FeedContainer>

      {isOpen ? createModal() : null}

      <FeedHeader>
        <AvatarGroup>
          <Avatar src={avatarURL} />
          <AvatarText>{id}</AvatarText>
        </AvatarGroup>
        <HeadIconGroup>
          <Icon src={more} onClick={handleOnClick} />
        </HeadIconGroup>
      </FeedHeader>

      <FeedImgGroup>
        <FeedImg src={imgURL} alt={"IMG"} />
      </FeedImgGroup>

      <FeedFooter>
        <FooterIconGroup>
          <Icon width={"20px"} height={"20ppx"} src={love} />
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

        <CommentLength>{comment.length !== 0 ? `댓글 ${comment.length}개` : null}</CommentLength>

        {createComment()}

        <FeedForm onSubmit={handleOnSubmit}>
          <FeedInput placeholder="댓글 달기..." 
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          />
          <FeedButton 
          act={inputValue.length ? true : false} 
          disabled={inputValue.length ? false : true} 
          type={"submit"}
          >게시</FeedButton>
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