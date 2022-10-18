import React from "react";
import { MainContainer } from "./mainStyle";

const Main = (props) => (
  <MainContainer>
    {props.children}
  </MainContainer>
);

export default Main;