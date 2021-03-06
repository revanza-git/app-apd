import React from "react";
import { Row, Col, Image, Container, Card, Button } from "react-bootstrap";
import "./index.scss";
import { useHistory } from "react-router-dom";

import individu_tagline_icon from "../Plan/Images/individu-tagline-icon.png";

const Plan = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/registration?type=individu");
  };
  return (
    <React.Fragment>
      <div className="plan">
        <Container>
          <Row>
            <Card>
              <Container>
                <Row className="plan-body">
                  <Container className="plan-body">
                    <Image src={individu_tagline_icon} />
                  </Container>
                </Row>

                <Row className="plan-footer">
                  <Button
                    className="buy-plan"
                    variant="primary"
                    onClick={() => handleClick()}
                  >
                    Beli Plan
                  </Button>
                </Row>
              </Container>
            </Card>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Plan;
