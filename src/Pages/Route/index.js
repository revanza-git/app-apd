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
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Route exact path="/">
          <Redirect to={process.env.PUBLIC_URL + "/welcome"} />
          <Route path="activation">
            <Redirect
              to={
                process.env.PUBLIC_URL +
                "/activation" +
                this.props.location.search
              }
            />
          </Route>
        </Route>

        <Route path="/activation">
          <Redirect
            to={
              process.env.PUBLIC_URL +
              "/activation" +
              this.props.location.search
            }
          />
        </Route>

        <Route
          exact
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
        <Route exact path={process.env.PUBLIC_URL + "/payment/notification"} />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/payment/finish"}
          component={FinishedPage}
        />
        <Route exact path={process.env.PUBLIC_URL + "/payment/unfinish"} />
        <Route exact path={process.env.PUBLIC_URL + "/payment/error"} />
      </div>
    );
  }
}

export default Routing;
