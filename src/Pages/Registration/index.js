import React, { Component } from "react";
import FormOneInputs from "../Forms/FormOneInputs";
import FormTwoInputs from "../Forms/FormTwoInputs";
import ContinueBtn from "../../Components/ContinueBtn";
import Alerts from "../../Components/Alerts";
import Loader from "react-loader-spinner";
import axios from "axios";

import "./index.css";
import qs from "qs";

import { Card } from "react-bootstrap";

class RegistrationPage extends Component {
  componentDidMount() {
    const loadHandler = this.props.updatePageLoad;
    const updateFormType = this.props.updateFormType;
    const updateGender = this.props.updateGender;
    const updateRegType = this.props.updateRegType;
    const updateHandler = this.props.formOne;
    const updateRelationship = this.props.updateRelationship;
    const updateAccount = this.props.simedisAccountChange;

    //parsing URL
    const query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });

    loadHandler(true);
    updateFormType(query.type);

    if (query.type === "individu") {
      updateRegType("R2007001");
    } else if (query.type === "pasangan") {
      updateRegType("R2007002");
    } else {
      updateRegType("R2007003");
    }

    this.processData(
      updateGender,
      updateRelationship,
      updateHandler,
      loadHandler,
      updateAccount
    );
  }

  async processData(
    updateGender,
    updateRelationship,
    updateHandler,
    loadHandler,
    updateAccount
  ) {
    const res1 = await this.getGender(updateGender, updateHandler);
    const res2 = await this.getRelationship(updateRelationship, updateHandler);
    const res3 = await this.getToken(updateAccount, updateHandler);

    if (res1 === true && res2 === true && res3 === true) {
      loadHandler(false);
    } else {
      updateHandler("form_status", "Koneksi bermasalah");
      updateHandler("is_valid", false);
    }
  }

  async getToken(updateAccount, updateHandler) {
    const url = process.env.REACT_APP_LOGIN_URL;
    //Hardcode untuk token
    const data = {
      username: this.props.states.simedis_account.username_token,
      password: this.props.states.simedis_account.password_token,
    };

    await axios
      .post(url, data, "")
      .then((res) => {
        const token = res.data.token;
        const userData = res.data.data.user;

        updateAccount("username", userData.username);
        updateAccount("token", token);
      })
      .catch(function (error) {
        return false;
      });
    return true;
  }

  async getGender(updateGender, updateHandler) {
    const url = process.env.REACT_APP_GENDER_URL;

    await axios
      .get(url, "")
      .then((res) => {
        updateGender(res.data.data);
      })
      .catch(function (error) {
        return false;
      });
    return true;
  }

  async getRelationship(updateRelationship, updateHandler) {
    const url = process.env.REACT_APP_RELATIONSHIP_URL;

    await axios
      .get(url, "")
      .then((res) => {
        updateRelationship(res.data.data);
      })
      .catch(function (error) {
        return false;
      });
    return true;
  }

  render() {
    const { states, formOne, formTwo } = this.props;
    const form_type = states.form_type;

    if (!states || form_type === "" || states.is_loading === true) {
      return (
        <Card>
          <Card.Header>Loading</Card.Header>
          <Card.Body>
            <Loader
              style={{
                width: "100%",
                height: "100",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              type="ThreeDots"
              color="#2BAD60"
              height="100"
              width="100"
            />
          </Card.Body>
        </Card>
      );
    }

    let card;
    if (form_type === "pasangan") {
      card = (
        <Card>
          <Card.Header>Pribadi</Card.Header>
          <Card.Body>
            <FormOneInputs data={states} changeHandler={formOne} />
            <Alerts data={states.form_1} valid={states.form_1.is_valid} />
          </Card.Body>

          <Card.Header>Pasangan</Card.Header>
          <Card.Body>
            <FormTwoInputs data={states} changeHandler={formTwo} />
            <Alerts data={states.form_2} valid={states.form_2.is_valid} />
          </Card.Body>
          <ContinueBtn
            data={this.props}
            targetURL="/confirmation"
            valid={states.form_2.is_valid}
            label="Submit & Continue"
          />
        </Card>
      );
    } else {
      card = (
        <Card>
          <Card.Header>Pribadi</Card.Header>
          <Card.Body>
            <FormOneInputs data={states} changeHandler={formOne} />
            <Alerts data={states.form_1} valid={states.form_1.is_valid} />
          </Card.Body>
          <ContinueBtn
            data={this.props}
            targetURL="/confirmation"
            valid={this.props.states.form_1.is_valid}
            label="Submit & Continue"
          />
        </Card>
      );
    }

    return (
      <div>
        {console.log(this.props.states.simedis_account)}
        <Card>
          <Card.Header>Registrasi</Card.Header>
          <Card.Body>{card}</Card.Body>
        </Card>
      </div>
    );
  }
}

export default RegistrationPage;
