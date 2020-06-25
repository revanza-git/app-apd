import React from "react";
import { Form, Col, Row } from "react-bootstrap";

const Selects = ({ labelCol, labelVal, TextCol }) => (
  <div>
    <Form.Group as={Row}>
      <Form.Label column sm={labelCol}>
        {labelVal}
      </Form.Label>
      <Col sm={TextCol}>
        <Form.Control value={-1} placeholder="Pilih..." as="select">
          <option disabled value={-1} key={-1}>Pilih...</option>
          <option value="G01">Pria</option>
          <option value="G02">Wanita</option>
        </Form.Control>
      </Col>
    </Form.Group>
  </div>
);

export default Selects;
