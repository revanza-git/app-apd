import React from "react";
import { Form } from "react-bootstrap";
import TextBox from "../../../Components/Textbox";

const MainInfo = ({ data, changeHandler }) => {
  const dataForm = data;

  return (
    <div>
      <Form>
        <TextBox
          Data={dataForm}
          labelCol="2"
          labelVal="Nama"
          StateKey="first_name"
          TextCol="10"
          TextType="text"
          Value={dataForm.first_name}
          HandleChange={changeHandler}
          Disabled={true}
        />

        <TextBox
          Data={dataForm}
          labelCol="2"
          labelVal="Email"
          StateKey="email"
          TextCol="10"
          TextType="email"
          Value={dataForm.email}
          Placeholder="Please enter your email"
          HandleChange={changeHandler}
          Disabled={true}
        />
        <TextBox
          Data={dataForm}
          labelCol="2"
          labelVal="Kelamin"
          StateKey="gender"
          TextCol="10"
          TextType="gender"
          Value={dataForm.gender}
          Placeholder="Please enter your email"
          HandleChange={changeHandler}
          Disabled={true}
        />

        <TextBox
          Data={dataForm}
          labelCol="2"
          labelVal="Nomor HP"
          StateKey="phone_number"
          TextCol="10"
          TextType="text"
          Value={dataForm.phone_number}
          HandleChange={changeHandler}
          Disabled={true}
        />
      </Form>
    </div>
  );
};

export default MainInfo;
