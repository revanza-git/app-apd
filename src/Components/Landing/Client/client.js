import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//Import Section Title
import SectionTitle from "../common/section-title";
import ClientBox from "./client-box";

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responsive: {
        576: {
          items: 1,
        },
      },
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="clients">
          <Container className="about-content-container">
            <SectionTitle
              subtitle="Tentang Simedis"
              title="Yuk Kenal Lebih dekat"
            />
            <Container>
              <Row className="">
                <Col lg={6} className="about-content-left">
                  <OwlCarousel
                    className="owl-theme testi-carousel"
                    id="testi-carousel"
                    items={1}
                    loop={true}
                    margin={10}
                    nav={true}
                    responsive={this.state.responsive}
                  >
                    <ClientBox clients={this.state.clients} />
                  </OwlCarousel>
                </Col>
                <Col lg={6} className="about-content-right">
                  <p>
                    COVID-19 dapat mengintai siapapun, termasuk kamu dan orang
                    tedekatmu. Selalu tingkatkan kewaspadaan dan berikan
                    perlindungan untuk orang yang kamu sayangi.
                  </p>
                  <p>
                    <span>Simedis</span>, layaknya tenaga medis yang selalu
                    siaga menghadapi COVID-19. Simedis merupakan program
                    Asuransi Jiwa Berjangka dari Equity life Indonesia yang
                    memberikan perlindungan terhadap risiko meninggal dunia dan
                    terinfeksi virus COVID-19 dalam bentuk santunan tunai.
                  </p>
                  <p>
                    <span>Simedis</span> hadir dengan premi yang sangat
                    terjangkau dan beragam pilihan plan yang dapat disesuaikan
                    dengan kebutuhanmu. Ayo, sambut new normal dengan lindungi
                    diri dan orang yang kamu sayangi sekarang juga!
                  </p>
                  <span>#simedis #staysafestayhealthy</span>
                </Col>
              </Row>
            </Container>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Clients;
