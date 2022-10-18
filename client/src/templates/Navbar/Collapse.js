import React, { Fragment } from "react";
import { NavbarLinkCollapsed, NavbarCollapseContainer } from './CollpaseStyle';

const Collapse = ({ user, data }) => {
  const notLoggedIn = data.filter(link => link.login === false);
  const general = data.filter(link => link.general === true)
  const loggedin = data.filter(link => link.login === true)

  return (
    <NavbarCollapseContainer>
      {general.map(link => (
        <Fragment key={link.id}>
          <NavbarLinkCollapsed to={link.path}>{link.title}</NavbarLinkCollapsed>
        </Fragment>
      ))}

      {!user && notLoggedIn.map(link => (
        <Fragment key={link.id}>
          <NavbarLinkCollapsed to={link.path}>{link.title}</NavbarLinkCollapsed>
        </Fragment>
      ))}

      {user && loggedin.map(link => (
        <Fragment key={link.id}>
          <NavbarLinkCollapsed to={link.path}>{link.title}</NavbarLinkCollapsed>
        </Fragment>
      ))}
    </NavbarCollapseContainer>
  )
}

export default Collapse