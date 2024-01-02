import React from "react";
import { Container, Row } from "react-bootstrap";
import imgBanner1 from "../assets/img/bg-desktop.png";
import imgBanner2 from "../assets/img/logo-event-2.png";
import Layout from "./layout";

function Headers() {
  return (
    <Layout>
      <div className="min-vh-100">
        <img
          src={imgBanner1}
          alt=""
          className="w-100 z-n1 position-absolute top-50 start-50 translate-middle"
        />
        <Container>
          <Row className="header-text">
            <img src={imgBanner2} alt="" className="img-banner" />
          </Row>
          <div className="btn-header">
            <button className="btn-banner fw-bold text-white">
              Tentang acara
            </button>
          </div>
        </Container>
      </div>
    </Layout>
  );
}

export default Headers;
