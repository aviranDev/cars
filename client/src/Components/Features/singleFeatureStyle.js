import styled from "styled-components";

export const Wrapper = styled.div`
max-width: 1100px;
margin: 0 auto;
line-height: 1.5;
 width: 90%;
 height: 100%;
 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;

  @media screen and (max-width: 1000px) {
    height: 130%;
    display: relative;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 1rem;
  }
`;

export const Single = styled.div`
width: 800px;
height: 500px;
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 grid-gap: 1.5rem;
position: relative;

z-index: 10;
 @media screen and (min-width: 1000px){
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
}
`;

export const ImageContainer = styled.div`
 display: flex;
 flex-direction: row;
 @media screen and (min-width: 1000px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
`;

export const DisplayImg = styled.div`
 overflow: hidden;
 width: 500px;
 height: 100%;
 padding-top: 50px;
 border-radius: 10px  0 0 10px;

 @media screen and (max-width: 1200px) {
 padding-top: 50px;
 width: 200px;
}
`;

export const Content = styled.div`
position: relative;
padding: 2rem 1rem;
padding-top: 2px;
@media screen and (max-width: 1000px) {
 padding-top: 0;
 padding: 1px;
}

@media screen and (max-width: 700px) {
 padding-top: 0;
}
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  text-transform: capitalize;
  font-weight: 700;
  position: relative;
  color: #12263a;
  margin-top: 1rem;

  @media screen and (max-width: 1200px) {
 font-size: 1rem;
}
`;

export const Detail = styled.div`
h2{
  text-transform: capitalize;
  color: #12263a;
  padding-bottom: 0.6rem;
}
p{
  font-size: 0.9rem;
  padding: 0.3rem;
  opacity: 0.8;
  
}
@media screen and (max-width: 1400px) {
 display: none;
}
`;

export const Info = styled.div`
display: flex;
position: absolute;
 margin: 1rem 0;
 input{
  border: 1px solid #ddd;
  border-radius: 25px;
  text-align: center;
  padding: 0.45rem 0.8rem;
  outline: 0;
  margin-right: 0.2rem;
  margin-bottom: 2rem;
  width: 60px;
 }

 button{
  border-radius: 25px;
  cursor: pointer;
  border: none;
  padding: 0.45rem 0.8rem;
  color: #fff;
  background: #f64749;
 }
`;