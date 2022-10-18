import styled from "styled-components";

const BodyButton = styled.button`
min-width: 100px;
cursor: pointer;
overflow: hidden;
position: relative;
white-space: nowrap;
width: ${({ width }) => (width ? width : '100%')};
color: ${({ color }) => (color ? color : '#fff')};
outline: ${({ outline }) => (outline ? outline : 'none')};
border-radius: ${({ radius }) => (radius ? radius : '4px')};
border:  ${({ border }) => (border ? border : "none")};
font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
padding: ${({ padding }) => (padding ? padding : '11px 20px')};
background: ${({ bg }) => (bg ? bg : 'none')};
margin-top: ${({ mt }) => (mt ? mt : 'auto')};

	&:hover {
  color: ${({ hoverColor }) => (hoverColor ? hoverColor : '#000')};
  background: ${({ hbg }) => (hbg ? hbg : '#fff')};
}
`;

export default BodyButton