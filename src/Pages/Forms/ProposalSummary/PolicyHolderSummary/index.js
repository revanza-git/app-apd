import React from "react";
import { Form } from "react-bootstrap";
import TextBox from "../../../../Components/Textbox";
import Datepicker from "../../../../Components/Datepicker";

const MainInfo = ({ data, changeHandler }) => (
  <div>
    {console.log(data)}
    <Form>
      <TextBox
        labelCol="2"
        labelVal="Nama"
        StateKey="policy_holder_name"
        TextCol="10"
        TextType="text"
        Value={data.policy_holder_name}
        HandleChange={changeHandler}
      />
      <TextBox
        labelCol="2"
        labelVal="Jenis Kelamin"
        StateKey="policy_holder_gender"
        TextCol="10"
        TextType="text"
        Value={data.policy_holder_gender}
        HandleChange={changeHandler}
      />
      <Datepicker
        labelCol="2"
        labelVal="Tanggal Lahir"
        StateKey="policy_holder_birth_date"
        TextCol="10"
        StartDate={data.policy_holder_birth_date}
        HandleChange={changeHandler}
      />
      <TextBox
        labelCol="2"
        labelVal="Usia"
        StateKey="policy_holder_age"
        TextCol="10"
        TextType="text"
        Value={data.policy_holder_age}
        HandleChange={changeHandler}
      />
      <TextBox
        labelCol="2"
        labelVal="Hubungan Dengan Tertanggung"
        StateKey="policy_holder_insured_relationship"
        TextCol="10"
        TextType="text"
        Value={data.policy_holder_insured_relationship}
        HandleChange={changeHandler}
      />
    </Form>
  </div>
);

export default MainInfo;
