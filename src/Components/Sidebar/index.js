import React from "react";
import IconPolis from "../../../src/assets/images/simedis/icon-polis.svg";
import UserProfile from "../../../src/assets/images/simedis/icon-user-profil-2.svg";
import Logo from "../../../src/assets/images/simedis/simedislogo2.svg";
import ExitSidebar from "../../../src/assets/images/simedis/icons-delete.svg";
import Logout from "../../../src/assets/images/simedis/icons-exit-24.png";

import { Col, Nav, Container, Image } from "react-bootstrap";
import "./index.scss";

const sidebar = ({ data, width, toggled, handleExitSidebar, handleLogout }) => {
  let close;
  let logout;
  if (toggled) {
    close = (
      <Container className="sidebar-exit">
        <a onClick={(e) => handleExitSidebar()}>
          <Image src={ExitSidebar} />
        </a>
      </Container>
    );

    logout = (
      <Nav.Item className="dashboard-item">
        <Nav.Link
          className="dashboard-item-content"
          eventKey=""
          onClick={(e) => {
            handleLogout();
          }}
        >
          <Image src={Logout} />
          <span className="dashboard-item-tagline">Logout</span>
        </Nav.Link>
        <hr></hr>
      </Nav.Item>
    );
  } else {
    close = null;
    logout = null;
  }
  return (
    <Col className={`dashboard-sidebar ${toggled}`}>
      {close}
      <Image className="dashboard-logo" src={Logo} />
      <Nav className="dashboard-profile">
        <Nav.Item>
          <Nav.Link
            className="dashboard-profile-item"
            eventKey="profile"
            onClick={(e) => {
              handleExitSidebar();
            }}
          >
            <Image src={UserProfile} />
            <Container className="dashboard-profile-taglines">
              <span className="dashboard-profile-username">
                {data.first_name}
              </span>
              <span>Lihat Profile</span>
            </Container>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav variant="items" className="dashboard-menu">
        <Nav.Item className="dashboard-item">
          <Nav.Link
            className="dashboard-item-content"
            eventKey="policy"
            onClick={(e) => {
              handleExitSidebar();
            }}
          >
            <Image src={IconPolis} />
            <span className="dashboard-item-tagline">E-Sertifikat</span>
          </Nav.Link>
          <hr></hr>
        </Nav.Item>
        {logout}
      </Nav>
    </Col>
  );
};

export default sidebar;
