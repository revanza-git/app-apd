import React from "react";
import { Row, Col, Image, Container, Carousel } from "react-bootstrap";
import "./index.scss";
import icon from "../About/Images/icon-benefit-04.png";

const About = () => (
  <div className="about">
    <Container>
      <h1>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <Container>
                  <Row className="about-tagline-header">
                    <Image className="about" src={icon} />
                    <h1> Manfaat</h1>
                  </Row>
                  <Row className="about-tagline-content">
                    <Col xs="8" className="about-tagline-content-left">
                      <h1>Meninggal dunia karena Penyakit atau Kecelakaan</h1>
                      <h1>Meninggal dunia karena terinfeksi COVID-19</h1>
                      <h1>
                        Santunan Biaya Perawatan Harian Rumah Sakit akibat
                        terinfeksi Virus COVID-19
                      </h1>
                    </Col>
                    <Col xs="4" className="about-tagline-content-right">
                      <h1>
                        20 <a>Juta</a>
                      </h1>
                      <h1>
                        30 <a>Juta</a>
                      </h1>
                      <h1>
                        200 <a>Ribu/hari</a>
                      </h1>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <p>tes</p>
          </Col>
        </Row>
      </h1>
    </Container>
  </div>
);

export default About;
