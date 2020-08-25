import React, { Component } from "react";
import Loader from "react-loader-spinner";

import { Card } from "react-bootstrap";

class PaymentPage extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect_url: null, token: null, order_id: 0 };
  }

  componentDidMount() {
    this.process(this.props.states);
  }

  // randomizer(length) {
  //   var result = "";
  //   var characters =
  //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //   var charactersLength = characters.length;
  //   for (var i = 0; i < length; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //   }
  //   return result;
  // }

  process(param) {
    const formOne = param.form_1;
    const account = param.midtrans_account;
    const dataPayment = param.simedis_payment;

    const url = account.api_url;
    const data = {
      transaction_details: {
        order_id: dataPayment.bill_code,
        gross_amount: dataPayment.bill_amount,
      },
      customer_details: {
        first_name: formOne.first_name,
        last_name: formOne.last_name,
        email: formOne.email,
        phone: formOne.phone_number,
      },
      enabled_payments: account.enabled_payments,
      gopay: {
        enable_callback: true,
        callback_url: process.env.REACT_APP_CALLBACK_FINISH_URL,
      },
    };

    console.log(data);

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
        const response = await this.props.postApi(url, data, config);
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
      // window.snap.pay(this.state.token);
    }
    return (
      <div>
        {console.log("render halaman")}
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
