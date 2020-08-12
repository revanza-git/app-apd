import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import Input from "react-phone-number-input/input"

const Textbox = ({
    labelCol,
    labelVal,
    StateKey,
    TextCol,
    Value,
    Placeholder = "",
    HandleChange,
    Disabled = false,
}) => (
        <div>
            <Form.Group as={Row}>
                <Form.Label column sm={labelCol}>
                    {labelVal}
                </Form.Label>
                <Col sm={TextCol}>
                    <Input
                        country="ID"
                        value={Value}
                        onChange={(event) => { HandleChange(StateKey, event) }}
                        disabled={Disabled}
                        placeholder={Placeholder}
                    />
                </Col>
            </Form.Group>
        </div>
    );

export default Textbox;
