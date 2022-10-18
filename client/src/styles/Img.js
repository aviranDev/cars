import styled from "styled-components";

const Img = styled.img`
display: block;
border-radius: 10px;
width: ${({ width }) => (width ? width : '100%')};
@media screen and (max-width: 980px) {
	width: 100%;
}
`;

export default Img;

