import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { collapseColor } from './colors';

export const NavbarCollapseContainer = styled.div`
 display: none;
 flex-direction: column;
 align-items: center;

 @media (max-width: 900px) {
  display: flex;
    z-index: 1;
    flex-direction: column;
		width: 100%;
		height: 110vh;
    position: fixed;
		padding-top: 30%;
		top: 0;
		left: 0;
    opacity: 0.9;
		transition: opacity 0.5s ease;
		background-color: ${collapseColor.bg};
 }
`;

export const NavbarLinkCollapsed = styled(Link)`
 color: ${collapseColor.color};
 font-size: 30px;
 font-family: Arial, Helvetica, sans-serif;
 text-decoration: none;
 margin: 14px;

 &:hover {
  color: ${collapseColor.hover};
  background: none;
   transition: 0.5s ease-out;
 }
`;


