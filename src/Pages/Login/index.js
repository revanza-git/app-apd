import React, { Component } from "react";
import LoginInputs from "../Forms/LoginInputs";
import ContinueBtn from "../../Components/ContinueBtn";
import Loader from "../../Components/Loader";
import Logo from "../../../src/assets/images/simedis/logo-simedis.svg";
import Illustrasi from "../../../src/assets/images/simedis/mainilustrationv2-01.svg";

import "./index.scss";

import { Card, Container, Image } from "react-bootstrap";

class Login extends Component {
  componentDidMount() {}

  validation = () => {
    const simedisAccount = this.props.states.simedis_account;
    const updateFormStatus = this.props.simedisAccountChange;

    if (simedisAccount.username === "" || simedisAccount.password === "") {
      updateFormStatus(
        "form_status",
        "Username atau Password Tidak Boleh Kosong"
      );
      return false;
    } else {
      updateFormStatus("form_status", "ok");
      return true;
    }
  };

  render() {
    const { states, simedisAccountChange } = this.props;

    let content;
    if (!states || states.is_loading === true) {
      content = (
        <div className="main-loading-login">
          <Container className="login-loading-container" fluid>
            <Loader />
          </Container>
        </div>
      );
    } else {
      content = (
        <div className="main-login">
          <Container className="login-container-0" fluid>
            <Card className="login-images">
              <Image className="login-logo" src={Logo} alt="simedis-logo" />
              <Image
                className="login-banner"
                src={Illustrasi}
                alt="simedis-illustrasi"
              />
            </Card>
            <Card className="login-card">
              <span className="login-tagline">
                Selamat datang di layanan{" "}
                <span className="login-bold-simedis">Simedis</span>
              </span>
              <LoginInputs
                data={states}
                changeHandler={simedisAccountChange}
                validation={this.validation}
              />
              <ContinueBtn
                data={this.props}
                targetURL="/dashboard"
                valid={states.simedis_account.is_valid}
                label="Masuk"
              />
            </Card>
          </Container>
        </div>
      );
    }

    return content;
  }
}

export default Login;
