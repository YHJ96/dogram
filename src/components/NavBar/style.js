import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #e6e6e6;
`;

const NavContainer = styled.nav`
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 1rem;
`;

const Logo = styled.span`
  font-family: "Lobster";
  font-size: 1.8rem;
`;

const NavInput = styled.input`
  height: 36px;
  border-radius: 0.3rem;
  border: 0;
  background-color: #efefef;
  min-width: 200px;
  width: 30%;

  ::placeholder {
    font-size: 1rem;
    color: #8e8e8e;
    padding: 0.5rem;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const IconGroup = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavIcon = styled.img`
  width: ${props => props.width || "24px"};
  height: ${props => props.height || "24px"};
  cursor: pointer;
`;

const AvatarIcon = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 0.5rem;
`;

export { Nav, NavContainer, Logo, NavInput, IconGroup, NavIcon, AvatarIcon };