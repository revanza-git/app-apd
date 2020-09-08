import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import configureStore from "../Store";
import RegistrationPage from "./PageContainer/RegistrationPage";
import PaymentPage from "./PageContainer/PaymentPage";
import FinishedPage from "./PageContainer/FinishedPage";
import LandingPage from "./PageContainer/LandingPage";
import ConfirmationPage from "./PageContainer/ConfirmationPage";
import ActivationPage from "./PageContainer/ActivationPage";
import LoginPage from "./PageContainer/LoginPage";
import DashboardPage from "./PageContainer/DashboardPage";
import RoutingPage from "./PageContainer/RoutingPage";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          {/* <Route exact path={process.env.PUBLIC_URL}>
            <Redirect to={process.env.PUBLIC_URL + "/welcome"} />
          </Route>
          <Route exact path="/">
            <Redirect to={process.env.PUBLIC_URL + "/welcome"} />
          </Route> */}
          <Route path="/" component={RoutingPage} />
        </Router>
      </Provider>
    );
  }
}
export default App;
