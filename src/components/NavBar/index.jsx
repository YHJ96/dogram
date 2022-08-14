import React from 'react'
import { home, arrow, plus, compass, love, avatar } from '../../images';
import { Nav, NavContainer, Logo, NavInput, IconGroup, NavIcon, AvatarIcon } from './style';

function NavBar() {
  return (
    <Nav>
      <NavContainer>
        <Logo>Dogram</Logo>
        <NavInput placeholder='검색' />
        <IconGroup>
          <NavIcon src={home} />
          <NavIcon src={arrow} />
          <NavIcon src={plus} />
          <NavIcon src={compass} />
          <NavIcon src={love} />
          <AvatarIcon src={avatar}/>
        </IconGroup>
      </NavContainer>
    </Nav>
  )
}

export default NavBar;