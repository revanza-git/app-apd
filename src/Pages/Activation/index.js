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
    const url = process.env.REACT_APP_SERVER_URL + "/customers/validateKey";
    const data = {
      uniqueActivationKey: query.token,
    };

    axios
      .post(url, data, "")
      .then((i) => {
        console.log(i);
        const res = i.data.data;
        console.log(res.registrationCode);
        const resCustomer = res.customer;

        changeHandler("customer_code", resCustomer.customerCode);
        changeHandler("customer_name", resCustomer.customerName);
        changeHandler("customer_status", resCustomer.customerStatus);
        changeHandler("username", resCustomer.emailAddress);
        changeHandler("registration_code", res.registrationCode);

        loadHandler(false);
      })
      .catch(function (error) {
        changeHandler(
          "form_status",
          "Mohon maaf koneksi mengalami kendala, silahkan coba lagi"
        );
        console.log(error);
        changeHandler("is_valid", false);
        loadHandler(false);
      });
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
