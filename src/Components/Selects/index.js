import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";

const Selects = ({
  labelCol,
  labelVal,
  TextCol,
  StateKey,
  HandleChange,
  Data,
}) => (
  <div>
    {console.log(Data)}
    <Form.Group as={Row}>
      <Form.Label column sm={labelCol}>
        {labelVal}
      </Form.Label>
      <Col sm={TextCol}>
        <Form.Control
          placeholder="Pilih..."
          as="select"
          onChange={(event) => HandleChange(StateKey, event.target.value)}
        >
          {/* <option value="">Pilih...</option>
          <option value="L">Laki-laki</option>
          <option value="P">Perempuan</option> */}
          <option value="">Pilih...</option>
          {Data.map((item) => (
            <option key={item.genderCode} value={item.genderCode}>
              {item.genderDesc}
            </option>
          ))}
        </Form.Control>
      </Col>
    </Form.Group>
  </div>
);

export default Selects;
