import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./index.scss";

const ConBtn = ({ data, targetURL, label }) => {
  //depended need fix for dynamic form
  const dataFormOne = data.states.form_1;
  const personalChange = data.formOne;

  const history = useHistory();

  const loadHandler = data.updatePageLoad;
  const states = data.states;
  const updateData = data.simedisPaymentChange;
  const accountFormData = data.states.simedis_account;
  const updateFormAccountChange = data.simedisAccountChange;

  const GenerateData = () => {
    if (data.states.form_type === "individu") {
      const data = {
        registrationTypeCode: states.reg_type,
        appCode: states.app_code,
        usedReferralCode: "",
        customers: [
          {
            customerName: dataFormOne.full_name,
            ktpNO: dataFormOne.identification_number,
            dateOfBirth: dataFormOne.birth_date,
            emailAddress: dataFormOne.email,
            genderCode: dataFormOne.gender,
            occupation: dataFormOne.occupation,
            phoneNo: dataFormOne.phone_number,
            customerStatus: dataFormOne.relation_code,
          },
        ],
      };

      return data;
    } else {
      const data = {
        registrationTypeCode: states.reg_type,
        appCode: states.app_code,
        usedReferralCode: "",
        customers: [
          {
            customerName: dataFormOne.full_name,
            ktpNO: dataFormOne.identification_number,
            dateOfBirth: dataFormOne.birth_date,
            emailAddress: dataFormOne.email,
            genderCode: dataFormOne.gender,
            occupation: dataFormOne.occupation,
            phoneNo: dataFormOne.phone_number,
            customerStatus: dataFormOne.relation_code,
          },
        ],
      };

      return data;
    }
  };

  const handleClick = () => {
    if (targetURL === "/confirmation") {
      loadHandler(true);
      const url = process.env.REACT_APP_USER_REGISTER_URL;
      const data = GenerateData();
      const config = {
        headers: {
          Authorization: accountFormData.token,
        },
      };

      axios
        .post(url, data, config)
        .then((response) => {
          const res = response.data.data;

          updateData("bill_amount", res.billAmount);
          updateData("bill_code", res.billCode);
          updateData("registration_code", res.registrationCode);

          history.push(targetURL);
        })
        .catch(function (error) {
          const errMessage = error.response.data.message;
          personalChange("form_status", errMessage);
          personalChange("is_valid", false);
          loadHandler(false);
        });
    } else if (targetURL === "/activation") {
      if (accountFormData.password !== accountFormData.password_retype) {
        updateFormAccountChange(
          "form_status",
          "Kata sandi belum sesuai, silahkan ulang kembali."
        );
        updateFormAccountChange("is_valid", false);
      } else {
        const url = process.env.REACT_APP_USER_ACTIVATE_URL;
        const data = {
          accountCode: accountFormData.account_code,
          username: accountFormData.username,
          password: accountFormData.password,
        };
        const config = {
          headers: {
            Authorization: accountFormData.token,
          },
        };

        loadHandler(true);
        axios
          .post(url, data, config)
          .then((res) => {
            updateFormAccountChange("active", true);
            updateFormAccountChange("form_status", "ok");

            loadHandler(false);
            history.push("/activation");
          })
          .catch(function (error) {
            updateFormAccountChange(
              "form_status",
              "Mohon maaf koneksi mengalami kendala, silahkan coba lagi"
            );
            updateFormAccountChange("is_valid", false);

            loadHandler(false);
          });
      }
    } else if (targetURL === "/dashboard") {
      loadHandler(true);
      const url = process.env.REACT_APP_LOGIN_URL;
      const data = {
        username: accountFormData.username,
        password: accountFormData.password,
      };

      axios
        .post(url, data, "")
        .then((res) => {
          const token = res.data.token;
          const userData = res.data.data.user;

          updateFormAccountChange("username", userData.username);
          updateFormAccountChange("token", token);
          history.push(targetURL + "?id=" + userData.id);
        })
        .catch(function (error) {
          const resMessage = error.response.data.data.message;
          let errMessage;

          if (resMessage === "username or password are invalid") {
            errMessage = "Email atau password tidak valid";
          } else {
            errMessage = resMessage;
          }

          updateFormAccountChange("form_status", errMessage);
          updateFormAccountChange("is_valid", false);

          loadHandler(false);
        });
    } else if (targetURL === "/payment") {
      history.push(targetURL);
    } else {
      console.log("Halaman Belum Terdaftar");
    }
  };
  return (
    <div>
      <Form.Group as={Row}>
        <Col>
          <Button
            className="btn-continue"
            onClick={() => handleClick()}
            type="submit"
          >
            <span className="btn-tagline">{label}</span>
          </Button>
        </Col>
      </Form.Group>
    </div>
  );
};

export default ConBtn;
