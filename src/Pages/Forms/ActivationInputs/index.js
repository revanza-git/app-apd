import React from "react";
import { Form } from "react-bootstrap";
import TextBox from "../../../Components/Textbox";
import Alerts from "../../../Components/Alerts";
import "./index.scss";

const MainInfo = ({ data, changeHandler, validation, updateValidFlag }) => {
  const dataForm = data.simedis_account;
  return (
    <div>
      <Form className="activation-inputs">
        <TextBox
          Data={dataForm}
          labelCol="2"
          StateKey="password"
          TextCol="12"
          TextType="password"
          Placeholder="Masukkan kata sandi"
          Validation={validation}
          updateValidFlag={updateValidFlag}
          Value={dataForm.password}
          HandleChange={changeHandler}
        />
        <TextBox
          Data={dataForm}
          labelCol="2"
          StateKey="password_retype"
          TextCol="12"
          TextType="password"
          Placeholder="Masukkan ulang kata sandi"
          Validation={validation}
          updateValidFlag={updateValidFlag}
          Value={dataForm.password_retype}
          HandleChange={changeHandler}
        />
        <Alerts data={dataForm} valid={dataForm.is_valid} />
      </Form>
    </div>
  );
};

export default MainInfo;
