import React, { Component } from "react";
import PolicyView from "../Forms/PolicyDetailView";
import CustomerView from "../Forms/CustomerDetailView";
import Sidebar from "../../Components/Sidebar";
import Navuser from "../../Components/Navbar";
import Footer from "../../Components/Footer/footer.js";
import Loader from "../../Components/Loader";
import { Tab, Row, Col, Container, Image } from "react-bootstrap";
import axios from "axios";
import Menu from "../../../src/assets/images/simedis/Icon-menu.svg";

import "./index.scss";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      toggle: false,
    };

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
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

    const res2 = await this.getCertificate(updateAccountData, loadHandler);

    const res3 = await this.getCustomerDetail(
      loadHandler,
      updateformOne,
      updateAccountData
    );

    const res4 = await this.getAccountPoint(updateAccountData, loadHandler);
    // const res5 = await this.getCountries(updateAccountData, loadHandler);

    if (res1 === true && res2 === true && res3 === true && res4 === true) {
      loadHandler(false);
    } else {
      this.failCase(updateAccountData, loadHandler);
    }

    return true;
  }

  async getCountries(updateAccountData, loadHandler) {
    const accountData = this.props.states.simedis_account;
    try {
      const url = "https://sit-eli.myequity.id/services/v1/countries";
      const config = {
        headers: {
          Authorization: accountData.token,
        },
      };

      const res = await axios.get(url, config);

      if (!res.data.ok) {
        this.failCase(updateAccountData, loadHandler);
      }

      return true;
    } catch (err) {
      console.log(err);
    }
  }

  async getCustomerPolicy(
    updateAccountData,
    loadHandler,
    updatePolicies,
    updateRegistrationType
  ) {
    const accountData = this.props.states.simedis_account;
    try {
      const url = process.env.REACT_APP_ACCOUNT_POLICY_URL;
      const data = {
        emailAddress: accountData.username,
      };
      const config = {
        headers: {
          Authorization: accountData.token,
        },
      };

      const res = await axios.post(url, data, config);

      if (!res.data.ok) {
        this.failCase(updateAccountData, loadHandler);
      }
      const resData = res.data.data[0];
      const customerPolicy = resData.customerPolicy;
      const registrationType = resData.registrationType;
      const totalMember = resData.totalMemberInsured;

      let policies = {
        ...customerPolicy,
        total_member: totalMember,
      };

      updateAccountData("customer_code", customerPolicy.customerCode);
      updateAccountData("registration_code", resData.registrationCode);
      updateAccountData("member_total", totalMember);
      updatePolicies(policies);
      updateRegistrationType(registrationType);

      return true;
    } catch (err) {
      console.log(err);
    }
  }

  async getCertificate(updateAccountData, loadHandler) {
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
        this.failCase(updateAccountData, loadHandler);
      }
      updateAccountData("base64", res.data.data.data.certificate);
      return true;
    } catch (err) {
      console.log(err);
    }
  }

  async getCustomerDetail(loadHandler, updateformOne, updateAccountData) {
    try {
      const accountData = this.props.states.simedis_account;
      const url =
        process.env.REACT_APP_USER_PROFILE_URL + accountData.customer_code;

      const config = {
        headers: {
          Authorization: accountData.token,
        },
      };

      const res = await axios.get(url, config);
      if (!res.data.ok) {
        this.failCase(updateAccountData, loadHandler);
      }

      const dataCustomer = await res.data.data;
      updateformOne("first_name", dataCustomer.customerName);
      updateformOne("birth_date", dataCustomer.dateOfBirth);
      updateformOne("gender", dataCustomer.genderCode);
      updateformOne("email", dataCustomer.emailAddress);
      updateformOne("phone_number", dataCustomer.phoneNo);

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async getAccountPoint(updateAccountData, loadHandler) {
    try {
      const accountData = this.props.states.simedis_account;
      const data = {
        emailAddress: accountData.username,
        // emailAddress: "revanza-27@yopmail.com",
      };
      const url = process.env.REACT_APP_ACCOUNT_POINT_URL;

      const config = {
        headers: {
          Authorization: accountData.token,
        },
      };

      const res = await axios.post(url, data, config);

      updateAccountData("point", res.data.data.point);

      if (!res.data.ok) {
        this.failCase(updateAccountData, loadHandler);
      }
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  failCase(updateAccountData, loadHandler) {
    loadHandler(false);
    updateAccountData("is_valid", false);
    updateAccountData(
      "form_status",
      "Mohon maaf koneksi mengalami kendala, silahkan coba lagi"
    );

    this.props.history.push("/login");
  }

  handleMenuClick() {
    this.setState({ toggle: !this.state.toggle });
  }

  handleLogout() {
    this.props.history.push("/login");
  }

  render() {
    const { states } = this.props;

    if (!states || states.is_loading === true) {
      return (
        <div className="main-dashboard-loading">
          <Container className="dashboard-loading-container-0" fluid>
            <Row>
              <Loader />
            </Row>
          </Container>
        </div>
      );
    }

    let toggled;
    let mobileMenu;
    if (this.state.width <= "992") {
      mobileMenu = (
        <Container className="dash-burger-menu">
          <a onClick={(e) => this.handleMenuClick()}>
            <Image src={Menu} />
          </a>
        </Container>
      );

      if (this.state.toggle) {
        toggled = "toggled";
      } else {
        toggled = "not-toggled";
      }
    } else {
      mobileMenu = null;
    }

    return (
      <div className="main-dashboard">
        <Tab.Container defaultActiveKey="policy">
          <Row>
            <Sidebar
              data={states.form_1}
              width={this.state.width}
              toggled={toggled}
              handleExitSidebar={this.handleMenuClick}
              handleLogout={this.handleLogout}
            />
            <Col className={`dashboard-content ${toggled}`}>
              <Navuser data={states.form_1} />
              {mobileMenu}
              <Tab.Content className="dashboard-tab-content">
                <Tab.Pane className="dashboard-tab-pane" eventKey="profile">
                  <CustomerView data={states} />
                </Tab.Pane>
                <Tab.Pane className="dashboard-tab-pane" eventKey="policy">
                  <PolicyView
                    data={states}
                    reg={states.registration_type}
                    certificate={states.simedis_account.base64}
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
