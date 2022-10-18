import React from "react";
import Modal from '../Modal/Modal';
import { Link } from "react-router-dom";
import {
  Wrapper, Single, ImageContainer, DisplayImg,
  Content, Title, Detail
} from './singleFeatureStyle';
import { TbHeartOff, TbHeart } from "react-icons/tb";

export const SingleFeature = (props) => (
  <Modal open={props.open} onClose={props.onClose}>
    {props.item && (
      <Wrapper>
        <Single>
          <ImageContainer>
            <DisplayImg>
              <img width="100%" src={props.item.img} alt="modal-item" />
            </DisplayImg>
          </ImageContainer>

          <Content>
            <Title>{props.item.brand}</Title>
            <p>{props.item.brand + ' ' + props.item.model}</p>
            {props.item.model && (
              <Detail>
                <h2>about this item:</h2>
                <p>{props.item.info}</p>
              </Detail>
            )}
            {props.isFav ?
              <span onClick={() => {
                props.removeFavorite(props.item._id)
                props.onClose()
              }} >
                <TbHeartOff size={40} />
              </span>
              :
              <span onClick={() => {
                props.addFavotires(props.item)
                props.onClose()
              }}><TbHeart size={40} /></span>
            }
          </Content>

          {props.item.path && (
            <Link style={{ textDecoration: 'none' }} to={`/brand-models/${props.item.brand}`}>
              view Models
            </Link>
          )}

        </Single>
      </Wrapper>
    )}
  </Modal>
);

export default SingleFeature;