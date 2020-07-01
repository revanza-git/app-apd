import React, { Component } from "react";
import {} from "react-bootstrap";
import Header from "../../Components/Landing/Intro";
import About from "../../Components/Landing/About";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
      </div>
    );
  }
}
export default LandingPage;
