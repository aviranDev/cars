import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import {
  InnerModel,
  Wrapper,
  ModalButton
} from './modalStyle'

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return (
    <Wrapper>
      <InnerModel>
        <ModalButton onClick={onClose}>
          <AiOutlineClose size={40} />
        </ModalButton>
        {children}
      </InnerModel>
    </Wrapper>
  );
};

export default Modal;