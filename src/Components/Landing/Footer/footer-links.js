import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Images
import iconOjk from "../../../assets/images/simedis/logo-ojk.svg";

class FooterLinks extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section-footer py-4">
          <Container>
            <Row>
              <Col lg={2} xs={12} style={{ textAlign: "left" }}>
                <p className="copyright-desc text-white mb-0 ml-3 mt-3">
                  Copyright {new Date().getFullYear()} PT Equity Life Indonesia
                </p>
              </Col>
              <Col lg={3} xs={12}>
                <p className="contact-center text-white mb-0 ml-5 mt-3">
                  CONTACT CENTER <br />
                  <span
                    style={{
                      fontWeight: "bolder",
                      fontSize: "1.2em",
                    }}
                  >
                    1500 079
                  </span>
                </p>
              </Col>
              <Col lg={7} xs={12}>
                <div>
                  <Container>
                    <Row>
                      <Col lg={4}>
                        <img src={iconOjk} alt="logo-ojk" />
                      </Col>
                      <Col lg={8}>
                        <p className="text-white mb-0 mt-3">
                          Simedis merupakan program PT Equity Life Indonesia
                          yang terdaftar dan diawasi oleh Otoritas Jasa keuangan
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default FooterLinks;
