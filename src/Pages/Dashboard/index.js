import React, { Component } from "react";
import PolicyView from "../Forms/PolicyDetailView";
import CustomerView from "../Forms/CustomerDetailView";
import Loader from "react-loader-spinner";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

import "./index.css";
import qs from "qs";

import { Card } from "react-bootstrap";

class Dashboard extends Component {
  componentDidMount() {
    console.log(this.props);
    const updateAccountData = this.props.simedisAccountChange;
    const updatePersonal = this.props.addChange;
    const loadHandler = this.props.updatePageLoad;

    loadHandler(true);

    (async () => {
      try {
        await this.getCustomerPolicy(
          this.props.states.simedis_account,
          updateAccountData
        );
      } catch (err) {
        console.log(err);
      }
    })().then(() => {
      this.getCustomerDetail(
        this.props.states.simedis_account,
        loadHandler,
        updatePersonal
      );
    });
  }

  async getCustomerPolicy(accountData, updateAccountData) {
    const url =
      "https://cors-anywhere.herokuapp.com/https://sit-eli.myequity.id/policy";
    const data = {
      emailAddress: accountData.username,
    };
    const config = {
      Authorization: accountData.token,
    };

    const res = await axios.post(url, data, config);
    const customerPolicy = res.data.data.customerPolicy;

    updateAccountData("policy_no", customerPolicy.policyNo);
    updateAccountData("customer_code", customerPolicy.customerCode);
    updateAccountData("sum_insured_ajb", customerPolicy.sumInsuredAjb);
  }

  async getCustomerDetail(accountData, loadHandler, updatePersonal) {
    const url =
      "https://cors-anywhere.herokuapp.com/https://sit-eli.myequity.id/customers/" +
      accountData.customer_code;
    const config = {
      headers: {
        Authorization: accountData.token,
      },
    };

    const res = await axios.get(url, config);
    console.log(res);
    const dataCustomer = res.data.data;
    updatePersonal("first_name", dataCustomer.customerName);
    updatePersonal("birth_date", dataCustomer.dateOfBirth);
    updatePersonal("gender", dataCustomer.genderCode);
    updatePersonal("email", dataCustomer.emailAddress);
    updatePersonal("phone_number", dataCustomer.phoneNo);
    loadHandler(false);
    return true;
  }

  render() {
    const { states, simedisAccountChange, addChange } = this.props;
    console.log(this.props.states);

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

    return (
      <div>
        <Card>
          <Card.Header>Dasboard</Card.Header>
          <Card.Body>
            <Card>
              <Card.Header>Information</Card.Header>
              <Card.Body>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col sm={3}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Policy Detail</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Customer Detail</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Logout</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <PolicyView
                            data={states.simedis_account}
                            changeHandler={simedisAccountChange}
                          />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <CustomerView
                            data={states.personal}
                            changeHandler={addChange}
                          />
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Link to="/login">Logout</Link>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Dashboard;
