import React, { Component } from "react";
// import { Container, Row, Col } from "reactstrap";
import "./index.scss";

//Import Images
import iconOjk from "../../../src/assets/images/simedis/logo-ojk.svg";

class FooterLinks extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="dashboard-footer">
          <p className="dashboard-footer-1">
            Copyright {new Date().getFullYear()} PT Equity Life Indonesia
          </p>

          <p className="dashboard-footer-2">
            CONTACT CENTER <br />
            <span>1500 079</span>
          </p>
          <img
            src={iconOjk}
            className="dashboard-logo-ojk"
            alt="dashboard-logo-ojk"
          />
          <p className="dashboard-footer-3">
            Simedis merupakan program PT Equity Life Indonesia yang terdaftar
            dan diawasi oleh Otoritas Jasa keuangan
          </p>
        </section>
      </React.Fragment>
    );
  }
}

export default FooterLinks;
