import React from "react";
import styled from "styled-components";
import { avatar, more, love, arrow, text } from "../../images/index";

const FeedSection = styled.section`
  width: 100%;
`;

const FeedContainer = styled.div`
  border: 1px solid #e6e6e6;
  width: 470px;
  margin: 0 auto;
`;

const FeedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
`;

const Icon = styled.img`
  width: ${props => props.width || "24px"};
  height: ${props => props.height || "24px"};
`;

const AvatarGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 0.7rem;
  gap: 0 0.7rem;
`;

const Avatar = styled.img`
  width: ${props => props.width || "32px"};
  height: ${props => props.height || "32px"};
  border-radius: 50%;
`;

const AvatarText = styled.span`
  font-size: 0.875rem;
  font-family: "Noto Sans KR";
`;

const HeadIconGroup = styled.div`
    display: flex;
    align-items: center;
    padding: 0.7rem;
`;

const FeedImgGroup = styled.div`
  height: 350px;
  background-color: aliceblue;
`;

const FeedImg = styled.img`
  width: 100%;
  height: 100%;
`;

const FeedFooter = styled.footer`
  width: 100%;
`;

const FooterIconGroup = styled.div`
  display: flex;
  padding: 0.7rem;
  gap: 0 0.7rem;
`;

const LikeGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0 0.35rem;
`;

const LikeText = styled.span`
  font-size: 0.875rem;
  font-family: "Noto Sans KR";
  & span {
    font-weight: bold;
  }
`;

const CommentLength = styled.span`
  padding: 0.5rem;
  font-size: 0.7rem;
`;

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

const FeedForm = styled.form`
  height: 40px;
  border-top: 1px solid #e6e6e6;
`;

const FeedInput = styled.input`
  border: 0;
  outline: 0;
  width: 85%;
  height: 90%;
  padding: 0.5rem;
`;

const FeedButton = styled.button`
  width: 15%;
  height: 100%;
  border: 0;
  outline: 0;
  background-color: #ffffff;
  font-size: 0.875rem;
  font-family: "Noto Sans KR";
  color: ${props => props.act ? "#2998f6" : "#c6e7fc"};
`;

function Feed() {
  return (
    <FeedSection>
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
          <FeedImg/>
        </FeedImgGroup>

        <FeedFooter>
          <FooterIconGroup>
            <Icon width={"20px"} height={"20ppx"} src={love}/>
            <Icon width={"20px"} height={"20ppx"} src={text}/>
            <Icon width={"20px"} height={"20ppx"} src={arrow}/>
          </FooterIconGroup>

          <LikeGroup>
            <Avatar width={"20px"} height={"20px"} src={avatar}/>
            <LikeText>
              <span>YHJ96</span>님 
              <span> 외 67명</span>이 
              좋아합니다
            </LikeText>
          </LikeGroup>

          <CommentLength>댓글 2개</CommentLength>

          <CommentGroup>
            <CommnetText><span>YHJ96</span> 소통해요~</CommnetText>
            <Icon src={more}/>
          </CommentGroup>

          <CommentGroup>
            <CommnetText><span>YHJ96</span> 소통해요~</CommnetText>
            <Icon src={more}/>
          </CommentGroup>

          <FeedForm>
            <FeedInput placeholder="댓글 달기..."/>
            <FeedButton act={true}>게시</FeedButton>
          </FeedForm>

        </FeedFooter>

      </FeedContainer>
    </FeedSection>
  );
}

export default Feed;