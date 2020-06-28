import React, { Component } from "react";
import UserInputs from "../Forms/UserInputs";
import ContinueBtn from "../../Components/ContinueBtn";
import Alerts from "../../Components/Alerts";

import "./index.css";
// import qs from "qs";

import { Card } from "react-bootstrap";

class RegistrationPage extends Component {
  componentDidMount() {
    //parsing no_SPAJ
    // const query = qs.parse(this.props.location.search, {
    //   ignoreQueryPrefix: true,
    // });
    // const spajType = this.props.location.pathname.split("/")[1];
    //Creating parameter for redux
    // const params = [{ tipe_dokumen: spajType }, { no_spaj: query["no"] }];
    //calling redux action to change states
    // params.map((value) => {
    //   return this.props.addChange(
    //     Object.keys(value),
    //     Object.values(value).toString().toUpperCase()
    //   );
    // });
  }

  validation(param) {
    const data = param.states.data;
    const updateFormStatus = param.addChange;
    const email = data.personal_email;

    const dataArray = Object.values(data);
    const regex = dataArray
      .map((e) => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&"))
      .join("|");
    const re = new RegExp(regex);

    if (re.exec("")) {
      updateFormStatus("personal_form_status", "Form harus diisi semua");
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
        updateFormStatus("personal_form_status", "Format email tidak benar");
        return false;
      } else {
        updateFormStatus("personal_form_status", "Form Tersubmit");
        return true;
      }
    }
  }

  render() {
    const { states, addChange, updateFormValidation, isValid } = this.props;

    if (!states) {
      return <span>LOADING</span>;
    }
    return (
      <div>
        <Card>
          <Card.Header>Registrasi</Card.Header>
          <Card.Body>
            <Card>
              <Card.Header>Registrasi</Card.Header>
              <Card.Body>
                <UserInputs
                  data={this.props}
                  changeHandler={addChange}
                  validation={this.validation}
                />
                <Alerts data={states.data} valid={isValid} />
              </Card.Body>
            </Card>
            <ContinueBtn data={this.props} onClick={updateFormValidation} />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default RegistrationPage;
