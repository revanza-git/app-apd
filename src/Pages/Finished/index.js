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
    const updatePaymentHandler = this.props.simedisPaymentChange;
    const updateAccountHandler = this.props.simedisAccountChange;
    //parsing URL
    const query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });
    const loadHandler = this.props.updatePageLoad;

    loadHandler(true);

    this.processData(
      query.order_id, //orderId
      updatePaymentHandler,
      updateAccountHandler,
      loadHandler
    );
  }

  async processData(
    orderId,
    updatePaymentHandler,
    updateAccountHandler,
    loadHandler
  ) {
    const res3 = await this.getToken(updateAccountHandler);
    const res1 = await this.getTransactionDetail(
      orderId,
      updatePaymentHandler,
      updateAccountHandler,
      loadHandler
    );
    const res2 = await this.registerPayment(
      updateAccountHandler,
      updateAccountHandler,
      loadHandler
    );

    const res4 = await this.getCertificate(updateAccountHandler, loadHandler);

    if (res4 === true && res1 === true && res2 === true) {
      loadHandler(false);
    } else {
      this.failCase(updateAccountHandler, loadHandler);
    }
  }

  async getToken(updateAccount) {
    const url = process.env.REACT_APP_LOGIN_URL;
    //Hardcode untuk token
    const data = {
      username: this.props.states.simedis_account.username_token,
      password: this.props.states.simedis_account.password_token,
    };

    await axios
      .post(url, data, "")
      .then((res) => {
        const token = res.data.token;
        const userData = res.data.data.user;

        updateAccount("username", userData.username);
        updateAccount("token", token);
      })
      .catch(function (error) {
        return false;
      });
    return true;
  }

  async getTransactionDetail(
    orderId,
    updatePaymentHandler,
    updateAccountHandler,
    loadHandler
  ) {
    const data = this.props.states.midtrans_account;

    try {
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

      const res = await axios.get(url, config);

      if (res.status != 200) {
        this.failCase(updateAccountHandler, loadHandler);
        return false;
      }
      const dataTransactionDetail = res.data;
      updatePaymentHandler("payment_desc", dataTransactionDetail.payment_type);
      updatePaymentHandler("bill_code", orderId);
      updatePaymentHandler(
        "payment_ref_code",
        dataTransactionDetail.transaction_id
      );
      updatePaymentHandler("paid_amount", dataTransactionDetail.gross_amount);
      updatePaymentHandler(
        "transaction_date",
        moment(dataTransactionDetail.transaction_time).format("YYYY-MM-DD")
      );
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async registerPayment(updateAccountHandler, loadHandler) {
    const accountData = this.props.states.simedis_account;
    const dataPayment = this.props.states.simedis_payment;
    try {
      const url = process.env.REACT_APP_PAYMENT_URL;

      const data = {
        paymentDesc: dataPayment.payment_desc,
        paymentRefCode: dataPayment.bill_code,
        billCode: dataPayment.bill_code,
        amount: dataPayment.paid_amount,
        paidAmount: dataPayment.paid_amount,
        transactionDate: dataPayment.transaction_date,
        paymentStatus: true,
        usedReferralCode: "",
      };

      const config = {
        headers: {
          Authorization: accountData.token,
        },
      };

      const res = await axios.post(url, data, config);

      if (!res.data.ok) {
        this.failCase(updateAccountHandler, loadHandler);
        return false;
      }
      const responseData = res.data;
      const members = responseData.data.members[0];

      updateAccountHandler(
        "registration_code",
        responseData.data.registrationCode
      );
      updateAccountHandler("customer_code", members.data.customer_code);

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async getCertificate(updateAccountHandler, loadHandler) {
    try {
      const accountData = this.props.states.simedis_account;
      const url = process.env.REACT_APP_CUSTOMER_POLICIES_CERTIFICATE_URL;
      const data = {
        customerCode: accountData.customer_code,
        registrationCode: accountData.registration_code,
      };
      const config = {
        headers: {
          Authorization: accountData.token,
        },
      };
      const res = await axios.post(url, data, config);

      if (!res.data.ok) {
        this.failCase(updateAccountHandler, loadHandler);
        return false;
      }
      updateAccountHandler("base64", res.data.data.data.certificate);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  copyCodeToClipboard = (text) => {
    const el = text;
    el.select();
    document.execCommand("copy");
  };

  failCase(updateAccountHandler, loadHandler) {
    updateAccountHandler("is_valid", false);
    updateAccountHandler(
      "form_status",
      "Mohon maaf koneksi mengalami kendala, silahkan coba lagi"
    );
    loadHandler(false);
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

    if (states.simedis_account.is_valid === false) {
      content = (
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <Alerts
                data={states.simedis_account}
                valid={states.simedis_account.is_valid}
              />
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
              <a
                className="btn btn-primary mb-4"
                download={`certificate.pdf`}
                href={states.simedis_account.base64}
              >
                Download Certificate
              </a>
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
