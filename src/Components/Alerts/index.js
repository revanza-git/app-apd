import React from "react";
import { Alert } from "react-bootstrap";

const Alerts = ({ data, valid }) =>
  valid === false ? (
    data.form_status !== "" ? (
      <Alert variant="danger">
        <Alert.Heading>{data.form_status}</Alert.Heading>
      </Alert>
    ) : null
  ) : null;

export default Alerts;
