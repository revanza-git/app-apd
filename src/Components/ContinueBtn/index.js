import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ConBtn = ({ data }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/payment");
  };
  return (
    <div>
      <Form.Group as={Row}>
        <Col sm={{ span: 12, offset: 0 }}>
          <Button
            className="float-right"
            onClick={() => handleClick()}
            type="submit"
            style={{ backgroundColor: "#7bc697" }}
          >
            Continue
          </Button>
        </Col>
      </Form.Group>
    </div>
  );
};

export default ConBtn;
