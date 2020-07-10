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
    const personal = param.personal;
    const account = param.midtrans_account;
    const simedis = param.simedis;

    const url = account.api_url;
    const data = {
      transaction_details: {
        order_id: simedis.bill_code,
        gross_amount: simedis.bill_amount,
      },
      customer_details: {
        first_name: personal.first_name,
        last_name: personal.last_name,
        email: personal.email,
        phone: personal.phone_number,
      },
      enabled_payments: account.enabled_payments,
      gopay: {
        enable_callback: true,
        callback_url: "https://app-apd.herokuapp.com/payment/finish",
      },
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
