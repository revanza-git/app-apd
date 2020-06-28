import React, { Component } from "react";

import { Card } from "react-bootstrap";

class PaymentPage extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect_url: null, token: null };
  }

  redirect(param) {
    const personal = param.data;
    const account = param.midtrans_account;

    const url = account.api_url;
    const data = {
      transaction_details: {
        order_id: "ORDER-020",
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
        first_name: personal.personal_first_name,
        last_name: personal.personal_last_name,
        email: personal.personal_email,
        phone: personal.personal_phone_number,
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
    })().then(() => {
      window.location.assign(this.state.redirect_url);
    });
  }

  render() {
    this.redirect(this.props.states);
    if (this.state.redirect_url !== null) {
      // window.location.assign(this.state.redirect_url);
      // window.snap.pay(this.state.token);
    }
    return (
      <div>
        <Card>
          <Card.Header>PAYMENT</Card.Header>
          <Card.Body>
            <Card>
              <Card.Header>Pembayaran</Card.Header>
              <Card.Body>
                Seharusnya Halaman ini Melakukan Redirect ke Midtrans
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default PaymentPage;
