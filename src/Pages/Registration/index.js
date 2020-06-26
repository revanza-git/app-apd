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

  render() {
    const { formView, formEdit, saveChanges, addChange, isValid } = this.props;

    if (!formEdit || !formView) {
      return <span>LOADING</span>;
    }
    return (
      <div>
        {console.log(this.props)}
        <Card>
          <Card.Header>Registrasi</Card.Header>
          <Card.Body>
            <Card>
              <Card.Header>Registrasi</Card.Header>
              <Card.Body>
                <UserInputs data={formEdit} changeHandler={addChange} />
              </Card.Body>
            </Card>
            <ContinueBtn data={formEdit} />
            <Alerts data={formEdit} open={isValid} />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default RegistrationPage;
