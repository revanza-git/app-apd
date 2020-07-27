import React, { Component } from "react";
import ActivationInputs from "../Forms/ActivationInputs";
import ContinueBtn from "../../Components/ContinueBtn";
import Loader from "react-loader-spinner";
import axios from "axios";
import BackgroundImg from "../../assets/images/simedis/Banner-color_gradient-01.png";

import "./index.scss";
import qs from "qs";

import { Card, Container, Row, Col } from "react-bootstrap";

class ActivationPage extends Component {
  componentDidMount() {
    console.log(this.props);
    const loadHandler = this.props.updatePageLoad;
    const changeHandler = this.props.simedisAccountChange;

    //parsing URL
    const query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });

    loadHandler(true);
    const url =
      "https://cors-anywhere.herokuapp.com/https://sit-eli.myequity.id/customers/validateKey";
    const data = {
      uniqueActivationKey: query.token,
    };

    axios
      .post(url, data, "")
      .then((i) => {
        const res = i.data.data.customer;

        changeHandler("customer_code", res.customerCode);
        changeHandler("customer_name", res.customerName);
        changeHandler("customer_status", res.customerStatus);
        changeHandler("username", res.emailAddress);
        changeHandler("registration_code", res.registrationCode);
        changeHandler("active", res.active);

        loadHandler(false);
      })
      .catch(function (error) {
        changeHandler("form_status", "Koneksi bermasalah: ");
        console.log(error);
        changeHandler("is_valid", false);
        loadHandler(false);
      });
  }

  validation = (param) => {
    const data = param;
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
    console.log(this.props);
    const { states, simedisAccountChange } = this.props;

    if (!states || states.is_loading === true) {
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

    return (
      <div className="main-activation">
        <Container className="main-container" fluid>
          <Row>
            <Col>
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
                  targetURL="/login"
                  valid={states.simedis_account.is_valid}
                  label="Aktivasi"
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ActivationPage;
