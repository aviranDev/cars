import styled from "styled-components";
import colors from "./colors";

export const SubModal = styled.div`
width: ${({ width }) => (width ? width : '300px')};
height: 100%;
display: inline-block;
padding: 1rem;
cursor: pointer;
text-align: center;
flex-direction: column;
gap: 0.8rem;
background-color: #FFFFEA;
border-radius: 2rem;
transition: 0.3s ease -in -out;
// z-index: 1;
img {
	width: 100%;
	border: 2px solid ${colors.black};
	border-radius: 5%;
}
`;

export const Click = styled.button`
background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	text-decoration: none;
`;

export const CardBody = styled.div`
display: flex;
flex-direction: column;
gap: 0.8rem;
`;

const Card = styled.div`
position: relative;
width: 96%;
display: ${({ display }) => (display ? display : 'flex')};
line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '')};
cursor: pointer;
background-color: ${({ background }) => (background ? background : '#fff')};
border-radius: 15px;
border-color: #000;
transition: 0.3s ease-in-out;
margin-top: -15px;
justify-content: center;
align-items: center;


img {
	width: 100%;
	border-radius: 5%;
}
`;

export default Card;

