import React from "react";
import { Form, Container } from "react-bootstrap";
import TextBox from "../../../Components/Textbox";

const MainInfo = ({ data, changeHandler, validation, updateValidFlag }) => {
  const dataForm = data.simedis_account;
  return (
    <div>
      <Form style={{ border: "dotted" }}>
        <TextBox
          Data={dataForm}
          labelCol="2"
          labelVal="Username"
          StateKey="username"
          TextCol="10"
          TextType="text"
          Validation={validation}
          updateValidFlag={updateValidFlag}
          Value={dataForm.username}
          HandleChange={changeHandler}
          Disabled={true}
        />
        <TextBox
          Data={dataForm}
          labelCol="2"
          labelVal="Password"
          StateKey="password"
          TextCol="10"
          TextType="password"
          Validation={validation}
          updateValidFlag={updateValidFlag}
          Value={dataForm.password}
          HandleChange={changeHandler}
        />
        <TextBox
          Data={dataForm}
          labelCol="2"
          labelVal="Re-type Password"
          StateKey="password_retype"
          TextCol="10"
          TextType="password"
          Validation={validation}
          updateValidFlag={updateValidFlag}
          Value={dataForm.password_retype}
          HandleChange={changeHandler}
        />
      </Form>
    </div>
  );
};

export default MainInfo;
