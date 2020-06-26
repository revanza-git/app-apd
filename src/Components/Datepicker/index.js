import React from "react";
import moment from "moment";
import { Form, Col, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Datetime = ({
  labelVal,
  labelCol,
  StateKey,
  TextCol,
  StartDate,
  HandleChange,
}) => {
  const DateParser = (date) => {
    date = moment(date).format("YYYY-MM-DD");
    HandleChange(StateKey, date);
  };

  const SelectDate = (date) => {
    return new Date(date);
  };

  return (
    <div>
      <Form.Group as={Row}>
        <Form.Label column sm={labelCol}>
          {labelVal}
        </Form.Label>
        <Col sm={TextCol}>
          <DatePicker
            showPopperArrow={false}
            selected={SelectDate(StartDate)}
            onChange={(date) => DateParser(date)}
            dateFormat="yyyy-MM-dd"
          />
        </Col>
      </Form.Group>
    </div>
  );
};

export default Datetime;
