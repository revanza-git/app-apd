import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Images
import logoImg from "../../../assets/images/simedis/Logo-equity-life.jpg";
import homeImg from "../../../assets/images/simedis/Simedis-Illutrasi-01-Homepage.svg";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="hero-section" id="home">
          <Container className="hero-content">
            <Row className="header-row" lg={6} sm={8}>
              <div className="logo-img mt-5">
                <img
                  src={logoImg}
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </Row>
            <Row className="justify-content-center">
              <Col lg={6}>
                <div className="hero-wrapper">
                  <h1 className="hero-title">
                    Perlindungan Optimal, Gak Harus Mahal!
                  </h1>

                  <div>
                    <Link to="#" className="btn btn-learn mt-4">
                      Cek sekarang
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg={6} sm={8}>
                <div className="home-img mt-5 mt-lg-0">
                  <img
                    src={homeImg}
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
