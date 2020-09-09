import React, { Component } from "react";
import Homepage from "./Index1";
import { withRouter, BrowserRouter as Router } from "react-router-dom";

// Import Scss
import "./theme.scss";

//Import Icon Css
import "../../assets/css/materialdesignicons.min.css";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Homepage />
        </Router>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
