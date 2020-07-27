import React from "react";
import { Alert } from "react-bootstrap";
import "./index.scss";

const Alerts = ({ data, valid }) =>
  valid === false ? (
    data.form_status !== "" ? (
      <Alert variant="danger">
        <span className="span-alert">{data.form_status}</span>
      </Alert>
    ) : null
  ) : null;

export default Alerts;
