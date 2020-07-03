import React, { Component } from "react";
import {} from "react-bootstrap";
import Header from "../../Components/Landing/Intro";
import About from "../../Components/Landing/About";
import Plan from "../../Components/Landing/Plan";
import "./index.scss";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing">
        <Header />
        <About />
        <Plan />
      </div>
    );
  }
}
export default LandingPage;
