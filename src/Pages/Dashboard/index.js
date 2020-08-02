//https://codepen.io/klocek/pen/pdYgmx?__cf_chl_jschl_tk__=e018a7a328fa6e2c78351c73a13d99099ce14235-1596170501-0-AcuHdF4ENDvOGt2GIqhHQpU_Om0VyNAThFVDpH7r6VK4LPH6UXibwYaf8JPEZJRbD5ixvCKxSatf7OUAyV6KJ64t4PG_Mdu3ErPx9jconvunPuMaGSq0Cq1oe0djD4X39I9hoofRA6JmTABRoB1qM3ZhQIfbTtQCySMwc1l4T2N6ht2XidKLWEQxPB5nAbY4_WjxenVdWFnYlEafNcovnTLTWdjvuRv1dQiD0y4O65ThtLA6vJxAH1k0RT6Iw5M_2T3a_YFLcHK78kRpRTzJPNQouQnZOY-eR7Njlv9GMviFa8EzA5U7-eueOSfW65JSdQ6Cue38DXecOb_TGB3XmKKI8B1n8LKcup6mImmyYFvs

import React, { Component } from "react";
import PolicyView from "../Forms/PolicyDetailView";
import CustomerView from "../Forms/CustomerDetailView";
import Sidebar from "../../Components/Sidebar";
import Navuser from "../../Components/Navbar";
import Footer from "../../Components/Footer/footer.js";
import Loader from "react-loader-spinner";
import { Tab, Row, Col, Container } from "react-bootstrap";
import axios from "axios";

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
    const updatePolicies = this.props.updatePolicies;
    const updateRegistrationType = this.props.updateRegistrationType;
    const updateformOne = this.props.formOne;
    const loadHandler = this.props.updatePageLoad;

    loadHandler(true);

    this.processData(
      updateAccountData,
      loadHandler,
      updatePolicies,
      updateRegistrationType,
      updateformOne
    );

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }

  async processData(
    updateAccountData,
    loadHandler,
    updatePolicies,
    updateRegistrationType,
    updateformOne
  ) {
    const res1 = await this.getCustomerPolicy(
      updateAccountData,
      loadHandler,
      updatePolicies,
      updateRegistrationType
    );

    console.log(res1);

    const res2 = await this.getCustomerDetail(
      loadHandler,
      updateformOne,
      updateAccountData
    );

    console.log(res2);
    return true;
  }

  async getCustomerPolicy(
    updateAccountData,
    loadHandler,
    updatePolicies,
    updateRegistrationType
  ) {
    const accountData = this.props.states.simedis_account;
    try {
      const url =
        "https://cors-anywhere.herokuapp.com/https://sit-eli.myequity.id/policy";
      const data = {
        emailAddress: accountData.username,
        // emailAddress: "revanza-27@yopmail.com",
      };
      const config = {
        Authorization: accountData.token,
        //   Authorization:
        //     "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyZXZhbnphLTI2QHlvcG1haWwuY29tIiwiZXhwIjoxNTk2ODU4NjYwfQ.E-piyaDYCUCgevGTZvcF8l4cAR_g9xhKWAfIOPsXAxMfPHMluKX_FSOtFS8seEmdHjMJCErY68i5HufMrsdCyw",
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
      const registrationType = res.data.data.registrationType;

      updateAccountData("customer_code", customerPolicy.customerCode);
      updatePolicies(customerPolicy);
      updateRegistrationType(registrationType);

      return true;
    } catch (err) {
      console.log(err);
    }
  }

  async getCustomerDetail(loadHandler, updateformOne, updateAccountData) {
    try {
      const accountData = this.props.states.simedis_account;
      const url =
        "https://cors-anywhere.herokuapp.com/https://sit-eli.myequity.id/customers/" +
        accountData.customer_code;
      // "C2007230054";
      const config = {
        headers: {
          Authorization: accountData.token,
          //   Authorization:
          //     "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyZXZhbnphLTI2QHlvcG1haWwuY29tIiwiZXhwIjoxNTk2ODU4NjYwfQ.E-piyaDYCUCgevGTZvcF8l4cAR_g9xhKWAfIOPsXAxMfPHMluKX_FSOtFS8seEmdHjMJCErY68i5HufMrsdCyw",
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

    console.log(states);

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
        <Tab.Container defaultActiveKey="policy" className="">
          <Row>
            <Sidebar data={states.form_1} />
            <Col lg={9} sm={12} className="dashboard-content">
              <Navuser data={states.form_1} />
              <Tab.Content className="dashboard-tab-content">
                <Tab.Pane className="pane" eventKey="profile">
                  <CustomerView data={states.form_1} />
                </Tab.Pane>
                <Tab.Pane eventKey="policy">
                  <PolicyView
                    data={states.policies}
                    reg={states.registration_type}
                  />
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
