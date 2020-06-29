import React from "react";
import { Form } from "react-bootstrap";
import TextBox from "../../../Components/Textbox";
import Select from "../../../Components/Selects";
import Datepicker from "../../../Components/Datepicker";

const MainInfo = ({ data, changeHandler, validation }) => {
  const dataForm = data.states.personal;
  return (
    <div>
      <Form>
        <TextBox
          Data={data}
          labelCol="2"
          labelVal="Nama Depan"
          StateKey="first_name"
          TextCol="10"
          TextType="text"
          Validation={validation}
          Value={dataForm.first_name}
          HandleChange={changeHandler}
        />
        <TextBox
          Data={data}
          labelCol="2"
          labelVal="Nama Belakang"
          StateKey="last_name"
          TextCol="10"
          TextType="text"
          Validation={validation}
          Value={dataForm.last_name}
          HandleChange={changeHandler}
        />
        <TextBox
          Data={data}
          labelCol="2"
          labelVal="Nomor KTP"
          StateKey="identification_number"
          TextCol="10"
          TextType="text"
          Validation={validation}
          Value={dataForm.identification_number}
          HandleChange={changeHandler}
        />
        <Datepicker
          labelCol="2"
          labelVal="Tanggal Lahir"
          StateKey="birth_date"
          TextCol="10"
          Validation={validation}
          StartDate={dataForm.birth_date}
          HandleChange={changeHandler}
        />
        <TextBox
          Data={data}
          labelCol="2"
          labelVal="Email"
          StateKey="email"
          TextCol="10"
          TextType="email"
          Validation={validation}
          Value={dataForm.email}
          Placeholder="Please enter your email"
          HandleChange={changeHandler}
        />
        <Select
          Data={data}
          labelCol="2"
          labelVal="Kelamin"
          TextCol="10"
          Validation={validation}
          StateKey="gender"
          HandleChange={changeHandler}
        />
        <TextBox
          Data={data}
          labelCol="2"
          labelVal="Pekerjaan"
          StateKey="occupation"
          TextCol="10"
          TextType="text"
          Validation={validation}
          Value={dataForm.occupation}
          HandleChange={changeHandler}
        />
        <TextBox
          Data={data}
          labelCol="2"
          labelVal="Nomor HP"
          StateKey="phone_number"
          TextCol="10"
          TextType="text"
          Validation={validation}
          Value={dataForm.phone_number}
          HandleChange={changeHandler}
        />
      </Form>
    </div>
  );
};

export default MainInfo;
