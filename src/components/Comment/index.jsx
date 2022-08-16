import React, { useState } from "react";
import Modal from "../Modal";
import { more } from '../../images/index';
import { CommentGroup, CommnetText, Icon } from './style';

function Commnet({ idx, id, text, comment, setComment }) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const handleOnClick = () => setIsOpen(true);

  const deleteComment = () => {
    const result = [...comment];
    result.splice(idx, 1);
    setComment(result);
    onClose();
  }

  const createModal = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <button onClick={()=>{}}>수정</button>
        <button onClick={deleteComment}>삭제</button>
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

export default Commnet;