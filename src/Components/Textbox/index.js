import React from "react";
import { Form, Col, Row } from "react-bootstrap";

const Textbox = ({
  labelCol,
  labelVal,
  StateKey,
  TextType,
  TextCol,
  Value,
  Placeholder = "",
  HandleChange,
  Disabled = false,
}) => {
  return (
    <div>
      <Form.Group as={Row}>
        <Form.Label column sm={labelCol}>
          {labelVal}
        </Form.Label>
        <Col sm={TextCol}>
          <Form.Control
            type={TextType}
            placeholder={Placeholder}
            disabled={Disabled}
            value={Value}
            onChange={(event) => HandleChange(StateKey, event.target.value)}
          />
        </Col>
      </Form.Group>
    </div>
  );
};

export default Textbox;
