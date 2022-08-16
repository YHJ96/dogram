import styled from "styled-components";

const CommentGroup = styled.div`
  display: flex;
  padding: 0 0.7rem;
  justify-content: space-between;
  align-items: center;
`;

const CommnetText = styled.div`
  font-size: 0.875rem;
  font-family: "Noto Sans KR";
  & span {
    font-weight: bold;
  }
`;

const Icon = styled.img`
  width: ${props => props.width || "24px"};
  height: ${props => props.height || "24px"};
  cursor: pointer;
  object-fit: cover;
  object-position: center;
`;

export { CommentGroup, CommnetText, Icon };