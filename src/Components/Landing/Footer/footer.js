import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Media } from "reactstrap";
import FeatherIcon from "feather-icons-react";

//Import Footer link
import FooterLinks from "./footer-links";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer">
          <FooterLinks />
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
