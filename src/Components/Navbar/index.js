import React from "react";
import Menu from "../../../src/assets/images/simedis/Icon-menu.svg";

import UserProfile2 from "../../../src/assets/images/simedis/icon-user-profil-3.svg";
import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import "./index.scss";
const navbar = ({ data }) => {
  return (
    <Navbar className="dashboard-navbar" expand="lg" variant="light" bg="light">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="dashboard-content-profile" disabled>
            <Image src={UserProfile2} />
            <span className="dashboard-content-tagline">
              Halo,{data.first_name}!
            </span>
          </Nav.Link>
          <NavDropdown
            title={<Image className="dashboard-burger-menu-image" src={Menu} />}
            className="dashboard-navbar-dropdown"
          >
            <NavDropdown.Item
              className="navbar-item"
              href={process.env.REACT_APP_SIMEDIS_PATH + "/login"}
            >
              Keluar
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navbar;
