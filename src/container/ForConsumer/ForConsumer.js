import React from "react";
import { Col, Row } from "react-bootstrap";
import consumerApp from "../../assets/images/For Consumer/consumerApp.png";
import App1 from "../../assets/images/For Consumer/Mask Group 187.svg";
import App2 from "../../assets/images/For Consumer/Mask Group 186.svg";

export default function ForConsumer() {
  return (
    <main>
      <Row>
        <Col md={6}></Col>
        <Col
          md={6}
          className="d-sm-flex d-md-block flex-sm-column justify-content-center align-items-center"
        >
          <img src={consumerApp} alt="" className="consumer_app" />
          <h2 className="consumer_title text-uppercase font-weight-bold">
            HarmonyPay
          </h2>
          <p className="consumer_text">
            An inclusive app for the most exclusive salon clients. Book, modify,
            and confirm appointments directly with your beloved salons. Know
            exactly how much you are paying and pay from the comfort of your
            pedicure chairs. Pay-it-back with peer-2-peer features or
            pay-it-forward with universal giftcards at any participating salons.
          </p>
          <h1 className="consumer_download font-weight-bold">
            Download our app
          </h1>
          <div className="consumer_downicon">
            <a href="#" className="mr-4">
              <img src={App1} alt="" />
            </a>
            <a href="#">
              <img src={App2} alt="" />
            </a>
          </div>
        </Col>
      </Row>
    </main>
  );
}
