import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import configureStore from "../Store";
import ApdPage from "./PageContainer/ApdPage";
import PaymentPage from "./PageContainer/PaymentPage";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Redirect from="/" to="/registrasi" />
      <Route path="/registrasi" component={ApdPage} />
      <Route path="/payment" component={PaymentPage} />
    </Router>
  </Provider>
);

export default App;
