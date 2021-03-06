import React, { Component } from "react";

import { Card } from "react-bootstrap";
import ContinueBtn from "../../Components/ContinueBtn";
import "./index.scss";

class MainInfo extends Component {
  render() {
    const data = this.props;
    const plan = this.props.states.form_type;

    return (
      <div>
        <Card>
          <Card.Header>FINISH</Card.Header>
          <Card.Body>
            <Card>
              <Card.Header>Anda memilih plan: {plan}</Card.Header>
              <Card.Body>bayar?</Card.Body>
              <ContinueBtn
                data={data}
                targetURL="/payment"
                valid={data.states.form_1.is_valid}
                label="Submit & Continue"
              />
            </Card>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default MainInfo;
