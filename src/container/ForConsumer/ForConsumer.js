import React, { lazy } from "react";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

import consumerApp from "../../assets/images/ForConsumer/consumerApp.svg";
import consumerAppImg from "../../assets/images/ForConsumer/imgpsh_fullsize_anim1.png";
import App1 from "../../assets/images/ForConsumer/MaskGroup187.svg";
import App2 from "../../assets/images/ForConsumer/MaskGroup186.svg";

const TopFooter = lazy(() => import("../../components/Footer/TopFooter"));

export default function ForConsumer() {
  return (
    <>
      <Helmet>
        <title>Harmony | For Consumer</title>
        <meta name="For Consume" content="Harmony For Consume" />
      </Helmet>
      <main className="consumer">
        <Row className="mx-0">
          <Col xs={12} md={6} className="consumer__right">
            <img src={consumerAppImg} alt="" className="consumer__right-img" />
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex d-md-block flex-column align-items-center"
          >
            <img src={consumerApp} alt="" className="consumer_app" />
            <h2 className="consumer_title text-uppercase font-weight-bold">
              HarmonyPay
            </h2>
            <p className="consumer_text text-center text-md-left">
              An inclusive app for the most exclusive salon clients. Book,
              modify, and confirm appointments directly with your beloved
              salons. Know exactly how much you are paying and pay from the
              comfort of your pedicure chairs. Pay-it-back with peer-2-peer
              features or pay-it-forward with universal giftcards at any
              participating salons.
            </p>
            <h1 className="consumer_download font-weight-bold">
              Download our app
            </h1>
            <div className="consumer_downicon">
              <a
                target="blank"
                href="https://apps.apple.com/us/app/harmonypay/id1478098739"
                className=" consumer_downicon-a"
              >
                <img src={App1} alt="" className="download--img" />
              </a>
              <a
                target="blank"
                href="https://play.google.com/store/apps/details?id=com.hpconsumer&hl=en"
              >
                <img src={App2} alt="" className="download--img" />
              </a>
            </div>
          </Col>
        </Row>
      </main>
      <TopFooter />
    </>
  );
}
