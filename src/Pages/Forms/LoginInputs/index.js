import React from "react";
import { Form } from "react-bootstrap";
import TextBox from "../../../Components/Textbox";

const MainInfo = ({ data, changeHandler, validation, updateValidFlag }) => {
  const dataForm = data.simedis_account;
  return (
    <div>
      <Form>
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
      </Form>
    </div>
  );
};

export default MainInfo;
