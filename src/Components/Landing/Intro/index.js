import React from "react";
import { Jumbotron, Button, Row, Col, Image, Container } from "react-bootstrap";
import "./index.scss";
import logo from "../Intro/Images/Logo-equity-life.jpg";

const Intro = () => (
  <div className="intro">
    <Jumbotron className="intro">
      <Container>
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

        <h1>Perlindungan Optimal,</h1>
        <h1 className="pb-4">Gak Harus Mahal!</h1>
        <Button className="learn-more" variant="primary">
          Cek Sekarang
        </Button>
      </Container>
    </Jumbotron>
  </div>
);

export default Intro;
