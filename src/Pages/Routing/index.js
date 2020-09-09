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
  constructor(props) {
    super(props);
    this.state = {
      pathname: null,
      redirectStatus: false,
      redirectUrl: null,
    };
  }
  componentDidMount() {
    const location = this.props.location;
    const pathname = location.pathname;
    const search = location.search;

    if (!pathname.includes(process.env.REACT_APP_SIMEDIS_PATH)) {
      this.setState({
        pathname: pathname,
        redirectStatus: true,
        redirectUrl: process.env.REACT_APP_SIMEDIS_PATH + pathname + search,
      });
    }
  }

  render() {
    let redirect;
    if (this.state.redirectStatus) {
      redirect = (
        <Route path={this.state.pathname}>
          <Redirect to={this.state.redirectUrl} />
        </Route>
      );
    }

    return (
      <div>
        <Route exact path="/">
          <Redirect to="/welcome" />
        </Route>

        <Route exact path={process.env.REACT_APP_SIMEDIS_PATH}>
          <Redirect to={process.env.REACT_APP_SIMEDIS_PATH + "/welcome"} />
        </Route>

        {redirect}

        <Route
          exact
          path={process.env.REACT_APP_SIMEDIS_PATH + "/dashboard"}
          component={DashboardPage}
        />
        <Route
          exact
          path={process.env.REACT_APP_SIMEDIS_PATH + "/activation"}
          component={ActivationPage}
        />
        <Route
          exact
          path={process.env.REACT_APP_SIMEDIS_PATH + "/login"}
          component={LoginPage}
        />
        <Route
          exact
          path={process.env.REACT_APP_SIMEDIS_PATH + "/confirmation"}
          component={ConfirmationPage}
        />
        <Route
          path={process.env.REACT_APP_SIMEDIS_PATH + "/welcome"}
          component={LandingPage}
        />
        <Route
          exact
          path={process.env.REACT_APP_SIMEDIS_PATH + "/registration"}
          component={RegistrationPage}
        />
        <Route
          exact
          path={process.env.REACT_APP_SIMEDIS_PATH + "/payment"}
          component={PaymentPage}
        />
        <Route
          exact
          path={process.env.REACT_APP_SIMEDIS_PATH + "/payment/notification"}
        />
        <Route
          exact
          path={process.env.REACT_APP_SIMEDIS_PATH + "/payment/finish"}
          component={FinishedPage}
        />
        <Route
          exact
          path={process.env.REACT_APP_SIMEDIS_PATH + "/payment/unfinish"}
        />
        <Route
          exact
          path={process.env.REACT_APP_SIMEDIS_PATH + "/payment/error"}
        />
      </div>
    );
  }
}

export default Routing;
