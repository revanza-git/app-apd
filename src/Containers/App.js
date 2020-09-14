import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import configureStore from "../Store";

import RoutingPage from "./PageContainer/RoutingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route component={RoutingPage} />
        </Router>
      </Provider>
    );
  }
}
export default App;
