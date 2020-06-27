import React from "react";
import { Alert } from "react-bootstrap";

const Alerts = ({ data, valid }) =>
  valid === false ? (
    <Alert variant="danger">
      <Alert>{data.personal_form_status}</Alert>
    </Alert>
  ) : null;

export default Alerts;
