import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import configureStore from "../Store";
import RegistrationPage from "./PageContainer/RegistrationPage";
import PaymentPage from "./PageContainer/PaymentPage";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Redirect from="/" to="/registration" />
      <Route path="/registration" component={RegistrationPage} />
      <Route path="/payment" component={PaymentPage} />
      <Route path="/payment/notification" />
      <Route path="/payment/finish" />
      <Route path="/payment/unfinish" />
      <Route path="/payment/error" />
    </Router>
  </Provider>
);

export default App;
