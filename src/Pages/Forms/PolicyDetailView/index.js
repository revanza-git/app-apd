import React from "react";
import { Container, Card, Image } from "react-bootstrap";
import PlanIndividu from "../../../assets/images/simedis/Icon-Plan-Individu.svg";
import PlanPasangan from "../../../assets/images/simedis/Icon-Plan-Pasangan.svg";
import PlanKeluarga from "../../../assets/images/simedis/Icon-Plan-Keluarga.svg";
import IconDownload from "../../../assets/images/simedis/icons8-download-24.png";

import "./index.scss";

const MainInfo = ({ data, reg, certificate }) => {
  const policies = data.policies;
  const personal = data.form_1;
  console.log(data);
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

  if (policies.active === true) {
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
    <React.Fragment>
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
                    {policies.policyNo}
                  </span>
                </Container>
              </li>

              <li>
                <Container className="dashboard-policy-info-item">
                  <span className="dash-policy-tagline-label">
                    Jumlah Peserta
                  </span>
                  <span className="dash-policy-tagline-content">
                    {policies.total_member}
                  </span>
                </Container>
              </li>
              <li>
                <Container className="dashboard-policy-info-item">
                  <span className="dash-policy-tagline-label">
                    Uang Pertanggungan
                  </span>
                  <span className="dash-policy-tagline-content">
                    {policies.sumInsuredAjb}
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
                    {personal.phone_number}
                  </span>
                </Container>
              </li>
              <li>
                <Container className="dashboard-policy-info-item">
                  <span className="dash-policy-tagline-label">
                    Masa Asuransi
                  </span>
                  <span className="dash-policy-tagline-content">
                    {policies.insurancePeriod}
                  </span>
                </Container>
              </li>
              <li>
                <Container className="dashboard-policy-certiticate">
                  <Image src={IconDownload} />
                  <a
                    className="dash-policy-tagline-certificate"
                    download={`certificate.pdf`}
                    href={certificate}
                  >
                    Unduh Sertifikat
                  </a>
                </Container>
              </li>
            </ul>
          </Container>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default MainInfo;
