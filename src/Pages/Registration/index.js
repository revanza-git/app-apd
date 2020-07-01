import React, { Component } from "react";
import UserInputs from "../Forms/UserInputs";
import UserOtherInputs from "../Forms/UserOtherInputs";
import ContinueBtn from "../../Components/ContinueBtn";
import Alerts from "../../Components/Alerts";
import Loader from "react-loader-spinner";

import "./index.css";
import qs from "qs";

import { Card } from "react-bootstrap";

class RegistrationPage extends Component {
  constructor(props) {
    super(props);
    //parsing URL
    const query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });
    this.props.updateFormType(query.type);
  }

  validation = (param) => {
    console.log(param);
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
        updateFormStatus("form_status", "Form Tersubmit");
        return true;
      }
    }
  };

  render() {
    const { states, addChange, addSpouse } = this.props;
    const form_type = states.form_type;

    if (!states || form_type === "") {
      return (
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
      );
    }

    let card;
    if (form_type === "pasangan") {
      card = (
        <Card>
          <Card.Header>Pribadi</Card.Header>
          <Card.Body>
            <UserInputs
              data={states.personal}
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
              data={states.personal}
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
        {console.log(this.props.states.additional)}
        <Card>
          <Card.Header>Registrasi</Card.Header>
          <Card.Body>
            {card}
            <ContinueBtn data={this.props} />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default RegistrationPage;
