import React from "react";
import { Alert } from "react-bootstrap";

const Alerts = ({ data, open }) =>
  open ? (
    <Alert variant="success">
      <Alert.Heading>Data Saved</Alert.Heading>
      {Object.values(data).map((item, i) => {
        return <p key={i}>{item}</p>;
      })}
    </Alert>
  ) : null;

export default Alerts;
