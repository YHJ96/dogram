import styled from 'styled-components';

const RecommendContainer = styled.div`
  width: 350px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const RecommendTitle = styled.h3`
  font-family: "Noto Sans KR";
  font-weight: 700;
  font-size: 0.875rem;
  color: #8e8e8e;
`;

const RecommendBox = styled.div`
  display: flex;
  padding: 0.3rem 0;
  justify-content: space-between;
  align-items: center;
`;

const AvatarGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
`;

const AvatarTextGroup = styled.div`
  font-family: "Noto Sans KR";
  padding: 0 0.7rem;
`;

const AvatarTitle = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
`;

const AvatarDescription = styled.div`
  font-size: 0.75rem;
`;

const FollowButton = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  height: 100%;
  color: #2998f6;
  font-weight: bold;
`;

export { 
  RecommendContainer,
  RecommendTitle,
  RecommendBox,
  AvatarGroup,
  AvatarTextGroup,
  AvatarTitle,
  Avatar,
  AvatarDescription,
  FollowButton
};