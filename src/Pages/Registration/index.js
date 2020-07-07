import React, { Component } from "react";
import UserInputs from "../Forms/UserInputs";
import UserOtherInputs from "../Forms/UserOtherInputs";
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
    //parsing URL
    const query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });

    // loadHandler(true);

    updateFormType(query.type);

    if (query.type === "individu") {
      updateRegType("R001");
    } else if (query.type === "pasangan") {
      updateRegType("R002");
    } else {
      updateRegType("R003");
    }

    // const url =
    //   "https://cors-anywhere.herokuapp.com/https://sit-eli.myequity.id/gender";

    // axios
    //   .get(url, "")
    //   .then((res) => {
    //     updateGender(res.data.data);
    //   })
    //   .then(() => {
    //     loadHandler(false);
    //   });
  }

  validation = (param) => {
    console.log(this.props.states);
    const data = param;
    const updateFormStatus = this.props.addChange;
    const email = data.email;

    const dataArray = Object.values(data);
    const regex = dataArray
      .map((e) => e.toString().replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&"))
      .join("|");
    const re = new RegExp(regex);
    if (re.exec("")) {
      updateFormStatus("form_status", "Form harus diisi semua");
      return false;
    } else if (email !== "") {
      let lastAtPos = email.lastIndexOf("@");
      let lastDotPos = email.lastIndexOf(".");
      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        updateFormStatus("form_status", "Format email tidak benar");
        return false;
      } else {
        console.log("form tersubmit");
        updateFormStatus("form_status", "ok");
        return true;
      }
    }
  };

  render() {
    console.log(this.props);
    const { states, addChange, addSpouse } = this.props;
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
            <UserInputs
              data={states}
              changeHandler={addChange}
              validation={this.validation}
            />
            <Alerts data={states.personal} valid={states.personal.is_valid} />
          </Card.Body>

          <Card.Header>Pasangan</Card.Header>
          <Card.Body>
            <UserOtherInputs
              data={states.spouse}
              changeHandler={addSpouse}
              validation={this.validation}
            />
            <Alerts data={states.spouse} valid={states.spouse.is_valid} />
          </Card.Body>
        </Card>
      );
    } else {
      card = (
        <Card>
          <Card.Header>Pribadi</Card.Header>
          <Card.Body>
            <UserInputs
              data={states}
              changeHandler={addChange}
              validation={this.validation}
            />
            <Alerts data={states.personal} valid={states.personal.is_valid} />
          </Card.Body>
        </Card>
      );
    }

    return (
      <div>
        <Card>
          <Card.Header>Registrasi</Card.Header>
          <Card.Body>
            {card}
            <ContinueBtn
              data={this.props}
              targetURL="/confirmation"
              valid={this.props.states.personal.is_valid}
            />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default RegistrationPage;
