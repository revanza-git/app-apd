import React from "react";
import { Form } from "react-bootstrap";
import TextBox from "../../../Components/Textbox";
import Select from "../../../Components/Selects";
import Datepicker from "../../../Components/Datepicker";

const MainInfo = ({ data, changeHandler, validation, updateValidFlag }) => {
  const dataForm = data.personal;
  const genderData = data.gender;
  return (
    <div>
      <Form>
        <TextBox
          Data={dataForm}
          labelCol="2"
          labelVal="Nama Depan"
          StateKey="first_name"
          TextCol="10"
          TextType="text"
          Validation={validation}
          updateValidFlag={updateValidFlag}
          Value={dataForm.first_name}
          HandleChange={changeHandler}
        />
        <TextBox
          Data={dataForm}
          labelCol="2"
          labelVal="Nama Belakang"
          StateKey="last_name"
          TextCol="10"
          TextType="text"
          Validation={validation}
          updateValidFlag={updateValidFlag}
          Value={dataForm.last_name}
          HandleChange={changeHandler}
        />
        <TextBox
          Data={dataForm}
          labelCol="2"
          labelVal="Nomor KTP"
          StateKey="identification_number"
          TextCol="10"
          TextType="text"
          Validation={validation}
          updateValidFlag={updateValidFlag}
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
          Data={dataForm}
          labelCol="2"
          labelVal="Email"
          StateKey="email"
          TextCol="10"
          TextType="email"
          Validation={validation}
          updateValidFlag={updateValidFlag}
          Value={dataForm.email}
          Placeholder="Please enter your email"
          HandleChange={changeHandler}
        />
        <Select
          labelCol="2"
          labelVal="Kelamin"
          TextCol="10"
          Validation={validation}
          StateKey="gender"
          HandleChange={changeHandler}
          Data={genderData}
        />
        <TextBox
          Data={dataForm}
          labelCol="2"
          labelVal="Pekerjaan"
          StateKey="occupation"
          TextCol="10"
          TextType="text"
          Validation={validation}
          updateValidFlag={updateValidFlag}
          Value={dataForm.occupation}
          HandleChange={changeHandler}
        />
        <TextBox
          Data={dataForm}
          labelCol="2"
          labelVal="Nomor HP"
          StateKey="phone_number"
          TextCol="10"
          TextType="text"
          Validation={validation}
          updateValidFlag={updateValidFlag}
          Value={dataForm.phone_number}
          HandleChange={changeHandler}
        />
      </Form>
    </div>
  );
};

export default MainInfo;
