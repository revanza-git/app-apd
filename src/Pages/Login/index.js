import React, { Component } from "react";
import LoginInputs from "../Forms/LoginInputs";
import ContinueBtn from "../../Components/ContinueBtn";
import Alerts from "../../Components/Alerts";
import Loader from "react-loader-spinner";
import Logo from "../../../src/assets/images/simedis/logo-simedis.svg";
import Illustrasi from "../../../src/assets/images/simedis/Simedis-Illutrasi-01-Homepage.svg";

import "./index.scss";

import { Card, Container, Row, Col, Image } from "react-bootstrap";

class Login extends Component {
  componentDidMount() {}

  validation = (param) => {
    console.log(this.props.states);
    const data = param;
    console.log(data);
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
    // <ContinueBtn
    //           data={this.props}
    //           targetURL="/dashboard"
    //           valid={states.simedis_account.is_valid}
    //         />

    return (
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
}

export default Login;
