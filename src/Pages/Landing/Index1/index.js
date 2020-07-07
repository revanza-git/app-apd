import React, { Component } from "react";

import Section from "./section";

import Clients from "../../../Components/Landing/Client/client";
import Pricing from "../../../Components/Landing/Pricing/pricing";
import Faq from "../../../Components/Landing/Faq";
import Footer from "../../../Components/Landing/Footer/footer";

class Index1 extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Importing section */}
        <Section />

        {/* Importing Clients */}
        <Clients />

        {/* Importing Pricing */}
        <Pricing />

        {/* Importing Clients */}
        <Faq />

        {/* Importing Footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index1;
