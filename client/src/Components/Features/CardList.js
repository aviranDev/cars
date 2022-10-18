import React from 'react';
import { FeatureWrapper } from './FeaturesStyles';
import Feature from './Feature';

const CardList = (props) => (
  <FeatureWrapper>
    {props.data.map(item => (
      <Feature key={item._id} item={item} {...props} />
    ))}
  </FeatureWrapper>
);

export default CardList;