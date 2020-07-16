import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

const ConBtn = ({ data, targetURL, valid }) => {
  const history = useHistory();
  const isValid = valid;
  const dataPersonal = data.states.personal;
  const loadHandler = data.updatePageLoad;
  const states = data.states;
  const updateData = data.simedisChange;
  const personalChange = data.addChange;
  const accountFormData = data.states.simedis_account;
  const updateFormAccountChange = data.simedisAccountChange;

  const handleClick = () => {
    console.log(data);
    console.log("click terhandle");
    if (isValid) {
      if (targetURL === "/confirmation") {
        if (dataPersonal.form_status === "ok") {
          console.log(targetURL);
          loadHandler(true);
          const url =
            "https://cors-anywhere.herokuapp.com/https://sit-eli.myequity.id/customers/register";
          const data = {
            registrationTypeCode: states.reg_type,
            appCode: states.app_code,
            usedReferralCode: "",
            customers: [
              {
                customerName:
                  dataPersonal.first_name + " " + dataPersonal.last_name,
                ktpNO: dataPersonal.identification_number,
                dateOfBirth: dataPersonal.birth_date,
                emailAddress: dataPersonal.email,
                genderCode: dataPersonal.gender,
                occupation: dataPersonal.occupation,
                phoneNo: dataPersonal.phone_number,
                customerStatus: "0",
              },
            ],
          };

          console.log(data);

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
        const url =
          "https://cors-anywhere.herokuapp.com/https://sit-eli.myequity.id/auth";
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
        <Col sm={{ span: 12, offset: 0 }}>
          <Button
            className="float-right"
            onClick={() => handleClick()}
            type="submit"
            style={{ backgroundColor: "#7bc697" }}
          >
            Submit & Continue
          </Button>
        </Col>
      </Form.Group>
    </div>
  );
};

export default ConBtn;
