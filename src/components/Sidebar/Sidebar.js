import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./Sidebar.scss";

function Sidebar() {
  return (
    <>
      <Nav
        className="col-md-12 d-none d-md-block bg-light sidebar"
        activeKey="/home"
      >
        <Nav.Item>
          <NavLink
            className="nav-NavLink "
            activeClassName="active_link"
            to="/account/my-account"
          >
            My Account
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            className="nav-NavLink  "
            activeClassName="active_link"
            to="/account/subscription"
          >
            My Subscriptions
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            className="nav-NavLink "
            activeClassName="active_link"
            to="/account/merchant"
          >
            My Merchants
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            className="nav-NavLink"
            activeClassName="active_link"
            to="/account/logout"
          >
            Log out
          </NavLink>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Sidebar;
