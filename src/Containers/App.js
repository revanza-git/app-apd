import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import configureStore from "../Store";

import RoutingPage from "./PageContainer/RoutingPage";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const store = configureStore();

class App extends Component {
  render() {
    console.log(process.env.REACT_APP_SIMEDIS_PATH);
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" component={RoutingPage} />
        </Router>
      </Provider>
    );
  }
}
export default App;
