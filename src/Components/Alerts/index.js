import React from "react";
import { Alert } from "react-bootstrap";

const Alerts = ({ data, open }) =>
  !open ? (
    <Alert variant="danger">
      <Alert.Heading>Form Invalid</Alert.Heading>
      {/* {Object.values(data).map((item, i) => {
        return <p key={i}>{item}</p>;
      })} */}
    </Alert>
  ) : null;

export default Alerts;
