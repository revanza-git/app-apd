import React from "react";
import { Form, Col, Row } from "react-bootstrap";

const Textbox = ({
  Data,
  labelCol,
  labelVal,
  StateKey,
  TextType,
  TextCol,
  Value,
  Validation,
  Placeholder = "",
  HandleChange,
  Disabled = false,
}) => {
  const onChange = (e) => {
    if (StateKey === "identification_number" || StateKey === "phone_number") {
      const re = /^[0-9\b]+$/;
      if (e.target.value === "" || re.test(e.target.value)) {
        HandleChange(StateKey, e.target.value);
      }
    } else {
      HandleChange(StateKey, e.target.value);
    }

    const formValidation = Validation(Data);
    if (formValidation) {
      HandleChange("is_valid", true);
    } else {
      HandleChange("is_valid", false);
    }
  };
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
            onChange={(event) => onChange(event)}
          />
        </Col>
      </Form.Group>
    </div>
  );
};

export default Textbox;
