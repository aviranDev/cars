import styled from 'styled-components';

export const FeatureWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	/* margin: 1rem; */
	grid-gap: 4rem;

	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 3rem;
		margin: 15%;
	}

	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const FeatureTextWrapper = styled.div`
	position: relative;
	padding: 0 0 20px;
	margin-bottom: 4rem;
	margin-top: 30px;
`;

export const FeatureTitle = styled.h2`
 	text-align: center;
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "clamp(1.2rem, 9vw, 1.2rem)")};
	line-height: 1.06;
	letter-spacing: 2px;
	margin: auto; 
	font-weight: 600;
	color: ${({ color }) => (color ? color : '#000')};
	text-shadow: 0 5px 5px #d0d0d0;
`;


export const FeatureCard = styled.div`
	display: flex;
	flex-flow: column;
	width: 100%;
	justify-content: center;
	align-items: center;
	padding: 10px;
	/* box-shadow: 0 0 32px 8px #d0d0d0; */
	border-radius: 20px;
`;

export const FeatureImageWrapper = styled.div`
	margin-bottom: 1rem;
	padding: 0px;
	margin-top: -25px;
`;
export const FeatureName = styled.h4`
	font-weight: 600;
	font-size: 1.3rem;
	letter-spacing: 2px;

	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`;
export const FeatureText = styled.p`
	margin: 1rem 0 auto;
	text-align: center;
	font-size: 0.9rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: #626881;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
