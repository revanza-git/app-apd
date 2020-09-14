import { Route, Redirect } from "react-router-dom";
import RegistrationPage from "../../Containers/PageContainer/RegistrationPage";
import PaymentPage from "../../Containers/PageContainer/PaymentPage";
import FinishedPage from "../../Containers/PageContainer/FinishedPage";
import LandingPage from "../../Containers/PageContainer/LandingPage";
import ConfirmationPage from "../../Containers/PageContainer/ConfirmationPage";
import ActivationPage from "../../Containers/PageContainer/ActivationPage";
import LoginPage from "../../Containers/PageContainer/LoginPage";
import DashboardPage from "../../Containers/PageContainer/DashboardPage";
import React, { Component } from "react";

class Routing extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Route exact path="/">
          <Redirect to="/welcome" />
        </Route>

        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/activation" component={ActivationPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/confirmation" component={ConfirmationPage} />
        <Route path="/welcome" component={LandingPage} />
        <Route exact path="/registration" component={RegistrationPage} />
        <Route exact path="/payment" component={PaymentPage} />
        <Route exact path="/payment/notification" />
        <Route exact path="/payment/finish" component={FinishedPage} />
        <Route exact path="/payment/unfinish" />
        <Route exact path="/payment/error" />
      </div>
    );
  }
}

export default Routing;
