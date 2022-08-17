import React, { useState } from "react";
import Modal from "../Modal";
import propTypes from "prop-types";
import { more } from '../../images/index';
import { CommentGroup, CommnetText, Icon } from './style';

function Comment({ 
  idx,
  inputRef, 
  id, 
  text, 
  comment, 
  setComment, 
  setIsChangeButton 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const handleOnClick = () => setIsOpen(true);

  const updateComment = () => {
    setComment({...comment, currentIdx: idx});
    setIsChangeButton(true);
    inputRef.current.focus();
    onClose();
  }

  const deleteComment = () => {
    const { data, currentIdx } = comment;
    data.splice(idx, 1);
    setComment({ data, currentIdx });
    onClose();
  }

  const createModal = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <button onClick={updateComment}>수정</button>
        <button onClick={deleteComment} style={{ color: "#ED4956" }}>삭제</button>
      </Modal>
    );
  }
  
  return (
    <CommentGroup>
      { isOpen ? createModal() : null }
      <CommnetText><span>{id}</span> {text}</CommnetText>
      <Icon src={more} onClick={handleOnClick}/>
    </CommentGroup>
  );
}

export default React.memo(Comment);

Comment.propTypes = {
  idx: propTypes.number,
  inputRef: propTypes.object.isRequired, 
  id: propTypes.string, 
  text: propTypes.string, 
  comment: propTypes.string.isRequired, 
  setComment: propTypes.func.isRequired, 
  setIsChangeButton: propTypes.func.isRequired 
}

Comment.defaultProps = {
  idx: 0,
  inputRef: {}, 
  id: "", 
  text: "", 
  comment: "", 
  setComment: () => {}, 
  setIsChangeButton: () => {} 
}