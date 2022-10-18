import React from 'react';
import { FeatureTitle, FeatureTextWrapper } from './FeaturesStyles';

const TextErea = (props) => (
  <FeatureTextWrapper>
    <FeatureTitle fontSize="clamp(1.3rem, 9vw, 2.7rem)" color="#000">
      {props.title}
    </FeatureTitle>
    {props.children}
  </FeatureTextWrapper>
);

export default TextErea;