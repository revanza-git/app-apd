import React, { Component } from "react";
import PolicyView from "../Forms/PolicyDetailView";
import CustomerView from "../Forms/CustomerDetailView";
import Sidebar from "../../Components/Sidebar";
import Navuser from "../../Components/Navbar";
import Footer from "../../Components/Footer/footer.js";
import Loader from "react-loader-spinner";
import { Tab, Row, Col, Container, Navbar } from "react-bootstrap";
import axios from "axios";

import { Link } from "react-router-dom";

import "./index.scss";

import { Card } from "react-bootstrap";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    console.log(this.props);
    const updateAccountData = this.props.simedisAccountChange;
    const updateformOne = this.props.formOne;
    const simedisAcccount = this.props.states.simedis_account;
    const loadHandler = this.props.updatePageLoad;

    // loadHandler(true);

    // this.getCustomerPolicy(
    //   this.props.states.simedis_account,
    //   updateAccountData,
    //   loadHandler
    // );

    // this.getCustomerDetail(
    //   this.props.states.simedis_account,
    //   loadHandler,
    //   updateformOne,
    //   updateAccountData
    // );

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }

  async getCustomerPolicy(accountData, updateAccountData, loadHandler) {
    try {
      const url =
        "https://cors-anywhere.herokuapp.com/https://sit-eli.myequity.id/policy";
      const data = {
        // emailAddress: accountData.username,
        emailAddress: "revanza-26@yopmail.com",
      };
      const config = {
        // Authorization: accountData.token,
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyZXZhbnphLTI2QHlvcG1haWwuY29tIiwiZXhwIjoxNTk2ODU4NjYwfQ.E-piyaDYCUCgevGTZvcF8l4cAR_g9xhKWAfIOPsXAxMfPHMluKX_FSOtFS8seEmdHjMJCErY68i5HufMrsdCyw",
      };

      const res = await axios.post(url, data, config);
      console.log(res);
      if (!res.data.ok) {
        loadHandler(false);
        updateAccountData("is_valid", false);
        updateAccountData("form_status", "Koneksi bermasalah");

        this.props.history.push("/login");
      }
      const customerPolicy = res.data.data.customerPolicy;

      updateAccountData("policy_no", customerPolicy.policyNo);
      updateAccountData("customer_code", customerPolicy.customerCode);
      updateAccountData("sum_insured_ajb", customerPolicy.sumInsuredAjb);

      return true;
    } catch (err) {
      console.log(err);
    }
  }

  async getCustomerDetail(
    accountData,
    loadHandler,
    updateformOne,
    updateAccountData
  ) {
    try {
      console.log(accountData.customer_code);
      const url =
        "https://cors-anywhere.herokuapp.com/https://sit-eli.myequity.id/customers/" +
        // accountData.customer_code;
        "C2007230054";
      const config = {
        headers: {
          // Authorization: accountData.token,
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyZXZhbnphLTI2QHlvcG1haWwuY29tIiwiZXhwIjoxNTk2ODU4NjYwfQ.E-piyaDYCUCgevGTZvcF8l4cAR_g9xhKWAfIOPsXAxMfPHMluKX_FSOtFS8seEmdHjMJCErY68i5HufMrsdCyw",
        },
      };

      const res = await axios.get(url, config);
      if (!res.data.ok) {
        loadHandler(false);
        updateAccountData("is_valid", false);
        updateAccountData("form_status", "Koneksi bermasalah");

        this.props.history.push("/login");
      }
      console.log(res);
      const dataCustomer = await res.data.data;
      updateformOne("first_name", dataCustomer.customerName);
      updateformOne("birth_date", dataCustomer.dateOfBirth);
      updateformOne("gender", dataCustomer.genderCode);
      updateformOne("email", dataCustomer.emailAddress);
      updateformOne("phone_number", dataCustomer.phoneNo);
      loadHandler(false);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  render() {
    const { states } = this.props;

    console.log(this.state);

    if (!states || states.is_loading === true) {
      return (
        <div className="main-dashboard-loading">
          <Container className="dashboard-loading-container-0" fluid>
            <Row>
              <Col>
                <Card className="dashboard-loading-card">
                  <Loader
                    style={{
                      width: "100%",
                      height: "100",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    type="TailSpin"
                    color="#2BAD60"
                    height="100"
                    width="100"
                  />
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }

    return (
      <div className="main-dashboard">
        <Tab.Container defaultActiveKey="profile" className="">
          <Row>
            <Sidebar data={states.form_1} />
            <Col lg={9} sm={12} className="dashboard-content">
              <Navuser data={states.form_1} />
              <Tab.Content className="dashboard-tab-content">
                <Tab.Pane eventKey="profile">
                  <CustomerView data={states.form_1} />
                </Tab.Pane>
                <Tab.Pane eventKey="policy">
                  <PolicyView data={states.simedis_account} />
                </Tab.Pane>
              </Tab.Content>
              <Footer />
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default Dashboard;
