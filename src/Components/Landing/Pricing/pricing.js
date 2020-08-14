import React, { Component } from "react";
import { Container, Row, TabContent, TabPane } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Pricing
import PricingBox from "./pricing-box";

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricings1: [
        {
          title: "Individu",
          price: "75.000",
          pre: "",
          pre2: "",
          discount: "",
          tagline: "Buat kamu sendiri",
          img: "Icon-Plan-Individu.svg",
          redirect: "individu",
        },
        {
          title: "Pasangan",
          price: "140.000",
          pre: "Hemat ",
          pre2: "",
          discount: "10.000",
          tagline: "Buat kamu berdua",
          img: "Icon-Plan-Pasangan.svg",
          redirect: "pasangan",
        },
        {
          title: "Keluarga",
          price: "275.000",
          pre: "Hemat ",
          pre2: "",
          discount: "100.000",
          tagline: "Buat kamu sekeluarga (maks 5 Orang)",
          img: "Icon-Plan-Keluarga.svg",
          redirect: "keluarga",
        },
      ],
      activeTab: "1",
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section-plan bg-light" id="pricing">
          <Container>
            <SectionTitle
              subtitle="Pilihan Plan"
              title="Sesuaikan Dengan Kebutuhanmu"
            />

            <TabContent id={"tab-section"} activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row className="plan-controller">
                  <PricingBox pricings={this.state.pricings1} />
                </Row>
              </TabPane>
            </TabContent>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Pricing;
