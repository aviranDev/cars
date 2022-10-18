import React, { Fragment } from "react";
import Image from '../../styles/Img';
import { FeatureImageWrapper, FeatureText, FeatureTitle } from './FeaturesStyles';

const InternalDetails = (props) => (
  <Fragment>
    {props?.img && (
      <FeatureImageWrapper>
        <Image width="100%" src={props?.src} alt={props?.alt} />
      </FeatureImageWrapper>
    )}
    <FeatureTitle>{props?.item?.brand}</FeatureTitle>
    <FeatureText>{props?.item?.model}</FeatureText>
  </Fragment>
);

export default InternalDetails;