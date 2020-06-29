import React, { Component } from "react";
import Loader from "react-loader-spinner";

import { Card } from "react-bootstrap";

class PaymentPage extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect_url: null, token: null, order_id: 0 };
  }

  randomizer(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  process(param) {
    const personal = param.personal;
    const account = param.midtrans_account;

    const url = account.api_url;
    const data = {
      transaction_details: {
        order_id: "ORDER-" + this.randomizer(8),
        gross_amount: 75000,
      },
      item_details: [
        {
          id: "ITEM-001",
          price: 75000,
          quantity: 1,
          name: "APD Policy",
          merchant_name: "Equity Life Indonesia",
        },
      ],
      customer_details: {
        first_name: personal.first_name,
        last_name: personal.last_name,
        email: personal.email,
        phone: personal.phone_number,
      },
      enabled_payments: account.enabled_payments,
    };

    const config = {
      auth: {
        username: account.server_key,
        password: "",
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: account.server_key + ":",
      },
    };

    (async () => {
      try {
        const response = await this.props.submitToMidtrans(url, data, config);
        this.setState({
          redirect_url: response.data.redirect_url,
          token: response.data.token,
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }

  render() {
    if (this.state.redirect_url !== null) {
      window.location.assign(this.state.redirect_url);
    }
    return (
      <div>
        {console.log("render halaman")}
        {this.process(this.props.states)}
        <Card>
          <Card.Header>PAYMENT</Card.Header>
          <Card.Body>
            <Card>
              <Card.Header>Redirecting to Midtrans</Card.Header>
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
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default PaymentPage;
