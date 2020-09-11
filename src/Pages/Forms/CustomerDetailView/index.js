import React from "react";
import { Container, Card, Image } from "react-bootstrap";
import UserProfile1 from "../../../assets/images/simedis/icon-user-profil-1.svg";
import "./index.scss";

const MainInfo = ({ data }) => {
  const dataProfile = data.form_1;
  let gender;

  if (dataProfile.gender === "P") {
    gender = "Pria";
  } else {
    gender = "Wanita";
  }

  return (
    <Container className="dashboard-customer-container">
      <span className="dash-customer-top-tagline">Profil Saya</span>
      <Card className="dashboard-customer-card">
        <Image src={UserProfile1} />
        <Container className="dashboard-customer-info">
          <ul>
            <li>
              <Container className="dashboard-customer-info-item">
                <span className="dash-customer-tagline-label">
                  Pemegang Polis
                </span>
                <span className="dash-customer-tagline-content">
                  {dataProfile.first_name}
                </span>
              </Container>
            </li>

            <li>
              <Container className="dashboard-customer-info-item">
                <span className="dash-customer-tagline-label">
                  Tanggal Lahir
                </span>
                <span className="dash-customer-tagline-content">
                  {dataProfile.birth_date}
                </span>
              </Container>
            </li>
            <li>
              <Container className="dashboard-customer-info-item">
                <span className="dash-customer-tagline-label">Gender</span>
                <span className="dash-customer-tagline-content">{gender}</span>
              </Container>
            </li>
            <li>
              <Container className="dashboard-customer-info-item">
                <span className="dash-customer-tagline-label">Email</span>
                <span className="dash-customer-tagline-content">
                  {dataProfile.email}
                </span>
              </Container>
            </li>
            <li>
              <Container className="dashboard-customer-info-item">
                <span className="dash-customer-tagline-label">Nomor HP</span>
                <span className="dash-customer-tagline-content">
                  {dataProfile.phone_number}
                </span>
              </Container>
            </li>
            <li>
              <Container className="dashboard-customer-info-item">
                <span className="dash-customer-tagline-label">Point</span>
                <span className="dash-customer-tagline-content">
                  {data.simedis_account.point}
                </span>
              </Container>
            </li>
          </ul>
        </Container>
      </Card>
    </Container>
  );
};

export default MainInfo;
