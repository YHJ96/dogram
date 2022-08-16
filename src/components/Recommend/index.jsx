import React from 'react';
import propTypes from "prop-types";
import { randomRange } from '../../utils/random';
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

function Recommend({ recommendData }) {

  const createRecommendBox = () => {
    return recommendData.map((item, index) => {
      return <RecommendBox key={index}>
        <AvatarGroup>
          <Avatar src={item?.avatarURL}/>
          <AvatarTextGroup>
            <AvatarTitle>{item?.id}</AvatarTitle>
            <AvatarDescription>{item?.followId}님 외 {randomRange(3, 30)}명이 팔로우합니다</AvatarDescription>
          </AvatarTextGroup>
        </AvatarGroup>
        <FollowButton>팔로우</FollowButton>
      </RecommendBox>
    });
  }

  return (
    <RecommendContainer>
      <RecommendTitle>회원님을 위한 추천</RecommendTitle>
      {createRecommendBox()}
    </RecommendContainer>
  )
}

export default Recommend;

Recommend.propTypes = {
  recommendData: propTypes.array
};

Recommend.defaultProps = {
  recommendData: []
}