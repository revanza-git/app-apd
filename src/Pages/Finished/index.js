import React, { Component } from "react";

import { Card } from "react-bootstrap";

class FinishedPayment extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Header>FINISH</Card.Header>
          <Card.Body>
            <Card>
              <Card.Header>Pembayaran Selesai</Card.Header>
              <Card.Body>Pembayaran Telah Selesai.</Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default FinishedPayment;
