import React from 'react'
import {
  RecommendContainer,
  RecommendTitle,
  RecommendBox,
  AvatarGroup,
  Avatar,
  AvatarTextGroup,
  AvatarTitle,
  AvatarDescription,
  FollowButton
} from './style';

function Recommend() {
  return (
    <RecommendContainer>
      <RecommendTitle>회원님을 위한 추천</RecommendTitle>

      <RecommendBox>
        <AvatarGroup>
          <Avatar />
          <AvatarTextGroup>
            <AvatarTitle>YHJ96</AvatarTitle>
            <AvatarDescription>YHJ96님 외 5명이 팔로우합니다</AvatarDescription>
          </AvatarTextGroup>
        </AvatarGroup>
        <FollowButton>팔로우</FollowButton>
      </RecommendBox>

    </RecommendContainer>
  )
}

export default Recommend;