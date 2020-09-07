import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { Card, Container } from "react-bootstrap";
import "./index.scss";

const Loading = () => {
  return (
    <Card className="loading-card">
      <Loader
        style={{
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        type="Oval"
        color="#0d988c"
        height="100"
        width="100"
      />
      <Container className="loading-tagline" fluid>
        {" "}
        <span>Mohon tunggu sejenak, </span>
        <span>data kamu sedang di proses.</span>
      </Container>
    </Card>
  );
};

export default Loading;
