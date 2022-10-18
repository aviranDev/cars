import styled from 'styled-components';

export const InnerModel = styled.div`
  display: relative;
  width: 55%;
  height: 90%;
  border-radius: 0.5%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 10px;
  z-index: 1000;
  box-shadow: 1px 1px 80px 1px #d0d0d0;

  @media screen and (max-width: 1000px) {
    width: 85%;
    height: 85%;
    padding: 2px;
}

@media screen and (min-width: 1200px) {
    width: 65%;
  height: 85%;
    padding: 2px;
}
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00001a;
  z-index: 1000;
  box-shadow: 0 2px 5px #d0d0d0;
`;


export const ModalButton = styled.button`
 background: none;
 float: right;
 color: inherit;
 border: none;
 margin: 20px;
 font: inherit;
 cursor: pointer;
 outline: inherit;
 text-decoration: none;
`;


