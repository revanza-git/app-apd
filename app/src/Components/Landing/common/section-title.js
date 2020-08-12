import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class SectionTitle extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center mb-5">
              <h5 className="title-sub text-primary ">{this.props.subtitle}</h5>
              <h4 className="title-big mb-3">{this.props.title}</h4>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default SectionTitle;
