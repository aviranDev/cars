import React, { Fragment } from "react";
import Footer from './Footer/Footer';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import GlobalStyles from "../styles/globalStyles";

const Template = (props) => (
  <Fragment>
    <GlobalStyles />
    <Navbar />
    <Main>{props.children}</Main>
    <Footer />
  </Fragment>
);

export default Template;