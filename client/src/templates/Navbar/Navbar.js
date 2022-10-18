import React, { Fragment, useState } from "react";
import {
  Nav, LeftContainer, NavbarInnerContainer,
  NavbarLinkContainer, OpenLinksButton, NavbarLinkInternal,
} from './styleNavbar';
import Collapse from "./Collapse";
import { collapseData } from "./navbarData";
import { mainData } from "./navbarData";
import { useSelector } from 'react-redux';

const Navbar = () => {
  var counter = useSelector(state => state.counter.value);
  let user = null
  const [collapseNavbar, setCollapseNavber] = useState(false);
  const general = mainData.filter(link => link.general === true);

  return (
    <Nav>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            {general.map(link => (
              <Fragment key={link.id}>
                <NavbarLinkInternal to={link.path}>{link.title}</NavbarLinkInternal>
              </Fragment>
            ))}
            <span style={{ color: '#fff', margin: '15px', marginLeft: '1px' }}>{counter ? counter : ''}</span>
            <OpenLinksButton
              onClick={() => {
                setCollapseNavber((curr) => !curr);
              }}
            >
              {collapseNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
      </NavbarInnerContainer>

      {collapseNavbar && (<Collapse data={collapseData} user={user} />)}
    </Nav >
  )
};

export default Navbar;