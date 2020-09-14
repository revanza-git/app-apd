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
    const token = query.token;

    loadHandler(true);
    this.processData(token, changeHandler, loadHandler);
  }

  async processData(token, changeHandler, loadHandler) {
    const res2 = await this.getToken(changeHandler);
    const res1 = await this.activateAccount(token, changeHandler);

    if (res1 === true && res2 === true) {
      loadHandler(false);
    } else {
      this.failCase(changeHandler, loadHandler);
    }
  }

  async getToken(updateAccount) {
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

        updateAccount("token", token);
      })
      .catch(function (error) {
        return false;
      });
    return true;
  }

  async activateAccount(token, changeHandler) {
    const url = process.env.REACT_APP_USER_VALIDATE_KEY_URL;
    const data = {
      uniqueActivationKey: token,
    };
    const config = {
      headers: {
        Authorization: this.props.states.simedis_account.token,
      },
    };
    await axios
      .post(url, data, config)
      .then((i) => {
        const res = i.data.data;

        changeHandler("account_code", res.accountCode);
        changeHandler("username", res.emailAddress);
      })
      .catch(function (error) {
        return false;
      });

    return true;
  }

  failCase(updateAccountHandler, loadHandler) {
    updateAccountHandler("is_valid", false);
    updateAccountHandler(
      "form_status",
      "Mohon maaf koneksi mengalami kendala, silahkan coba lagi"
    );
    loadHandler(false);
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
