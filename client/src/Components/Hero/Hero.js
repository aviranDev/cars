import React from 'react';
import { HeroImage, HeroSection } from './HeroStyles';
import heroData from './heroData';

const Hero = (props) => (
	<HeroSection height={props.sectionHeight}>
		<HeroImage height={props.imgHeight} src={props.img ? props.img : heroData.defaultImg.img} />
	</HeroSection>
);

export default Hero;
