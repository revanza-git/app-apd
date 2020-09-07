import React from "react";
import { Form } from "react-bootstrap";
import TextBox from "../../../Components/Textbox";
import Gender from "../../../Components/Selects/Gender";
import Relationship from "../../../Components/Selects/Relationship";
import Datepicker from "../../../Components/Datepicker";

const UserOther = ({ data, changeHandler }) => {
  console.log(data);
  const dataForm = data.form_2;
  const genderData = data.gender;
  const relationshipData = data.relationship;

  const validation = (param) => {
    const params = param;
    const updateFormStatus = changeHandler;
    const name = params.full_name.split(" ");
    const gender = params.gender;
    const birth_date = params.birth_date;
    const occupation = params.occupation;

    if (
      name === "" ||
      gender === "" ||
      birth_date === "" ||
      occupation === ""
    ) {
      updateFormStatus("form_status", "Form harus diisi semua");
      return false;
    } else {
      updateFormStatus("form_status", "ok");
      return true;
    }
  };

  return (
    <div>
      <Form>
        <Relationship
          labelCol="2"
          labelVal="relationship"
          TextCol="10"
          Validation={validation}
          StateKey="relation_code"
          HandleChange={changeHandler}
          Display={true}
          Data={relationshipData}
          BlockChoices={["0"]}
        />
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
        <Datepicker
          labelCol="2"
          labelVal="Tanggal Lahir"
          StateKey="birth_date"
          TextCol="10"
          Validation={validation}
          StartDate={dataForm.birth_date}
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
      </Form>
    </div>
  );
};

export default UserOther;
