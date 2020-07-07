import React from "react";
import { Row, Col, Image, Container, Carousel } from "react-bootstrap";
import "./index.scss";
import icon from "../About/Images/icon-benefit-04.png";

const About = () => (
  <div className="about">
    <Container>
      <Row className="content">
        <Col className="about-left-content">
          <Carousel>
            <Carousel.Item>
              <Container>
                <Row className="about-tagline-header">
                  <Image className="about" src={icon} />
                  <h1> Manfaat</h1>
                </Row>
                <Row className="about-tagline-content">
                  <Col xs="7" className="about-tagline-content-left">
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
        <Col className="about-right-content">
          <Container>
            <p>
              <span>Simedis</span>, layaknya tenaga medis yang selalu siaga
              menghadapi COVID-19.
            </p>
            <p>
              <span>Simedis</span> merupakan program Asuransi Jiwa Berjangka
              dari Equity life Indonesia yang memberikan perlindungan terhadap
              risiko meninggal dunia dan terinfeksi virus COVID-19 dalam bentuk
              santunan tunai.
            </p>
            <p>
              <span>Simedis</span> hadir dengan premi yang sangat terjangkau dan
              beragam pilihan plan yang dapat disesuaikan dengan kebutuhanmu.
              Ayo, sambut new normal dengan lindungi diri dan orang yang kamu
              sayangi sekarang juga!
            </p>

            <p>#simedis #staysafestayhealthy</p>
          </Container>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
