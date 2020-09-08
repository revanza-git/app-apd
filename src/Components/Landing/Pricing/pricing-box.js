import React from "react";

import { Col, CardBody, Row, Button } from "reactstrap";
import { useHistory, Link } from "react-router-dom";

const PricingBox = ({ pricings }) => {
  const history = useHistory();
  const handleClick = (redirect) => {
    history.push(process.env.PUBLIC_URL + "/registration?type=" + redirect);
    window.location.reload();
  };

  return (
    <React.Fragment>
      {pricings.map((pricing, key) => (
        <Col className="col-card" lg={4} key={key} id={key}>
          <div className=" text-center">
            <CardBody className="plan-card p-4">
              <Row>
                <img
                  src={require(`../../../assets/images/simedis/${pricing.img}`)}
                ></img>
                <h5 className="mt-3">{pricing.title}</h5>
              </Row>

              <h1 className={`tagline-${key} mt-4`}>
                <span className="plan-tagline">{pricing.tagline}</span>
              </h1>

              <hr></hr>
              <div className="plan-pricing">
                <p>
                  <span>{pricing.price}</span>/bulan
                </p>
              </div>
              <hr></hr>

              <div className="plan-discount">
                <p>
                  {pricing.pre}&nbsp; <span>{pricing.discount}</span>
                </p>
              </div>

              <div>
                <Link
                  className="btn btn-primary"
                  onClick={() => handleClick(pricing.redirect)}
                >
                  Beli Plan
                </Link>
              </div>
            </CardBody>
          </div>
        </Col>
      ))}
    </React.Fragment>
  );
};

export default PricingBox;
