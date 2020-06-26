import React, { Component } from "react";
// import UserInputs from "../Forms/UserInputs";
// import SaveBox from "../../Components/SaveBox";
// import Alerts from "../../Components/Alerts";
// import qs from "qs";

import { Card } from "react-bootstrap";

class PaymentPage extends Component {
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
    // const {
    //   formView,
    //   formEdit,
    //   saveChanges,
    //   addChange,
    //   hasChanged,
    // } = this.props;

    // if (!formEdit || !formView) {
    //   return <span>LOADING</span>;
    // }
    return (
      <div>
        <Card>
          <Card.Header>Payment</Card.Header>
          <Card.Body>
            <Card>
              <Card.Header>PAYMENT</Card.Header>
              <Card.Body>Tes12343568</Card.Body>
            </Card>
            {/* <SaveBox onSaveAction={saveChanges} />
            <Alerts data={formEdit} open={hasChanged} /> */}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default PaymentPage;
