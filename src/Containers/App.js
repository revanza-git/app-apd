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
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path={process.env.PUBLIC_URL}>
            {/* <Redirect to="/landing" /> */}
            <Redirect to={process.env.PUBLIC_URL + "/welcome"} />
          </Route>
          <Route exact path="/">
            {/* <Redirect to="/landing" /> */}
            <Redirect to={process.env.PUBLIC_URL + "/welcome"} />
          </Route>
          {/* <Route exact path="/registration">
            <Redirect to="/registration?type=individu" />
          </Route> */}
          <Route
            path={process.env.PUBLIC_URL + "/dashboard"}
            component={DashboardPage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/activation"}
            component={ActivationPage}
          />

          <Route
            exact
            path={process.env.PUBLIC_URL + "/login"}
            component={LoginPage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/confirmation"}
            component={ConfirmationPage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/welcome"}
            component={LandingPage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/registration"}
            component={RegistrationPage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/payment"}
            component={PaymentPage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/payment/notification"}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/payment/finish"}
            component={FinishedPage}
          />
          <Route exact path={process.env.PUBLIC_URL + "/payment/unfinish"} />
          <Route exact path={process.env.PUBLIC_URL + "/payment/error"} />
        </Router>
      </Provider>
    );
  }
}
export default App;
