import React from "react";
import { Form } from "react-bootstrap";
import TextBox from "../../../Components/Textbox";
import Alerts from "../../../Components/Alerts";
import "./index.scss";

const MainInfo = ({ data, changeHandler, validation, updateValidFlag }) => {
  const dataForm = data.simedis_account;
  return (
    <div>
      <Form className="login-inputs">
        <TextBox
          Data={dataForm}
          labelCol="2"
          StateKey="username"
          TextCol="12"
          TextType="text"
          Placeholder="Email"
          Validation={validation}
          updateValidFlag={updateValidFlag}
          Value={dataForm.username}
          HandleChange={changeHandler}
        />
        <TextBox
          Data={dataForm}
          labelCol="2"
          StateKey="password"
          TextCol="12"
          TextType="password"
          Placeholder="Kata sandi"
          Validation={validation}
          updateValidFlag={updateValidFlag}
          Value={dataForm.password}
          HandleChange={changeHandler}
        />
        <Alerts data={dataForm} valid={dataForm.is_valid} />
      </Form>
    </div>
  );
};

export default MainInfo;
