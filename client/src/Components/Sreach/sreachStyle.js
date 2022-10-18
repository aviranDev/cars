import styled from "styled-components";

export const SearchContainer = styled.div`
  display: grid;
  position: relative;
  text-align: center;
  justify-content: center;
  margin: auto 0;
	width: 100%;
`;

export const InputWrapper = styled.div`
  margin-top: 30px;
  display: flex;
`;

export const SearchInput = styled.input`
  color: #fff;
  background-color: rgb(41, 41, 41);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 18px;
  padding: 15px;
  height: 57px;
  width: 250px;
  cursor: text;
  border: none;
  
  ::placeholder{
    color: #fff;
  }
 
  &:focus{
    color: #000;
    background-color: #fff;
    /* box-shadow: 0 0 32px 8px #d0d0d0; */
    border-bottom: 1px solid #000;
    outline: none;
  
    ::placeholder{
    color: #ccc;
  }
  }
`;

export const ClearText = styled.div`
 height: 57px;
  width: 50px;
  display: grid;
  place-items: center;
  background-color: rgb(41, 41, 41);
  color: #fff;

  ${SearchInput}:focus ~ & {
  color: #000;
  background-color: #fff;
  border-bottom: 1px solid #000;
}
`;

export const SearchButton = styled.button`
  height: 57px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 10px 10px;
  border: none;
  padding-left: 8.9px;
  width: 50px;
  background-color: rgb(41, 41, 41);
  text-decoration: none;
  place-items: center;
  cursor: pointer;
  color: #fff;

&:active{
  color: #000;
  background-color: rgb(255, 255, 255);
}
`;

export const DisplayResult = styled.div`
  z-index: 2;
  margin-top: 2px;
  width: 300px;
  height: 50px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;
  display: block;
`;

export const ItemsContainer = styled.span`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: black;
  cursor: pointer;

  &:hover{
    color: #fff;
    background-color: rgb(41, 41, 41);
}
`;

export const Item = styled.p`
 margin-left: 10px;
`;

export const Dropdown = styled.div`
position: relative;
margin-bottom: -150%;
`;

