import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import configureStore from "../Store";
import SpajPage from "./FormContainer/SpajPage";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Redirect from="/" to="/spaj/nasabah" />
      <Route path="/spaj/nasabah" component={SpajPage} />
    </Router>
  </Provider>
);

export default App;
