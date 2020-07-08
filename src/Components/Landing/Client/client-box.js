import React, { Component } from "react";
import { Card, CardBody, Row, Container, Col } from "reactstrap";
import BenefitImg from "../../../assets/images/simedis/Icon-Manfaat.svg";
import AdvantageImg from "../../../assets/images/simedis/Icon-Keunggulan.svg";
import PolicyImg from "../../../assets/images/simedis/Icon-Ketentuan.svg";

class ClientBox extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="item">
          <Card className="card-carousel">
            <CardBody className="p-4 mt-5 mb-5">
              <Container>
                <Row className="ml-2 mb-5">
                  <img
                    className="about-image"
                    src={BenefitImg}
                    style={{ height: "5em", width: "auto" }}
                  />
                  <Col className="mt-3">
                    <span
                      className="about-title"
                      style={{
                        fontSize: "2.1em",
                        fontWeight: "600",
                        width: "70px",
                        color: "black",
                      }}
                    >
                      Manfaat
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col xs={7} className="left-tagline">
                    <p>Meninggal dunia karena penyakit atau kecelakaan</p>
                  </Col>
                  <Col xs={5} className="right-tagline">
                    <p>
                      <span>20</span> Juta
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={7} className="left-tagline">
                    <p>Meninggal dunia karena terinfeksi COVID-19</p>
                  </Col>
                  <Col xs={5} className="right-tagline">
                    <p>
                      <span>30</span> Juta
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={7} className="left-tagline">
                    <p>
                      Santunan Biaya Perawatan Harian Rumah Sakit akibat
                      terinfeksi Virus COVID-19
                    </p>
                  </Col>
                  <Col xs={5} className="right-tagline">
                    <p>
                      <span>200</span> Ribu/hari
                    </p>
                  </Col>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </div>
        <div className="item">
          <Card className="card-carousel">
            <CardBody className="p-4 mt-5 mb-5">
              <Container>
                <Row className="ml-2 mb-5">
                  <img
                    className="about-image"
                    src={AdvantageImg}
                    style={{ height: "5em", width: "auto" }}
                  />
                  <Col className="mt-3">
                    <span
                      className="about-title"
                      style={{
                        fontSize: "2.1em",
                        fontWeight: "600",
                        width: "70px",
                        color: "black",
                      }}
                    >
                      Keunggulan
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col xs={7} className="left-tagline">
                    <p>Meninggal dunia karena penyakit atau kecelakaan</p>
                  </Col>
                  <Col xs={5} className="right-tagline">
                    <p>
                      <span>20</span> Juta
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={7} className="left-tagline">
                    <p>Meninggal dunia karena terinfeksi COVID-19</p>
                  </Col>
                  <Col xs={5} className="right-tagline">
                    <p>
                      <span>30</span> Juta
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={7} className="left-tagline">
                    <p>
                      Santunan Biaya Perawatan Harian Rumah Sakit akibat
                      terinfeksi Virus COVID-19
                    </p>
                  </Col>
                  <Col xs={5} className="right-tagline">
                    <p>
                      <span>200</span> Ribu/hari
                    </p>
                  </Col>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </div>
        <div className="item">
          <Card className="card-carousel">
            <CardBody className="p-4 mt-5 mb-5">
              <Container>
                <Row className="ml-2 mb-5">
                  <img
                    className="about-image"
                    src={PolicyImg}
                    style={{ height: "5em", width: "auto" }}
                  />
                  <Col className="mt-3">
                    <span
                      className="about-title"
                      style={{
                        fontSize: "2.1em",
                        fontWeight: "600",
                        width: "70px",
                        color: "black",
                      }}
                    >
                      Keunggulan
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col xs={7} className="left-tagline">
                    <p>Meninggal dunia karena penyakit atau kecelakaan</p>
                  </Col>
                  <Col xs={5} className="right-tagline">
                    <p>
                      <span>20</span> Juta
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={7} className="left-tagline">
                    <p>Meninggal dunia karena terinfeksi COVID-19</p>
                  </Col>
                  <Col xs={5} className="right-tagline">
                    <p>
                      <span>30</span> Juta
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={7} className="left-tagline">
                    <p>
                      Santunan Biaya Perawatan Harian Rumah Sakit akibat
                      terinfeksi Virus COVID-19
                    </p>
                  </Col>
                  <Col xs={5} className="right-tagline">
                    <p>
                      <span>200</span> Ribu/hari
                    </p>
                  </Col>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default ClientBox;