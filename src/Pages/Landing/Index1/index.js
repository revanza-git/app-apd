import React, { Component } from "react";

import Section from "./section";
import Service from "../../../Components/Landing/Service/service";
import Features from "../../../Components/Landing/Features/feature";
import Clients from "../../../Components/Landing/Client/client";
import Pricing from "../../../Components/Landing/Pricing/pricing";
import Subscribe from "../../../Components/Landing/Subscribe/Subscribe";
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

        {/* Importing Sunscribe */}
        <Subscribe />

        {/* Importing Footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index1;
