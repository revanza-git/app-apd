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

    //parsing URL
    const query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });

    loadHandler(true);
    console.log(query.type);
    updateFormType(query.type);

    if (query.type === "individu") {
      updateRegType("R2007001");
    } else if (query.type === "pasangan") {
      updateRegType("R2007002");
    } else {
      updateRegType("R2007003");
    }

    (async () => {
      try {
        await this.getGender(updateGender, updateHandler);
        await this.getRelationship(updateRelationship, updateHandler);
        loadHandler(false);
      } catch (err) {
        updateHandler("form_status", "Koneksi bermasalah");
        updateHandler("is_valid", false);
        console.log(err);
      }
    })();
  }

  async getGender(updateGender, updateHandler) {
    const url =
      "https://cors-anywhere.herokuapp.com/https://sit-eli.myequity.id/gender";

    await axios
      .get(url, "")
      .then((res) => {
        updateGender(res.data.data);
      })
      .catch(function (error) {
        updateHandler("form_status", "Koneksi bermasalah");
        updateHandler("is_valid", false);
        console.log(error);
      });
  }

  async getRelationship(updateRelationship, updateHandler) {
    const url =
      "https://cors-anywhere.herokuapp.com/https://sit-eli.myequity.id/relationships";

    await axios
      .get(url, "")
      .then((res) => {
        updateRelationship(res.data.data);
      })
      .catch(function (error) {
        updateHandler("form_status", "Koneksi bermasalah");
        updateHandler("is_valid", false);
        console.log(error);
      });
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
        <Card>
          <Card.Header>Registrasi</Card.Header>
          <Card.Body>{card}</Card.Body>
        </Card>
      </div>
    );
  }
}

export default RegistrationPage;
