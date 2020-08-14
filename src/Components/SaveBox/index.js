import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";

const SaveBox = ({ onSaveAction }) => (
  <div>
    <Form.Group as={Row}>
      <Col sm={{ span: 12, offset: 0 }}>
        <Button
          className="float-right"
          onClick={onSaveAction}
          type="submit"
          style={{ backgroundColor: "#7bc697" }}
        >
          Continue
        </Button>
      </Col>
    </Form.Group>
  </div>
);

export default SaveBox;
