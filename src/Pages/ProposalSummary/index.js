import React, { Component } from "react";
import PolicyHolderSummary from "../Forms/ProposalSummary/PolicyHolderSummary";
import InsuredSummary from "../Forms/ProposalSummary/InsuredSummary";
import PaymentSummary from "../Forms/ProposalSummary/PaymentSummary";
import ProductSummary from "../Forms/ProposalSummary/ProductSummary";
import SaveBox from "../../Components/SaveBox";
import Alerts from "../../Components/Alerts";
import "./index.css";
// import qs from "qs";

import { Card } from "react-bootstrap";

class SummaryPage extends Component {
  componentDidMount() {
    //parsing no_SPAJ
    // const query = qs.parse(this.props.location.search, {
    //   ignoreQueryPrefix: true,
    // });
    // const spajType = this.props.location.pathname.split("/")[1];
    //Creating parameter for redux
    // const params = [{ tipe_dokumen: spajType }, { no_spaj: query["no"] }];
    //calling redux action to change states
    // params.map((value) => {
    //   return this.props.addChange(
    //     Object.keys(value),
    //     Object.values(value).toString().toUpperCase()
    //   );
    // });
  }

  render() {
    const {
      formView,
      formEdit,
      saveChanges,
      addChange,
      hasChanged,
    } = this.props;

    if (!formEdit || !formView) {
      return <span>LOADING</span>;
    }
    return (
      <div>
        {console.log(this.props)}
        <Card>
          <Card.Header>Ringkasan Informasi Proposal</Card.Header>
          <Card.Body>
            <Card>
              <Card.Header>INFORMASI PEMEGANG POLIS</Card.Header>
              <Card.Body>
                <PolicyHolderSummary
                  data={formEdit}
                  changeHandler={addChange}
                />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>INFORMASI TERTANGGUNG</Card.Header>
              <Card.Body>
                <InsuredSummary data={formEdit} changeHandler={addChange} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>PAYMENT METHOD</Card.Header>
              <Card.Body>
                <PaymentSummary data={formEdit} changeHandler={addChange} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>DAFTAR PLAN</Card.Header>
              <Card.Body>
                <ProductSummary data={formEdit} changeHandler={addChange} />
              </Card.Body>
            </Card>
            <SaveBox onSaveAction={saveChanges} />
            <Alerts data={formEdit} open={hasChanged} />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SummaryPage;
