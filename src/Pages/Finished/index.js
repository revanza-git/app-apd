import React, { Component } from "react";
import qs from "qs";
import axios from "axios";
import moment from "moment";
import Loader from "react-loader-spinner";
import Alerts from "../../Components/Alerts";

import { Card, Button, Row, Container, Col } from "react-bootstrap";

class FinishedPayment extends Component {
  componentDidMount() {
    const data = this.props.states.midtrans_account;
    const updateHandler = this.props.simedisChange;
    //parsing URL
    const query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });
    const loadHandler = this.props.updatePageLoad;

    (async () => {
      try {
        loadHandler(true);
        const response = await this.getTransactionDetail(
          data,
          query.order_id,
          updateHandler,
          loadHandler
        );
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    })()
      .then(() => {
        const res = this.registerPayment(
          this.props.states,
          updateHandler,
          loadHandler
        );
        console.log(res);
        console.log(this.props.states);
        loadHandler(false);
      })
      .catch(function (error) {
        updateHandler("form_status", "Koneksi bermasalah");
        updateHandler("is_valid", false);
        loadHandler(false);
        console.log(error);
      });
  }

  onClick = () => {
    //Create a Blob from the PDF Stream
    const file = new Blob([this.props.states.simedis.base64], {
      type: "application/pdf",
    });

    //Build a URL from the file
    const fileURL = URL.createObjectURL(file);
    // Open the URL on new Window
    window.open(fileURL);

    // window
    //   .open("")
    //   .document.write(
    //     "<iframe width='100%' height='100%' src='" +
    //       this.props.states.simedis.base64 +
    //       "'></iframe>"
    //   );
    // window.open(this.props.states.simedis.base64);
  };

  async getTransactionDetail(data, orderId, updateHandler, loadHandler) {
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

    const res = await axios.get(url, config).catch(function (error) {
      updateHandler("form_status", "Koneksi bermasalah");
      updateHandler("is_valid", false);
      loadHandler(false);
    });
    const data_1 = res.data;
    updateHandler("payment_desc", data_1.payment_type);
    updateHandler("bill_code", orderId);
    updateHandler("payment_ref_code", data_1.transaction_id);
    updateHandler("paid_amount", data_1.gross_amount);
    updateHandler(
      "transaction_date",
      moment(data_1.transaction_time).format("YYYY-MM-DD")
    );
    return data_1;
  }

  async registerPayment(states, updateHandler, loadHandler) {
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

    const res = await axios
      .post(url, data, "")
      .then((es) => {
        console.log(es);
        updateHandler("base64", es.data.data.certificate.data.certificate);
      })
      .catch(function (error) {
        updateHandler("form_status", "Koneksi bermasalah");
        updateHandler("is_valid", false);
        loadHandler(false);
        console.log(error);
      });

    console.log(res);
    return res;
  }

  render() {
    const { states } = this.props;
    if (!states || states.is_loading === true) {
      return (
        <Card>
          <Card.Header>Loading</Card.Header>
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
      );
    }

    let content;

    if (states.simedis.is_valid === false) {
      content = (
        <Container>
          <Row>
            <Col lg={4}></Col>
            <Col lg={4}>
              <Alerts data={states.simedis} valid={states.simedis.is_valid} />
            </Col>
            <Col lg={4}></Col>
          </Row>
        </Container>
      );
    } else {
      content = (
        <Container>
          <Row>
            Pembayaran Telah Selesai, Silahkan Cek Email Yang Anda Daftarkan
            Untuk Aktivasi Account
          </Row>
          <Row className="mt-5" style={{ border: "dotted" }}>
            <Col lg={4}></Col>
            <Col lg={4}>
              <Button
                onClick={() => {
                  this.onClick();
                }}
              >
                Download Certificate
              </Button>
            </Col>
            <Col lg={4}></Col>
          </Row>
        </Container>
      );
    }
    return (
      <div>
        <Card>
          <Card.Header>FINISH</Card.Header>
          <Card.Body>
            <Card>
              <Card.Header>Pembayaran Selesai</Card.Header>
              <Card.Body>{content}</Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default FinishedPayment;
