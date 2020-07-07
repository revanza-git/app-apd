import React from "react";
import { Jumbotron, Button, Row, Col, Image, Container } from "react-bootstrap";
import "./index.scss";
import logo from "../Intro/Images/Logo-equity-life.jpg";

const Intro = () => (
  <React.Fragment>
    <div className="intro">
      <Jumbotron className="intro">
        <Container className="intro-content">
          <Row className="upper">
            <Col>
              <Image src={logo} alt="Logo Equity" />
            </Col>
            <Col>
              <Button className="login float-right" variant="primary">
                Login
              </Button>
            </Col>
          </Row>
          <Container className="intro-tagline-content">
            <Container className="intro-tagline-wording">
              <h1>Perlindungan Optimal,</h1>
              <h1>Gak Harus Mahal!</h1>
            </Container>
            <Button className="learn-more" variant="primary">
              Cek Sekarang
            </Button>
          </Container>
        </Container>
      </Jumbotron>
    </div>
  </React.Fragment>
);

export default Intro;
