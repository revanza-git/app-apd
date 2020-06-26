import React from "react";
import { Form } from "react-bootstrap";
import TextBox from "../../../Components/Textbox";
import Select from "../../../Components/Selects";
import Datepicker from "../../../Components/Datepicker";
import PhoneNumber from "../../../Components/PhoneNumber";

const MainInfo = ({ data, changeHandler }) => (
  <div>
    {console.log(data)}
    <Form>
      <TextBox
        labelCol="2"
        labelVal="Nama"
        StateKey="personal_name"
        TextCol="10"
        TextType="text"
        Value={data.personal_name}
        HandleChange={changeHandler}
      />
      <TextBox
        labelCol="2"
        labelVal="Nomor KTP"
        StateKey="personal_no_ktp"
        TextCol="10"
        TextType="text"
        Value={data.personal_no_ktp}
        HandleChange={changeHandler}
      />
      <Datepicker
        labelCol="2"
        labelVal="Tanggal Lahir"
        StateKey="personal_birth_date"
        TextCol="10"
        StartDate={data.personal_birth_date}
        HandleChange={changeHandler}
      />
      <TextBox
        labelCol="2"
        labelVal="Email"
        StateKey="personal_email"
        TextCol="10"
        TextType="email"
        Value={data.personal_email}
        Placeholder="Please enter your email"
        HandleChange={changeHandler}
      />
      <Select
        labelCol="2"
        labelVal="Kelamin"
        TextCol="10"
        StateKey="personal_gender"
        HandleChange={changeHandler}
      />
      <TextBox
        labelCol="2"
        labelVal="Pekerjaan"
        StateKey="personal_occupation"
        TextCol="10"
        TextType="text"
        Value={data.personal_occupation}
        HandleChange={changeHandler}
      />
      <TextBox
        labelCol="2"
        labelVal="Nomor HP"
        StateKey="personal_phone_number"
        TextCol="10"
        TextType="number"
        Value={data.personal_phone_number}
        HandleChange={changeHandler}
      />
      {/* <PhoneNumber
        labelCol="2"
        labelVal="Nomor HP"
        StateKey="personal_phone_number"
        TextCol="10"
        Value={data.personal_phone_number}
        HandleChange={changeHandler}
      /> */}
    </Form>
  </div>
);

export default MainInfo;
