import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.6);
  display: ${props => props.isOpen ? "flex" : "none"};
  justify-content: center;
  align-items: center;
`;

const ModalContentContainer = styled.section`
  background-color: #fff;
  width: 50%;
  max-width: 400px;
  border-radius: 0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;

  & button {
  border: 0;
  border-bottom: 1px solid #e6e6e6;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  padding: 1rem;
  font-family: "Noto Sans KR";
  font-size: 0.9rem;
  font-weight: 500;
  }

  & > button:nth-last-child(1) {
    border-bottom: 0;
  }
`;

const ModalButton = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  padding: 1rem;
  font-family: "Noto Sans KR";
  font-size: 0.9rem;
  font-weight: 500;
`;

export { ModalContainer, ModalContentContainer, ButtonGroup, ModalButton }