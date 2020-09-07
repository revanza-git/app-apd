import React from "react";
import { hydrate } from "react-dom";
import "./index.css";
import App from "./Containers/App";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

hydrate(<App />, document.getElementById("root"));
