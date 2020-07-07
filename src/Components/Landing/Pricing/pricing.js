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
          price: "70.000",
          pre: "",
          discount: "",
          tagline: "Buat kamu yang masih sendiri aja",
          img: "Icon-Plan-Individu.svg",
        },
        {
          title: "Pasangan",
          price: "140.000",
          pre: "Diskon Premi ",
          discount: "10%",
          tagline: "Buat kamu yang ingin ajak pasangan atau teman dekatmu",
          img: "Icon-Plan-Pasangan.svg",
        },
        {
          title: "Keluarga",
          price: "250.000",
          pre: "Diskon Premi ",
          discount: "20%",
          tagline:
            "Buat kamu yang ingin melindungi keluarga atau kerabat dekatmu",
          img: "Icon-Plan-Keluarga.svg",
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
                <Row>
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
