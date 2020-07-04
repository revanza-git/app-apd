import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

const ConBtn = ({ data, targetURL }) => {
  const history = useHistory();
  const isValid = data.states.personal.is_valid;
  const dataPersonal = data.states.personal;
  const loadHandler = data.updatePageLoad;
  const states = data.states;
  const updateData = data.simedisChange;

  const handleClick = () => {
    console.log(data);
    if (isValid) {
      if (targetURL === "/confirmation") {
        loadHandler(true);
        const url =
          "https://cors-anywhere.herokuapp.com/https://sit-eli.myequity.id/customers/register";
        const data = {
          registrationTypeCode: states.reg_type,
          customers: [
            {
              customerName:
                dataPersonal.first_name + " " + dataPersonal.last_name,
              ktpNO: dataPersonal.identification_number,
              dateOfBirth: dataPersonal.gender,
              emailAddress: dataPersonal.email,
              genderCode: dataPersonal.gender,
              occupation: dataPersonal.occupation,
              phoneNo: dataPersonal.phone_number,
              customerStatus: "0",
            },
          ],
        };
        const res = axios
          .post(url, data, "")
          .then((response) => {
            const res = response.data.data;

            updateData("bill_amount", res.billAmount);
            updateData("bill_code", res.billCode);
            updateData("registration_code", res.registrationCode);

            loadHandler(false);

            history.push(targetURL);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        console.log("Bukan registration");
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
