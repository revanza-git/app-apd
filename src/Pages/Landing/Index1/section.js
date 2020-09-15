import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Images
import logoImg from "../../../assets/images/simedis/Logo-equity-life.jpg";
import homeImg from "../../../assets/images/simedis/mainilustrationv2-01.svg";
import simedisImg from "../../../assets/images/simedis/logo-simedis.svg";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="hero-section" id="home">
          <Container className="intro-content" fluid>
            <Col className="taglines-intro">
              <img
                src={logoImg}
                alt="equity-logo"
                className="logo-equity"
                height="80"
              />
              <img
                src={simedisImg}
                alt="simedis logo"
                className="logo-simedis "
                height="80"
              />
              <h3 className="intro-title ">
                Perlindungan Optimal, Gak Harus Mahal!
              </h3>

              <Link
                to={"/welcome/#tab-section"}
                className="btn btn-learn"
                onClick={() => {
                  window.scrollTo(0, 830);
                }}
              >
                Cek sekarang
              </Link>
            </Col>
            <img src={homeImg} alt="" className="illus-home" />
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
