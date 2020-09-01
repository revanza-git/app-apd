import React, { Component } from "react";
import ActivationInputs from "../Forms/ActivationInputs";
import ContinueBtn from "../../Components/ContinueBtn";
import Loader from "../../Components/Loader";
import ActivationSuccess from "../../Components/ActivationSuccess";
import axios from "axios";

import "./index.scss";
import qs from "qs";

import { Card, Container, Row, Col } from "react-bootstrap";

class ActivationPage extends Component {
  componentDidMount() {
    const loadHandler = this.props.updatePageLoad;
    const changeHandler = this.props.simedisAccountChange;

    //parsing URL
    const query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });

    loadHandler(true);

    this.processData(query.token, loadHandler, changeHandler);
  }

  async processData(token, loadHandler, changeHandler) {
    await this.activationProcess(token, changeHandler);
    loadHandler(false);
  }

  async activationProcess(token, changeHandler) {
    try {
      const url = process.env.REACT_APP_USER_VALIDATE_KEY_URL;
      const data = {
        uniqueActivationKey: token,
      };

      await axios
        .post(url, data, "")
        .then((i) => {
          const res = i.data.data;
          const resCustomer = res.customer;

          changeHandler("customer_code", resCustomer.customerCode);
          changeHandler("customer_name", resCustomer.customerName);
          changeHandler("customer_status", resCustomer.customerStatus);
          changeHandler("username", resCustomer.emailAddress);
          changeHandler("registration_code", res.registrationCode);

          return true;
        })
        .catch(function (error) {
          changeHandler(
            "form_status",
            "Mohon maaf koneksi mengalami kendala, silahkan coba lagi"
          );
          console.log(error);
          changeHandler("is_valid", false);
          return false;
        });
    } catch (err) {
      console.log(err);
    }
  }
  validation = (param) => {
    const simedisAccount = this.props.states.simedis_account;
    const updateFormStatus = this.props.simedisAccountChange;

    if (
      simedisAccount.username === "" ||
      simedisAccount.password === "" ||
      simedisAccount.password_retype === ""
    ) {
      updateFormStatus("form_status", "Form harus diisi semua");
      return false;
    } else {
      updateFormStatus("form_status", "ok");
      return true;
    }
  };

  render() {
    const { states, simedisAccountChange } = this.props;
    console.log(this.props);

    let card;

    if (!states || states.is_loading === true) {
      card = <Loader />;
    } else if (states.simedis_account.active === true) {
      card = <ActivationSuccess handler={simedisAccountChange} />;
    } else {
      card = (
        <Card className="activation-card">
          <span className="activation-tagline">
            Buat kata sandi untuk akses layanan{" "}
            <span className="activation-bold-simedis">Simedis</span>
          </span>
          <ActivationInputs
            data={states}
            changeHandler={simedisAccountChange}
            validation={this.validation}
          />
          <ContinueBtn
            data={this.props}
            targetURL="/activation"
            valid={states.simedis_account.is_valid}
            label="Aktivasi"
          />
        </Card>
      );
    }

    return (
      <div className="main-activation">
        <Container className="activation-container-0" fluid>
          <Row>
            <Col>{card}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ActivationPage;
