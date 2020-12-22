import React from "react";
import { Col, Row } from "react-bootstrap";
import partner2 from "../../../assets/images/investor/Rectangle 549.png";
import partner1 from "../../../assets/images/investor/about us 2.png";
import logo1 from "../../../assets/images/investor/1.png";
import logo2 from "../../../assets/images/investor/2.png";
import logo3 from "../../../assets/images/investor/3.png";
import logo4 from "../../../assets/images/investor/4.png";

export default function Partner() {
  return (
    <main className="partner">
      <div className="top_partner d-flex flex-column justify-content-center align-items-center text-center ">
        <h1 className="top_partner-title text-uppercase font-weight-bold">
          PARTNERSHIPs
        </h1>
        <p className="top_partner-text px-4 px-lg-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the
        </p>
        <Row className="top_partner-icon d-flex justify-content-between m-0">
          <Col xs={12} md={6} lg={3}>
            <img src={logo1} alt="" className="top_partner-icon--item" />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <img src={logo2} alt="" className="top_partner-icon--item" />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <img src={logo3} alt="" className="top_partner-icon--item" />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <img src={logo4} alt="" className="top_partner-icon--item" />
          </Col>
        </Row>
      </div>
      <div className="bot_partner">
        <Row className="mx-0">
          <Col xs={12} lg={6} className="p-0">
            <img src={partner1} alt="" className="w-100 h-100" />
          </Col>
          <Col xs={12} lg={6} className="bot_partner-content text-white ">
            <h1 className="bot_partner-title text-uppercase font-weight-bold">
              Market Opportunity
            </h1>
            <h3 className="bot_partner-subtitle font-weight-bold">
              Salon POS market - $65 billion industry IBIS World
            </h3>
            <p className="bot_partner-text font-weight-bold">
              Phase 1: Salons.
            </p>
            <p className="bot_partner-text">
              Each nail salon will receive a terminal from us and they will
              recoup money to give back to their cardholder. If they pay $1200
              for POS system hardware we will provide software for free, we give
              their customer $5 to use at their store. Within 3 months, they’ll
              see that amount come back to them. Given each store has about 250
              merchants, they can get $1250 in the first month. Free monthly
              service fee for 2019. 4,000 merchants or 1 million users.
            </p>
            <p className="bot_partner-text font-weight-bold">
              Phase 2: Restaurant and Golf.
            </p>
            <p className="bot_partner-text">
              Each nail salon will receive a terminal from us and they will
              recoup money to give back to their cardholder. If they pay $1200
              for POS system hardware we will provide software for free, we give
              their customer $5 to use at their store. Within 3 months, they’ll
              see that amount come back to them. Given each store has about 250
              merchants, they can get $1250 in the first month. Free monthly
              service fee for 2019. 4,000 merchants or 1 million users.
            </p>
          </Col>
        </Row>
        <Row className="mx-0">
          <Col
            xs={12}
            lg={6}
            className="bot_partner-content2 py-5 order-1 order-lg-0 d-flex flex-column justify-content-center"
          >
            <h1 className="bot_partner-title text-uppercase font-weight-bold">
              Full functionality on the go!
            </h1>
            <p className="bot_partner-text">
              Business owners juggle with many types of management: staff,
              inventory, and customer relations.
            </p>
            <p className="bot_partner-text">
              Harmony Pay is a one-stop app that takes the struggle out of the
              juggle. Four ingenious features makes management more manageable:
              Two-way appointment booking, live check-in wait list, live local
              marketing, peer-to-peer payments.
            </p>
            <p className="bot_partner-text pb-4">
              If you need more detail from our plan, please drop us a message!
            </p>
            {/* <button className="bot_partner-button">Contac us</button> */}
          </Col>
          <Col xs={12} lg={6} className="p-0 order-0 order-lg-1">
            <img src={partner2} alt="" className="w-100 h-100" />
          </Col>
        </Row>
      </div>
    </main>
  );
}
