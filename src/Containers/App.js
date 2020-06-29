import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import configureStore from "../Store";
import RegistrationPage from "./PageContainer/RegistrationPage";
import PaymentPage from "./PageContainer/PaymentPage";
import FinishedPage from "./PageContainer/FinishedPage";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Route exact path="/">
        <Redirect to="/registration" />
      </Route>
      <Route path="/registration" component={RegistrationPage} />
      <Route exact path="/payment" component={PaymentPage} />
      <Route exact path="/payment/notification" />
      <Route exact path="/payment/finish" component={FinishedPage} />
      <Route exact path="/payment/unfinish" />
      <Route exact path="/payment/error" />
    </Router>
  </Provider>
);

export default App;
