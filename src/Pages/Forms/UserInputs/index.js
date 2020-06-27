import React from "react";
import { Form } from "react-bootstrap";
import TextBox from "../../../Components/Textbox";
import Select from "../../../Components/Selects";
import Datepicker from "../../../Components/Datepicker";

const MainInfo = ({ data, validation, changeHandler }) => {
  const dataForm = data.formEdit;
  return (
    <div>
      <Form>
        <TextBox
          Data={data}
          labelCol="2"
          labelVal="Nama"
          StateKey="personal_name"
          TextCol="10"
          TextType="text"
          Validation={validation}
          Value={dataForm.personal_name}
          HandleChange={changeHandler}
        />
        <TextBox
          Data={data}
          labelCol="2"
          labelVal="Nomor KTP"
          StateKey="personal_identification_number"
          TextCol="10"
          TextType="text"
          Validation={validation}
          Value={dataForm.personal_identification_number}
          HandleChange={changeHandler}
        />
        <Datepicker
          labelCol="2"
          labelVal="Tanggal Lahir"
          StateKey="personal_birth_date"
          TextCol="10"
          Validation={validation}
          StartDate={dataForm.personal_birth_date}
          HandleChange={changeHandler}
        />
        <TextBox
          Data={data}
          labelCol="2"
          labelVal="Email"
          StateKey="personal_email"
          TextCol="10"
          TextType="email"
          Validation={validation}
          Value={dataForm.personal_email}
          Placeholder="Please enter your email"
          HandleChange={changeHandler}
        />
        <Select
          Data={data}
          labelCol="2"
          labelVal="Kelamin"
          TextCol="10"
          Validation={validation}
          StateKey="personal_gender"
          HandleChange={changeHandler}
        />
        <TextBox
          Data={data}
          labelCol="2"
          labelVal="Pekerjaan"
          StateKey="personal_occupation"
          TextCol="10"
          TextType="text"
          Validation={validation}
          Value={dataForm.personal_occupation}
          HandleChange={changeHandler}
        />
        <TextBox
          Data={data}
          labelCol="2"
          labelVal="Nomor HP"
          StateKey="personal_phone_number"
          TextCol="10"
          TextType="text"
          Validation={validation}
          Value={dataForm.personal_phone_number}
          HandleChange={changeHandler}
        />
      </Form>
    </div>
  );
};

export default MainInfo;
