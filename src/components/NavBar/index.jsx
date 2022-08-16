import React, { useRef } from 'react';
import propTypes from "prop-types";
import { home, arrow, plus, compass, love, avatar, codestateAvatar } from '../../images';
import { Nav, NavContainer, Logo, NavInput, IconGroup, NavIcon, AvatarIcon } from './style';

function NavBar({ feedData, setFeedData }) {

  const inputRef = useRef(null);
  const handleOnClickAddItem = () => inputRef.current.click();

  const handleOnChange = ({ target }) => {
    const result = [...feedData];
    const file = target.files[0];
    const reader = new FileReader();
    if (!file.type.match("image/.*")) return alert("이미지 파일만 가능합니다.");
    reader.readAsDataURL(file);
    reader.onload = () => {
      const item = {
        id: "YHJ96",
        imgURL: reader.result, 
        avatarURL: avatar,
        likeAvatarURL: codestateAvatar,
        likeId: "codestates",
        likeLength: 1,
      };
      result.push(item);
      setFeedData(result);
    };
  };

  return (
    <Nav>
      <NavContainer>
        <Logo>Dogram</Logo>
        <NavInput placeholder='검색' />
        <IconGroup>
          <NavIcon src={home} />
          <NavIcon src={arrow} />
          <NavIcon src={plus} onClick={handleOnClickAddItem} />
          <NavIcon src={compass} />
          <NavIcon src={love} />
          <AvatarIcon src={avatar} />
        </IconGroup>
      </NavContainer>
      <input
        ref={inputRef}
        type={"file"}
        accept="image/*"
        onChange={handleOnChange}
        style={{ display: "none" }}
      />
    </Nav>
  )
}

export default NavBar;

NavBar.propTypes = {
  feedData: propTypes.array,
  setFeedData: propTypes.func
}

NavBar.defaultProps = {
  feedData: [],
  setFeedData: () => {}
}