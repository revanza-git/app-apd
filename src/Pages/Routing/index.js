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
// import { createBrowserHistory } from "history";

// export const history = createBrowserHistory({
//   basename: process.env.PUBLIC_URL,
// });

class Routing extends Component {
  componentDidMount() {}

  render() {
<<<<<<< HEAD
=======
    // let redirect;
    // if (this.state.redirectStatus) {
    //   redirect = (
    //     <Route path={this.state.pathname}>
    //       <Redirect to={this.state.redirectUrl} />
    //     </Route>
    //   );
    // }

>>>>>>> c64715b5bbdf956d7a0c32d104c81371547d7450
    return (
      <div>
        <Route exact path="/">
          <Redirect to="./welcome" />
        </Route>

<<<<<<< HEAD
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
=======
        {/* <Route exact path={process.env.REACT_APP_SIMEDIS_PATH}>
          <Redirect to={process.env.REACT_APP_SIMEDIS_PATH + "/welcome"} />
        </Route> */}

        {/* {redirect} */}

        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/activation" component={ActivationPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/confirmation" component={ConfirmationPage} />
        <Route path="/welcome" component={LandingPage} />
        <Route path="/registration" component={RegistrationPage} />
        <Route path="/payment" component={PaymentPage} />
        <Route path="/payment/notification" />
        <Route path="/payment/finish" component={FinishedPage} />
        <Route path="/payment/unfinish" />
        <Route path="/payment/error" />
>>>>>>> c64715b5bbdf956d7a0c32d104c81371547d7450
      </div>
    );
  }
}

export default Routing;
