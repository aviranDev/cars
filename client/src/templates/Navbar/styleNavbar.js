import styled from 'styled-components';
import { Container } from '../../styles/globalStyles';
import { HashLink } from 'react-router-hash-link';
import { navbarColor } from './colors'

export const Nav = styled.nav`
display: flex;
background: ${props => props.bg || navbarColor.bg};
flex-direction: column;
width: 100%;
height: 60px;
z-index: 1;
@media (max-width: 700px) {
  height: 80px;
}
`;

export const LeftContainer = styled.div`
flex: 70%;
display: flex;
padding-left: 5%;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  `;

export const NavbarLinkContainer = styled(Container)`
  display: flex;
  `;

export const NavbarLinkInternal = styled(HashLink)`
  color: ${navbarColor.link};
  font-size: 30px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-decoration: none;
  margin: 14px;
  &:hover {
    background: none;
    color: ${navbarColor.hoverLink};
    transition: 0.5s ease-out;
  }
  @media (max-width: 700px) {
    display: none;
  }
  `;

export const OpenLinksButton = styled.button`
z-index: 50;
 width: 75px;
 position: fixed;
 top: 0;
 right: 0;
 height: 50px;
 background: none;
 border: none;
 color: ${navbarColor.link};
 font-size: 50px;
 cursor: pointer;

 @media screen and (min-width: 700px) {
   display: none;
 }
`; 
