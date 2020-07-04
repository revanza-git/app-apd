import React, { Component } from "react";
import ActivationInputs from "../Forms/ActivationInputs";
import ContinueBtn from "../../Components/ContinueBtn";
import Alerts from "../../Components/Alerts";
import Loader from "react-loader-spinner";
import axios from "axios";

import "./index.css";
import qs from "qs";

import { Card } from "react-bootstrap";

class ActivationPage extends Component {
  componentDidMount() {
    console.log(this.props);
    const loadHandler = this.props.updatePageLoad;
    const changeHandler = this.props.simedisAccountChange;
    //parsing URL
    const query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });

    console.log(query.validate_key);
    // loadHandler(true);
  }

  validation = (param) => {
    console.log(this.props.states);
    const data = param;
    console.log(data);
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
      updateFormStatus("form_status", "Form Tersubmit");
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

    return (
      <div>
        <Card>
          <Card.Header>Account Activation</Card.Header>
          <Card.Body>
            <Card>
              <Card.Header>Account</Card.Header>
              <Card.Body>
                <ActivationInputs
                  data={states}
                  changeHandler={simedisAccountChange}
                  validation={this.validation}
                />
                <Alerts
                  data={states.simedis_account}
                  valid={states.simedis_account.is_valid}
                />
              </Card.Body>
            </Card>
            <ContinueBtn
              data={this.props}
              targetURL="/login"
              valid={states.simedis_account.is_valid}
            />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ActivationPage;