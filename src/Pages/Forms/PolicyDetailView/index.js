import React from "react";
import { Container, Card, Image } from "react-bootstrap";
import PlanIndividu from "../../../assets/images/simedis/Icon-Plan-Individu.svg";
import PlanPasangan from "../../../assets/images/simedis/Icon-Plan-Pasangan.svg";
import PlanKeluarga from "../../../assets/images/simedis/Icon-Plan-Keluarga.svg";
import IconDownload from "../../../assets/images/simedis/icons8-download-24.png";

import "./index.scss";

const MainInfo = ({ data, reg }) => {
  console.log(data);
  console.log(reg);
  let plan;
  let active;

  if (reg.registrationTypeCode === "R2007001") {
    plan = (
      <li className="dashboard-policy-info-plan-item">
        <Image src={PlanIndividu} />
        <Container className="dashboard-policy-info-plan-tagline">
          <span className="dash-policy-tagline-label">Plan Simedis</span>
          <span className="dash-policy-tagline-content-plan">Individu</span>
        </Container>
      </li>
    );
  } else if (reg.registrationTypeCode === "R2007002") {
    plan = (
      <li className="dashboard-policy-info-plan-item">
        <Image src={PlanPasangan} />
        <Container className="dashboard-policy-info-plan-tagline">
          <span className="dash-policy-tagline-label">Plan Simedis</span>
          <span className="dash-policy-tagline-content-plan">Pasangan</span>
        </Container>
      </li>
    );
  } else if (reg.registrationTypeCode === "R2007003") {
    plan = (
      <li className="dashboard-policy-info-plan-item">
        <Image src={PlanKeluarga} />
        <Container className="dashboard-policy-info-plan-tagline">
          <span className="dash-policy-tagline-label">Plan Simedis</span>
          <span className="dash-policy-tagline-content-plan">Keluarga</span>
        </Container>
      </li>
    );
  }

  if (data.active === true) {
    active = (
      <Container className="dashboard-policy-info-status active">
        <span className="dash-policy-tagline-status-dot">{"\u2B24"}</span>
        <span className="dash-policy-tagline-status-desc">Aktif</span>
      </Container>
    );
  } else {
    active = (
      <Container className="dashboard-policy-info-status notactive">
        <span className="dash-policy-tagline-status-dot">{"\u2B24"}</span>
        <span className="dash-policy-tagline-status-desc">Tidak Aktif</span>
      </Container>
    );
  }
  return (
    <Container className="dashboard-policy-container">
      <span className="dash-policy-top-tagline">E-Sertifikat</span>
      <Card className="dashboard-policy-card">
        <Container className="dashboard-policy-info">
          <ul>
            {plan}
            <li>
              <Container className="dashboard-policy-info-item">
                <span className="dash-policy-tagline-label">Nomor Polis</span>
                <span className="dash-policy-tagline-content">
                  {data.policyNo}
                </span>
              </Container>
            </li>

            <li>
              <Container className="dashboard-policy-info-item">
                <span className="dash-policy-tagline-label">
                  Jumlah Peserta
                </span>
                <span className="dash-policy-tagline-content">1</span>
              </Container>
            </li>
            <li>
              <Container className="dashboard-policy-info-item">
                <span className="dash-policy-tagline-label">
                  Uang Pertanggungan
                </span>
                <span className="dash-policy-tagline-content">
                  {data.sumInsuredAjb}
                </span>
              </Container>
            </li>
            <li>{active}</li>
            <li>
              <Container className="dashboard-policy-info-item">
                <span className="dash-policy-tagline-label">
                  Nomor Tertanggung
                </span>
                <span className="dash-policy-tagline-content">
                  081272984508
                </span>
              </Container>
            </li>
            <li>
              <Container className="dashboard-policy-info-item">
                <span className="dash-policy-tagline-label">Masa Asuransi</span>
                <span className="dash-policy-tagline-content">
                  {data.insurancePeriod}
                </span>
              </Container>
            </li>
            <li>
              <Container className="dashboard-policy-certiticate">
                <Image src={IconDownload} />
                <a className="dash-policy-tagline-certificate">
                  Unduh Sertifikat
                </a>
              </Container>
            </li>
          </ul>
        </Container>
      </Card>
    </Container>
  );
};

export default MainInfo;
