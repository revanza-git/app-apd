import React, { Component } from "react";
// import UserInputs from "../Forms/UserInputs";
// import SaveBox from "../../Components/SaveBox";
// import Alerts from "../../Components/Alerts";
// import qs from "qs";

import { Card } from "react-bootstrap";

class PaymentPage extends Component {
  componentDidMount() {
    const url =
      "https://cors-anywhere.herokuapp.com/https://app.sandbox.midtrans.com/snap/v1/transactions";
    const data = {
      transaction_details: {
        order_id: "ORDER-002",
        gross_amount: 75000,
      },
      item_details: [
        {
          id: "ITEM1",
          price: 75000,
          quantity: 1,
          name: "APD Policy",
          merchant_name: "Equity Life Indonesia",
        },
      ],
      customer_details: {
        first_name: "Revanza",
        last_name: "Raytama",
        email: "revanza.raytama@gmail.com",
        phone: "081272984509",
      },
      enabled_payments: ["credit_card", "gopay"],
    };

    const config = {
      auth: {
        username: "SB-Mid-server-rU0SDyct3zSoQo2s-0Yta4Qu",
        password: "",
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "SB-Mid-server-rU0SDyct3zSoQo2s-0Yta4Qu:",
      },
    };

    (async () => {
      const response = await this.props.submitToMidtrans(url, data, config);
      console.log(response);
      window.snap.pay(response.data.token);
    })();

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
