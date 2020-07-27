import React, { Component } from "react";

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
