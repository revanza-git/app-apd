import React, { Component } from "react";
import qs from "qs";
import axios from "axios";
import moment from "moment";
import Loader from "react-loader-spinner";
import Alerts from "../../Components/Alerts";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Card, Button, Row, Container, Col, Form } from "react-bootstrap";

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
      })
      .catch(function (error) {
        updateHandler("form_status", "Koneksi bermasalah");
        updateHandler("is_valid", false);
        loadHandler(false);
        console.log(error);
      });
  }

  copyCodeToClipboard = (text) => {
    console.log(text);
    const el = text;
    el.select();
    document.execCommand("copy");
  };

  async getTransactionDetail(data, orderId, updateHandler, loadHandler) {
    const url = process.env.REACT_APP_MIDTRANS_URL + orderId + "/status";
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

    const url = process.env.REACT_APP_PAYMENT_URL;

    const data = {
      paymentDesc: simedis.payment_desc,
      paymentRefCode: simedis.bill_code,
      billCode: simedis.bill_code,
      amount: simedis.paid_amount,
      paidAmount: simedis.paid_amount,
      transactionDate: simedis.transaction_date,
      paymentStatus: true,
      usedReferralCode: "",
    };

    const res = await axios.post(url, data, "").catch(function (error) {
      updateHandler("form_status", "Koneksi bermasalah");
      updateHandler("is_valid", false);
      loadHandler(false);
      console.log(error);
    });

    loadHandler(false);

    return res;
  }

  render() {
    const { states } = this.props;
    const text = "Bagikan ke teman anda https://bit.ly/30t7Pn3";
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
            <Col lg={12} className="text-center">
              <Alerts data={states.simedis} valid={states.simedis.is_valid} />
            </Col>
          </Row>
        </Container>
      );
    } else {
      content = (
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              Pembayaran Telah Selesai, Silahkan Cek Email Yang Anda Daftarkan
              Untuk Aktivasi Account
            </Col>
          </Row>
          <Row className="mt-2">
            <Col lg={12} className="text-center">
              {/* <a
                className="btn btn-primary mb-4"
                download={`certificate_${states.simedis.bill_code}.pdf`}
                href={states.simedis.base64}
              >
                Download Certificate
              </a> */}
              <Form.Control
                type="text"
                disabled={true}
                defaultValue={text}
                className="text-center"
              />

              <CopyToClipboard text={text}>
                <Button className="mt-4">Copy to Clipboard</Button>
              </CopyToClipboard>
            </Col>
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
