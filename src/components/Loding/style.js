import styled from "styled-components";

const LodingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LodingBar = styled.img`
width: 256px;
height: 256px;
  object-fit: cover;
`;

export { LodingContainer, LodingBar };