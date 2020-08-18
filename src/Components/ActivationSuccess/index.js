import React, { useEffect } from "react";
import { Card, Container, Image } from "react-bootstrap";
import ShieldIcon from "../../../src/assets/images/simedis/shieldicon.svg";
import "./index.scss";

import { useHistory } from "react-router-dom";

const ActivationSuccess = ({ handler }) => {
  // const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      handler("is_valid", null);
      window.location.assign("https://app-apd.herokuapp.com/login");
    }, 5000);
  });

  return (
    <Card className="activation-success-card">
      <Image src={ShieldIcon} />
      <Container className="activation-success-tagline" fluid>
        <span className="as-bold">Selamat</span>
        <span>Layanan Simedis kamu telah aktif,</span>
        <span>silahkan masuk ke halaman profil kamu.</span>
      </Container>
    </Card>
  );
};

export default ActivationSuccess;
