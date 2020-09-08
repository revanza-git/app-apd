import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Images
import logoImg from "../../../assets/images/simedis/Logo-equity-life.jpg";
import homeImg from "../../../assets/images/simedis/Simedis-Illutrasi-01-Homepage.svg";
import simedisImg from "../../../assets/images/simedis/logo-simedis.svg";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="hero-section" id="home">
          <Container className="hero-content">
            <Row className="justify-content-top">
              <Col lg={6}>
                <div className="hero-wrapper mb-5 mt-5" fixed="top">
                  <img
                    src={logoImg}
                    alt="equity-logo"
                    className="ml-4"
                    height="80"
                  />
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="intro-bottom-part">
            <Row className="justify-content-left">
              <Col lg={5} sm={6} xs={12}>
                <Container className="hero-wrapper mt-5">
                  <img
                    src={simedisImg}
                    alt="simedis logo"
                    className="logo-simedis img-fluid mx-auto"
                    height="80"
                  />
                  <h3 className="intro-title mb-4">
                    Perlindungan Optimal, Gak Harus Mahal!
                  </h3>

                  <div className="mt-4">
                    <Link
                      to={process.env.PUBLIC_URL + "/welcome/#tab-section"}
                      className="btn btn-learn"
                      onClick={() => {
                        window.scrollTo(0, 830);
                      }}
                    >
                      Cek sekarang
                    </Link>
                  </div>
                </Container>
              </Col>
              <img
                src={homeImg}
                alt=""
                className="logo-home img-fluid d-block"
              />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
