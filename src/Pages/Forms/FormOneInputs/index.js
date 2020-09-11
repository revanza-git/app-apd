import React from "react";
import { Form } from "react-bootstrap";
import TextBox from "../../../Components/Textbox";
import Gender from "../../../Components/Selects/Gender";
// import Relationship from "../../../Components/Selects/Relationship";
import Datepicker from "../../../Components/Datepicker";

const MainInfo = ({ data, changeHandler }) => {
  const dataForm = data.form_1;
  const genderData = data.gender;
  // const relationshipData = data.relationship;

  const validation = (param) => {
    const params = param;
    const updateFormStatus = changeHandler;
    const email = params.email;
    const name = params.full_name.split(" ");
    const gender = params.gender;
    const identification_number = params.identification_number;
    const birth_date = params.birth_date;
    const occupation = params.occupation;
    const phone_number = params.phone_number;

    if (
      name === "" ||
      gender === "" ||
      identification_number === "" ||
      birth_date === "" ||
      occupation === "" ||
      phone_number === "" ||
      email === ""
    ) {
      updateFormStatus("form_status", "Form harus diisi semua");
      return false;
    } else if (email !== "") {
      let lastAtPos = email.lastIndexOf("@");
      let lastDotPos = email.lastIndexOf(".");
      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        updateFormStatus("form_status", "Format email tidak benar");
        return false;
      } else {
        updateFormStatus("form_status", "ok");
        return true;
      }
    }
  };

  return (
    <div>
      <Form>
        {/* <Relationship
          labelCol="2"
          labelVal="Relasi"
          TextCol="10"
          Validation={validation}
          StateKey="relation_code"
          HandleChange={changeHandler}
          Data={relationshipData}
          Display={true}
          // BlockChoices={["1", "2", "3"]}
        /> */}

        <TextBox
          Data={dataForm}
          labelCol="2"
          labelVal="Nama"
          StateKey="full_name"
          TextCol="10"
          TextType="text"
          Validation={validation}
          Value={dataForm.full_name}
          HandleChange={changeHandler}
        />
        <TextBox
          Data={dataForm}
          labelCol="2"
          labelVal="Nomor Identitas"
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
          Data={dataForm}
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
        <Gender
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
          Value={dataForm.phone_number}
          HandleChange={changeHandler}
        />
      </Form>
    </div>
  );
};

export default MainInfo;
