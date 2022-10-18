import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { footerColor } from './colors';

export const FooterContainer = styled.div`
		margin-top: auto;
	`;

export const FooterWrapper = styled.div`
		max-width: 1280px;
		margin-left: auto;
		margin-right: auto;
	`;

export const FooterGrid = styled.div`
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		justify-content: center;
		align-items: center;
	`;

export const FooterColumn = styled.div`
		@media screen and (max-width: 999px) {
			align-items: center;
			grid-column: 1/-1;
		};
	`;

export const FooterLinkTitle = styled.h2`
		margin-bottom: 16px;
	`;

export const SocialIcon = styled.img`
margin-right: 10px;
width: 75px;
`;

export const FooterLogo = styled(Link)`
  color: ${({ color }) => (color ? color : footerColor.default)};
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	margin-bottom: 18px;

	&:hover{
		background: none;
	};
`;

export const FooterRights = styled.div`
  color: ${({ color }) => (color ? color : footerColor.default)};	
	margin-bottom: 16px;
	width: 100%;
	font-size: 0.8rem;
	text-align: center;
	border-top: ${({ borderTop }) => (borderTop ? borderTop : footerColor.border)};
	padding: 1rem 0;
	margin: 1rem 0 0;
`;

export const FooterSocialIcon = styled.a`
  color: ${({ color }) => (color ? color : footerColor.default)};
	font-size: 20px;

	&:hover {
		background: none;
		color: ${({ hover }) => (hover ? hover : footerColor.default)};
	};
`;

export const FooterAddress = styled.div`
color: ${({ color }) => (color ? color : footerColor.default)};
	margin: 0.4rem auto 0.4rem;
	max-width: 20rem;
	font-weight: 500;
	font-size: 0.875rem;
	line-height: 2;
	text-align: center;
	@media screen and (min-width: 1000px) {
		margin-left: 0px;
		text-align: left;
		margin-right: 1rem;
	};
`;

