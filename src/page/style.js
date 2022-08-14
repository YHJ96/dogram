import styled from "styled-components";

const MainContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
  gap: 0 3rem;
  
  @media screen and (max-width: 1024px) {
    gap: 0;
  }
`;

const FeedSection = styled.section`
  & > div {
    margin-bottom: 4rem;
  }

  & > div:nth-last-child(1) {
    margin-bottom: 0;
  }
`;

export { MainContainer, FeedSection };