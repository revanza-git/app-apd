import React, { Component } from "react";
import qs from "qs";
import axios from "axios";
import moment from "moment";

import { Card } from "react-bootstrap";

class FinishedPayment extends Component {
  componentDidMount() {
    const data = this.props.states.midtrans_account;
    const updateHandler = this.props.simedisChange;
    //parsing URL
    const query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });

    // order_id: "BI2007030036"
    // status_code: "201"
    // transaction_status: "pending"
    // moment(new Date()).format("YYYY-MM-DD")

    (async () => {
      try {
        const response = await this.getTransactionDetail(
          data,
          query.order_id,
          updateHandler
        );
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    })().then(() => {
      console.log(this.props.states);
      const res = this.registerPayment(this.props.states);
      console.log(res);
    });
  }

  getTransactionDetail(data, orderId, updateHandler) {
    const url =
      "https://cors-anywhere.herokuapp.com/https://api.sandbox.midtrans.com/v2/" +
      orderId +
      "/status";
    const config = {
      auth: {
        username: data.server_key,
        password: "",
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: data.server_key + ":",
      },
    };

    return axios.get(url, config).then((res) => {
      const data = res.data;

      updateHandler("payment_desc", data.payment_type);
      updateHandler("bill_code", orderId);
      updateHandler("payment_ref_code", data.transaction_id);
      updateHandler("paid_amount", data.gross_amount);
      updateHandler(
        "transaction_date",
        moment(data.transaction_time).format("YYYY-MM-DD")
      );

      return data;
    });
  }

  registerPayment(states) {
    const simedis = states.simedis;

    const url =
      "https://cors-anywhere.herokuapp.com/https://sit-eli.myequity.id/payments";

    const data = {
      paymentDesc: simedis.payment_desc,
      paymentRefCode: simedis.bill_code,
      billCode: simedis.bill_code,
      amount: simedis.paid_amount,
      paidAmount: simedis.paid_amount,
      transactionDate: simedis.transaction_date,
      paymentStatus: true,
    };

    return axios.post(url, data, "").then((res) => {
      console.log(res);
      return res;
    });
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Header>FINISH</Card.Header>
          <Card.Body>
            <Card>
              <Card.Header>Pembayaran Selesai</Card.Header>
              <Card.Body>
                Pembayaran Telah Selesai, Silahkan Cek Email Yang Anda Daftarkan
                Untuk Aktivasi Account
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default FinishedPayment;
