import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Paginte = styled.div`
   display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 50px 0 15px 0;
`;

export const ListItem = styled.li`
 display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: #000;
  list-style: none;
`;

export const NavigatePage = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-decoration: none;
  color: #fdfdfd;
  height: 50px;
  width: 50px;
  font-size: 18px;
  padding-top: 1px;
  border: 1px solid #fff;
  border-right-width: 0px;
  box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.35);

  &:hover {
  background: rgba(255, 255, 255, 0.2);
  border-top-color: rgba(0, 0, 0, 0.35);
  border-bottom-color: rgba(0, 0, 0, 0.5);
}

&:active {
  border-left-width: 1px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: inset 0px 2px 1px 0px rgba(0, 0, 0, 0.25);
}
`;

export const Pointer = styled.span`
background: #fff;
width: 100%;
color: #000;
height: auto;
border: 2px solid #000;
 padding: 11px 18px;
`;