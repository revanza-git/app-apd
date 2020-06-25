import React from "react";
import { Form } from "react-bootstrap";
import TextBox from "../../../../Components/Textbox";

const MainInfo = ({ data, changeHandler }) => (
  <div>
    <Form>
      <TextBox
        labelCol="2"
        labelVal="Metode Pembayaran"
        StateKey="payment_method"
        TextCol="10"
        TextType="text"
        Value={data.payment_method}
        HandleChange={changeHandler}
      />
    </Form>
  </div>
);

export default MainInfo;
