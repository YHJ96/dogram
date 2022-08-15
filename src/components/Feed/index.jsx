import React from "react";
import { avatar, more, love, arrow, text } from "../../images/index";
import {
  FeedContainer,
  FeedHeader,
  AvatarGroup,
  Avatar,
  AvatarText,
  HeadIconGroup,
  Icon,
  FeedImgGroup,
  FeedImg,
  FeedFooter,
  FooterIconGroup,
  LikeGroup,
  LikeText,
  CommentLength,
  CommentGroup,
  CommnetText,
  FeedForm,
  FeedInput,
  FeedButton
} from './style';

function Feed({ FeedImgSrc }) {
  return (
    <FeedContainer>
      <FeedHeader>
        <AvatarGroup>
          <Avatar src={avatar} />
          <AvatarText>YHJ96</AvatarText>
        </AvatarGroup>
        <HeadIconGroup>
          <Icon src={more}></Icon>
        </HeadIconGroup>
      </FeedHeader>

      <FeedImgGroup>
        <FeedImg src={FeedImgSrc} alt={"IMG"}/>
      </FeedImgGroup>

      <FeedFooter>
        <FooterIconGroup>
          <Icon width={"20px"} height={"20ppx"} src={love} />
          <Icon width={"20px"} height={"20ppx"} src={text} />
          <Icon width={"20px"} height={"20ppx"} src={arrow} />
        </FooterIconGroup>

        <LikeGroup>
          <Avatar width={"20px"} height={"20px"} src={avatar} />
          <LikeText>
            <span>YHJ96</span>님
            <span> 외 67명</span>이
            좋아합니다
          </LikeText>
        </LikeGroup>

        <CommentLength>댓글 2개</CommentLength>

        <CommentGroup>
          <CommnetText><span>YHJ96</span> 소통해요~</CommnetText>
          <Icon src={more} />
        </CommentGroup>

        <CommentGroup>
          <CommnetText><span>YHJ96</span> 소통해요~</CommnetText>
          <Icon src={more} />
        </CommentGroup>

        <FeedForm>
          <FeedInput placeholder="댓글 달기..." />
          <FeedButton act={true}>게시</FeedButton>
        </FeedForm>

      </FeedFooter>

    </FeedContainer>
  );
}

export default Feed;