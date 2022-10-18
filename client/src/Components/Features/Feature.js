import React from 'react';
import { Click } from '../../styles/Card'
import { Link } from 'react-router-dom';
import SingleFeature from './SingleFeature';
import InternalDetails from './InternalDetails';
import { FeatureCard, FeatureText, FeatureTitle } from './FeaturesStyles';

const Feature = (props) => {
  let img = props.item.hasOwnProperty("img");
  return (
    <FeatureCard>
      {props.item.path ? (
        <Link style={{ textDecoration: 'none' }} to={`/brand-models/${props.item.brand}`}>
          <InternalDetails img={img} src={props?.item?.img} alt={props.alt} />
        </Link>
      ) : (
        <Click onClick={() => props.openModal(props.item)}>
          <InternalDetails img={img} src={props?.item?.img} alt={props.alt} />
          <FeatureTitle>{props?.item?.brand}</FeatureTitle>
          <FeatureText>{props?.item?.model}</FeatureText>
        </Click>
      )}
      <SingleFeature
        item={props.viewItem}
        isFav={props.isFav}
        open={props.isOpen}
        onClose={props.closeModal}
        addFavotires={props.addFavotires}
        removeFavorite={props.removeFavorite}
      />
    </FeatureCard>
  );
};

export default Feature;