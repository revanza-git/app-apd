import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import configureStore from "../Store";
import RegistrationPage from "./PageContainer/RegistrationPage";
import PaymentPage from "./PageContainer/PaymentPage";
import FinishedPage from "./PageContainer/FinishedPage";
import LandingPage from "./PageContainer/LandingPage";
import ConfirmationPage from "./PageContainer/ConfirmationPage";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {console.log(store)}
        <Router>
          <Route exact path="/">
            <Redirect to="/landing" />
          </Route>
          <Route exact path="/registration">
            <Redirect to="/registration?type=individu" />
          </Route>
          <Route path=""></Route>
          <Route exact path="/confirmation" component={ConfirmationPage} />
          <Route exact path="/landing" component={LandingPage} />
          <Route exact path="/registration" component={RegistrationPage} />
          <Route exact path="/payment" component={PaymentPage} />
          <Route exact path="/payment/notification" />
          <Route exact path="/payment/finish" component={FinishedPage} />
          <Route exact path="/payment/unfinish" />
          <Route exact path="/payment/error" />
        </Router>
      </Provider>
    );
  }
}
export default App;
