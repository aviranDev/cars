import styled from "styled-components";

export const Select = styled.select`
display: flex;
align-items: center;
justify-content: center;
position: relative;
font-family: Verdana, Geneva, Tahoma, sans-serif;
margin: 0 auto;
margin-top: -10px;
font-weight: 600;
  width: 27%;
  text-align: center;
  height: 50px;
  background: #000;
  letter-spacing: 4px;
  color: #fff;
  border: none;
  font-size: 30px;
  border-radius: 4px;

  &:focus{
    border: none;
    color: #000;
    background-color: #fff;
  }

   option{
    background: #000 ;
    color: #fff ;
    font-size: 30px;
  } 
`;

