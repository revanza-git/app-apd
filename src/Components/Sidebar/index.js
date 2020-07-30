import React from "react";
import IconPolis from "../../../src/assets/images/simedis/icon-polis.svg";
import UserProfile from "../../../src/assets/images/simedis/icon-user-profil-2.svg";
import Logo from "../../../src/assets/images/simedis/simedislogo2.svg";

import { Col, Nav, Container, Image } from "react-bootstrap";
import "./index.scss";

const sidebar = ({ data }) => {
  console.log(data);
  return (
    <Col lg={3} sm={12} className="dashboard-sidebar">
      <Image className="dashboard-logo" src={Logo} />
      <Nav className="dashboard-profile">
        <Nav.Item>
          <Nav.Link className="dashboard-profile-item" eventKey="profile">
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
          <Nav.Link className="dashboard-item-content" eventKey="policy">
            <Image src={IconPolis} />
            <span className="dashboard-item-tagline">E-Sertifikat</span>
          </Nav.Link>
          <hr></hr>
        </Nav.Item>
      </Nav>
    </Col>
  );
};

export default sidebar;
