import React, { useRef, useEffect } from "react";
import propTypes from "prop-types"
import { ModalContainer, ModalContentContainer, ButtonGroup, ModalButton } from '../Modal/style'

function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;
    `;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", (e) => {
      if (!modalRef.current || modalRef.current.contains(e.target)) return;
      onClose();
    });
  }, [onClose]);

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalContentContainer ref={modalRef}>
        <ButtonGroup>
          {children}
          <ModalButton onClick={onClose}>취소</ModalButton>
        </ButtonGroup>
      </ModalContentContainer>
    </ModalContainer>
  )
}

export default Modal;

Modal.propTypes = {
  isOpen: propTypes.bool,
  onClose: propTypes.func,
  children: propTypes.node
}

Modal.defaultProps = {
  isOpen: false,
  onClose: () => { },
  children: null
}