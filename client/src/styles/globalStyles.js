import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

export const Container = styled.div`
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding: 0px 0px;
	/* min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")}; */
	min-height: 100vh;


	@media screen and (max-width: 960px) {
		padding: 0 10px;
	}
`;


export const Section = styled.section`
	/* padding: ${({ padding }) => (padding ? padding : '100px 0')}; */
	padding-top: ${props => props.top};
	margin: ${({ margin }) => (margin ? margin : '')};
	background: ${({ background }) => (background ? background : '#fff')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};

	@media screen and (max-width: 768px) {
		padding: ${({ smPadding }) => (smPadding ? smPadding : '70px 0')};
	}
`;

export const Main = styled.main`
min-height: 100vh;
display: flex;
flex-direction: column;
overflow: auto; 
`;

export const MainHeading = styled.h1`
	font-size: clamp(2.3rem, 6vw, 3.5rem);
	margin-top: 25rem;
	color: ${({ color }) => (color ? color : '#fff')};
	width: 100%;
	letter-spacing: 4px;
	text-align: center;
`;

export const Row = styled.div`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
	@media screen and (max-width: 780px) {
		flex-direction: column;
	}
`;

export const Button = styled.button``;


export default GlobalStyles