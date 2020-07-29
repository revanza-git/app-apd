import React, { Component } from "react";
import PolicyView from "../Forms/PolicyDetailView";
import CustomerView from "../Forms/CustomerDetailView";
import Loader from "react-loader-spinner";
import {
  Tab,
  Row,
  Col,
  Nav,
  Container,
  Navbar,
  NavDropdown,
  Image,
} from "react-bootstrap";
import axios from "axios";
import Logo from "../../../src/assets/images/simedis/logo-simedis.svg";
import Menu from "../../../src/assets/images/simedis/Icon-menu.svg";
import UserProfile from "../../../src/assets/images/simedis/icon-user-profil-2.svg";
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

    loadHandler(true);

    this.getCustomerPolicy(
      this.props.states.simedis_account,
      updateAccountData,
      loadHandler
    );

    this.getCustomerDetail(
      this.props.states.simedis_account,
      loadHandler,
      updateformOne,
      updateAccountData
    );

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
    const { states, simedisAccountChange, addChange } = this.props;
    console.log(this.props.states);

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
        <Tab.Container defaultActiveKey="first" className="">
          <Row>
            <Col lg={3} sm={12} className="dashboard-sidebar">
              <Nav variant="items" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <Image src={Logo} />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="first">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">E-Sertifikat</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col lg={9} sm={12} className="dashboard-content">
              <Navbar expand="lg" variant="light" bg="light">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <NavDropdown
                      title={
                        <Image
                          className="dashboard-burger-menu-image"
                          src={Menu}
                        />
                      }
                      className="dashboard-navbar-dropdown"
                    >
                      <NavDropdown.Item className="navbar-item" href="/login">
                        Keluar
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Tab.Content className="dashboard-tab-content">
                <Tab.Pane eventKey="first">
                  <CustomerView data={states.form_1} />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <PolicyView data={states.simedis_account} />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default Dashboard;
