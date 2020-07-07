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
          labelVal="Nomor Polis"
          StateKey="policy_no"
          TextCol="10"
          TextType="text"
          Value={dataForm.policy_no}
          HandleChange={changeHandler}
          Disabled={true}
        />
        <TextBox
          Data={dataForm}
          labelCol="2"
          labelVal="Jumlah Peserta"
          StateKey="member_total"
          TextCol="10"
          TextType="text"
          Value={dataForm.member_total}
          HandleChange={changeHandler}
          Disabled={true}
        />
        <TextBox
          Data={dataForm}
          labelCol="2"
          labelVal="Uang Pertanggungan"
          StateKey="sum_insured_ajb"
          TextCol="10"
          TextType="text"
          Value={dataForm.sum_insured_ajb}
          HandleChange={changeHandler}
          Disabled={true}
        />
        <TextBox
          Data={dataForm}
          labelCol="2"
          labelVal="Tanggal Mulai"
          StateKey="insurance_date_start"
          TextCol="10"
          TextType="text"
          Value={dataForm.insurance_date_start}
          HandleChange={changeHandler}
          Disabled={true}
        />
        <TextBox
          Data={dataForm}
          labelCol="2"
          labelVal="Tanggal Berakhir"
          StateKey="insurance_date_end"
          TextCol="10"
          TextType="text"
          Value={dataForm.insurance_date_end}
          HandleChange={changeHandler}
          Disabled={true}
        />
      </Form>
    </div>
  );
};

export default MainInfo;
