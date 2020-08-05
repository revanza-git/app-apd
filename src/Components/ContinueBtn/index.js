import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./index.scss";

const ConBtn = ({ data, targetURL, valid, label }) => {
  //depended need fix for dynamic form
  const dataFormOne = data.states.form_1;
  const dataFormTwo = data.states.form_2;
  const personalChange = data.formOne;

  const history = useHistory();
  const isValid = valid;

  const loadHandler = data.updatePageLoad;
  const states = data.states;
  const updateData = data.simedisChange;
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
          // {
          //   customerName: dataFormTwo.full_name,
          //   ktpNO: dataFormTwo.identification_number,
          //   dateOfBirth: dataFormTwo.birth_date,
          //   emailAddress: dataFormTwo.email,
          //   genderCode: dataFormTwo.gender,
          //   occupation: dataFormTwo.occupation,
          //   phoneNo: dataFormTwo.phone_number,
          //   customerStatus: dataFormTwo.relation_code,
          // },
        ],
      };

      return data;
    }
  };

  const handleClick = () => {
    console.log(isValid);
    if (isValid) {
      if (targetURL === "/confirmation") {
        if (dataFormOne.form_status === "ok") {
          console.log(dataFormOne.form_status);
          loadHandler(true);
          const url =
            "https://cors-anywhere.herokuapp.com/https://sit-eli.myequity.id/customers/register";

          const data = GenerateData();

          axios
            .post(url, data, "")
            .then((response) => {
              const ok = response.data.ok;
              const res = response.data.data;

              if (ok === true) {
                updateData("bill_amount", res.billAmount);
                updateData("bill_code", res.billCode);
                updateData("registration_code", res.registrationCode);

                history.push(targetURL);
              } else {
                const errRes = response.data.message;

                personalChange("is_valid", false);
                personalChange("form_status", errRes);
                loadHandler(false);
              }
            })
            .catch(function (error) {
              personalChange("form_status", "Koneksi bermasalah");
              personalChange("is_valid", false);
              loadHandler(false);
            });
        } else {
          personalChange("is_valid", false);
          personalChange("form_status", "form belum valid");
        }
      } else if (targetURL === "/login") {
        if (accountFormData.password !== accountFormData.password_retype) {
          updateFormAccountChange(
            "form_status",
            "Isi ulang password tidak sama dengan password"
          );
          updateFormAccountChange("is_valid", false);
        } else {
          const url =
            "https://cors-anywhere.herokuapp.com/https://sit-eli.myequity.id/customers/activate";
          const data = {
            registrationCode: accountFormData.registration_code,
            username: accountFormData.username,
            password: accountFormData.password,
          };

          loadHandler(true);

          axios
            .post(url, data, "")
            .then((res) => {
              console.log(targetURL);
              updateFormAccountChange("active", true);
              console.log(res);
              loadHandler(false);
              history.push(targetURL);
            })
            .catch(function (error) {
              updateFormAccountChange("form_status", "Koneksi bermasalah");
              updateFormAccountChange("is_valid", false);
              loadHandler(false);
            });
        }
      } else if (targetURL === "/dashboard") {
        loadHandler(true);
        const url = "https://sit-eli.myequity.id/auth/";
        const data = {
          username: accountFormData.username,
          password: accountFormData.password,
        };

        axios
          .post(url, data, "")
          .then((res) => {
            console.log(res);
            const token = res.data.token;
            const userData = res.data.data.user;
            const resMessage = res.data.data.message;

            if (resMessage === "username or password are invalid") {
              updateFormAccountChange("form_status", resMessage);
              updateFormAccountChange("is_valid", false);
              loadHandler(false);
            } else {
              loadHandler(false);
              updateFormAccountChange("username", userData.username);
              updateFormAccountChange("token", token);
              history.push(targetURL + "?id=" + userData.id);
            }
          })
          .catch(function (error) {
            updateFormAccountChange("form_status", "Koneksi bermasalah");
            updateFormAccountChange("is_valid", false);
            console.log(error);
            loadHandler(false);
          });
      } else {
        console.log("Halaman Belum Terdaftar");
        history.push(targetURL);
      }
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
