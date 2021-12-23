import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import POS1 from "../../../assets/images/home/on_demand_marketing.png";
import POS2 from "../../../assets/images/home/interactive_booking.png";
import Ipad from "../../../assets/images/home/ipad.png";
import Iphone from "../../../assets/images/home/harmony_consumer.png";
import Iphone2 from "../../../assets/images/home/harmony_one.png";
import POS3 from "../../../assets/images/home/merchant_services.png";
import POS4 from "../../../assets/images/home/pos4.png";

import Lap from "../../../assets/images/home/laptop.png";
import iconWorking from "../../../assets/images/iconWorking.png";
import iconUpgrade from "../../../assets/images/iconUpgrade.png";
import iconMarketing from "../../../assets/images/iconMarketing.png";
import iconEquipment from "../../../assets/images/iconEquipment.png";
import iconLocation from "../../../assets/images/iconLocation.png";
import iconDebit from "../../../assets/images/iconDebit.png";

import Carousell from "../../Pricing/Carousel/Carousel";

export default function HomeFeatures2() {
  return (
    <main className="key_features2">
      <div className="top-features2 d-flex flex-column justify-content-center align-items-center text-white">
        <h1 className="top-features2-title text-uppercase font-weight-bold text-center">
          KEY FEATURES
        </h1>
        <p className="top-features2-text font-weight-lighter text-center">
          Including all features of other legacy POS system and much more
        </p>
      </div>
      <div className="bot_features2 mx-auto px-4">
        <div className="bot_features2-item d-flex flex-column justify-content-center align-items-center">
          <h1 className="bot_features2-item--title text-uppercase text-center font-weight-bold">
            HarmonyPay Salon POS
          </h1>
          <p className="bot_features2-item--text text-md-center p-0">
            An inclusive app for the most exclusive salon clients. Book, modify,
            and confirm appointments directly with your beloved salons. Know
            exactly how much you are paying and pay from the comfort of your
            pedicure chairs. Pay-it-back with peer-2-peer features or
            pay-it-forward with universal giftcards at any participating salons.
          </p>
          <Row>
            <Col
              xs={12}
              md={6}
              className="xs-d-flex d-sm-flex d-md-block justify-content-center p-0"
            >
              <LazyLoad height={200}>
                <Card className="xs-d-flex d-sm-flex d-md-block justify-content-center p-0 align-items-center border-0">
                  <Card.Img
                    className="bot_features2-item--img"
                    src={POS1}
                    alt="POS"
                  />
                </Card>
              </LazyLoad>
            </Col>
            <Col xs={12} md={6} className=" p-0">
              <h1 className="text-uppercase font-weight-bold bot_features2-item--title2 text-center text-md-left">
                On Demand Marketing
              </h1>
              <p className="bot_features2-item--text2 ">
                Businesses can fill unexpected gaps in their appointments by
                promoting in real-time on the HarmonyPay apps. Merchants get
                real, measurable results from the available paid marketing
                bundle in the apps while also generating greater brand awareness
                through their presence on HarmonyPay.
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              md={6}
              className="p-0 order-1 order-md-0 d-md-flex flex-md-column justify-content-md-center"
            >
              <h1 className="text-uppercase font-weight-bold bot_features2-item--title2 text-center text-md-left ">
                Interactive Booking
              </h1>
              <p className="bot_features2-item--text2 ">
                HarmonyPay offers a streamlined booking system that links to all
                other elements of the app and payment system, as well as a
                unique live check-in waitlist for consumers with more flexible
                schedules. Businesses are better able to fill their books and
                consumers can snag the perfect appointment.
              </p>
            </Col>
            <Col
              xs={12}
              md={6}
              className="xs-d-flex d-sm-flex justify-content-sm-center justify-content-md-end p-0 order-0 order-md-1"
            >
              <LazyLoad height={200}>
                <Card className="xs-d-flex d-sm-flex justify-content-sm-center justify-content-md-end p-0 order-0 order-md-1 align-items-center border-0">
                  <Card.Img
                    className="bot_features2-item--img"
                    src={POS2}
                    alt="POS"
                  />
                </Card>
              </LazyLoad>
            </Col>
          </Row>
        </div>
        <div className="bot_features2-item d-flex flex-column justify-content-center align-items-center">
          <h1 className="bot_features2-item--title text-uppercase text-center font-weight-bold mb-5">
            {/* <h1 className="bot_features2-item--title text-uppercase text-center font-weight-bold"> */}
            HarmonyPay Check-in
          </h1>
          {/* <p className="bot_features2-item--text text-center">
            An inclusive app for the most exclusive salon clients. Book, modify,
            and confirm appointments directly with your beloved salons. Know
            exactly how much you are paying and pay from the comfort of your
            pedicure chairs. Pay-it-back with peer-2-peer features or
            pay-it-forward with universal gift cards at any participating
            salons.
          </p> */}
          <Row>
            <Col
              xs={12}
              md={6}
              className="p-0 order-1 order-md-0"
            >
              <h1 className="text-uppercase font-weight-bold bot_features2-item--title2 text-center text-md-left">
                LIVE WAITLIST
              </h1>
              <p className="bot_features2-item--text2 ">
                HarmonyPay offers automatic live waitlist check-in for consumers
                to find last minute openings, generating solidly booked days for
                merchants.
              </p>
            </Col>
            <Col
              xs={12}
              md={6}
              className="xs-d-flex d-sm-flex justify-content-sm-center justify-content-md-end p-0 order-0 order-md-1"
            >
              <LazyLoad height={200}>
                <Card className="xs-d-flex d-sm-flex justify-content-sm-center justify-content-md-end p-0 order-0 order-md-1 align-items-center border-0">
                  <Card.Img
                    className="bot_features2-item--img"
                    src={Ipad}
                    alt="SIGN IN"
                  />
                </Card>
              </LazyLoad>
            </Col>
          </Row>
        </div>
        <div className="bot_features2-item d-flex flex-column justify-content-center align-items-center">
          <h1 className="bot_features2-item--title text-uppercase text-center font-weight-bold">
            HarmonyPay consumer
          </h1>
          <p className="bot_features2-item--text text-md-center">
            An inclusive app for the most exclusive salon clients. Book, modify,
            and confirm appointments directly with your beloved salons. Know
            exactly how much you are paying and pay from the comfort of your
            pedicure chairs.
          </p>
          <Row>
            <Col
              xs={12}
              md={6}
              className="xs-d-flex d-sm-flex d-md-block justify-content-center p-0"
            >
              <LazyLoad height={200}>
                <Card className="xs-d-flex d-sm-flex d-md-block justify-content-center p-0 align-items-center border-0">
                  <Card.Img
                    className="bot_features2-item--phone"
                    src={Iphone}
                    alt="Consumer App"
                  />
                </Card>
              </LazyLoad>
            </Col>
            <Col xs={12} md={6} className="p-0">
              <h1 className="text-center text-md-left text-uppercase font-weight-bold bot_features2-item--title2">
                PREMIER LOCAL MARKETING
              </h1>
              <p className="bot_features2-item--text2 ">
                Users can see the best deals in their area in real time, driving
                more bookings. Businesses can promote particular openings they
                have to fill gaps in their books and thus generate more revenue.
              </p>
            </Col>
          </Row>

        </div>
        <div className="bot_features2-item d-flex flex-column justify-content-center align-items-center">
          <h1 className="bot_features2-item--title text-uppercase text-center font-weight-bold">
            HARMONY ONE
          </h1>
          <p className="bot_features2-item--text text-md-center">
            Salon owners make Harmony One for salon owners, stylists, manicurists, and beauticians. It is the most powerful salon POS System in the palm of your hand. It’s so easy; even Grandma can use it, but with all the powerful features of our complete POS System. On-Demand Marketing - help bring in clients when you want. Never have to sit and wait, and wait and wait for your clients ever again. Interactive booking - upgrade your booking system to the most advanced interactive booking system on planet Earth. It is like going from hand radio to a smartphone.
          </p>
          <Row>
            <Col
              xs={12}
              md={6}
              className="p-0 order-1 order-md-0"
            >
              <h1 className="text-uppercase font-weight-bold bot_features2-item--title2 text-center text-md-left">
                Appointment Reminders
              </h1>
              <p className="bot_features2-item--text2 ">
                Save time and cut down on no-shows by up to 40% with automated
                text/email reminders for upcoming appointments. Clients can
                reply ‘C’ to let you know that they will be coming in – which
                will automatically be marked as confirmed on your books!
              </p>
            </Col>
            <Col
              xs={12}
              md={6}
              className="xs-d-flex d-sm-flex justify-content-sm-center justify-content-md-end p-0 order-0 order-md-1"
            >
              <LazyLoad height={200}>
                <Card className="xs-d-flex d-sm-flex justify-content-sm-center justify-content-md-end p-0 order-0 order-md-1 align-items-center border-0">
                  <Card.Img
                    className="bot_features2-item--phone"
                    src={Iphone2}
                    alt="Harmony one"
                  />
                </Card>
              </LazyLoad>
            </Col>
          </Row>
        </div>
        <div className="bot_features2-item d-flex flex-column justify-content-center align-items-center mb-0">
          <h1 className="bot_features2-item--title text-uppercase text-center font-weight-bold">
            other features
          </h1>
          <p className="bot_features2-item--text text-md-center">
            Book, modify,
            and confirm appointments directly with your beloved salons. Know
            exactly how much you are paying and pay from the comfort of your
            pedicure chairs. Pay-it-back with peer-2-peer features or
            pay-it-forward with universal gift cards at any participating
            salons.
          </p>

          <Row>
            <Col
              xs={12}
              md={6}
              className="p-0 order-1 order-md-0 d-md-flex flex-md-column justify-content-md-center"
            >
              <h1 className="text-uppercase font-weight-bold bot_features2-item--title2 text-center text-md-left">
                Merchant services
              </h1>
              <p className="bot_features2-item--text2 ">
                Choose your favorite payments provider Have a favorite card processor already? HarmonyPay is fully compatible with any payment service you may be using. Easily accept card payments in any country, anywhere you do business. Your rates, your features, your way. This is how merchant services and point of sale should be.
              </p>
            </Col>
            <Col
              xs={12}
              md={6}
              className="xs-d-flex d-sm-flex justify-content-sm-center justify-content-md-end p-0 order-0 order-md-1"
            >
              <LazyLoad height={200}>
                <Card className="xs-d-flex d-sm-flex justify-content-sm-center justify-content-md-end p-0 order-0 order-md-1 align-items-center border-0">
                  <Card.Img
                    className="bot_features2-item--img"
                    src={POS3}
                    alt="POS"
                  />
                </Card>{" "}
              </LazyLoad>
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              md={6}
              className=" xs-d-flex d-sm-flex d-md-block justify-content-center p-0"
            >
              <LazyLoad height={200}>
                <Card className="xs-d-flex d-sm-flex d-md-block justify-content-center p-0 align-items-center border-0">
                  <Card.Img
                    className="bot_features2-item--img"
                    src={POS4}
                    alt="POS"
                  />
                </Card>
              </LazyLoad>
            </Col>
            <Col xs={12} md={6} className="p-0">
              <h1 className="text-uppercase font-weight-bold bot_features2-item--title2 text-center text-md-left">
                gift card
              </h1>
              <p className="bot_features2-item--text2 ">
                HARMONY has customizable options and a large selection of
                pre-designed cards to choose from. Work with our talented
                designers to develop gift cards with your own logo, photo, and
                customized text. Looking for something quick and easy? Choose
                from one of our ready-made designs and our team will have them
                shipped to your business in no time!
              </p>
            </Col>
          </Row>
          <Row style={{ display: "none" }}>
            <Col
              xs={12}
              md={6}
              className="text-md-left p-0 order-1 order-md-0 d-md-flex flex-md-column justify-content-md-center"
            >
              <h1 className="text-uppercase font-weight-bold bot_features2-item--title2">
                online booking plugin
              </h1>
              <p className="bot_features2-item--text2 ">
                Integrated credit card processing simplifies checkout – no more
                switching between systems as your client waits. Consolidated
                reporting means no more reconciling bank statements with closed
                tickets to determine if you’ve been paid for all your work.
                “Meet or beat rates” means you save on every swipe!
              </p>
            </Col>
            <Col
              xs={12}
              md={6}
              className="xs-d-flex d-sm-flex justify-content-sm-center justify-content-md-end p-0 order-0 order-md-1"
            >
              <LazyLoad height={200}>
                <Card className="xs-d-flex d-sm-flex justify-content-sm-center justify-content-md-end p-0 order-0 order-md-1 align-items-center border-0">
                  <Card.Img
                    className="bot_features2-item--img"
                    src={Lap}
                    alt="POS"
                  />
                </Card>{" "}
              </LazyLoad>
            </Col>
          </Row>
        </div>

        <div style={{ marginTop: 90 }} className="bot_features2-item d-flex flex-column justify-content-center align-items-center mb-0">
          <h1 style={{ marginBottom: 40 }} className="bot_features2-item--title text-uppercase text-center font-weight-bold">
            BUSINESSS CASH ADVANCED
          </h1>
          <Row>
            <Col
              xs={12}
              md={6}
              className="text-md-left p-0 order-1 order-md-0 d-md-flex flex-md-column justify-content-md-center contentCash"
            >
              <p className="bot_features2-item--text2 ">
                Growing a business is not always an easy task. We have a financing solution available to help you grow, no matter what your business needs may be. Here at Harmony Payment we specialize in merchant cash advance to help your business get the funds you need fast and simple.
              </p>

              <p className="bot_features2-item--text2 ">
                Our financing option such as merchant cash advance was created to help you accomplish great things. Our team knows the ins and outs of owning a busines, as most of us are small business owner ourselves; and we are 100% committed to helping you to expand.
              </p>
            </Col>
            <Col
              xs={12}
              md={6}
              className="xs-d-flex d-sm-flex justify-content-sm-center justify-content-md-end p-0 order-0 order-md-1"
            >
              <div className="row_distance">
                <div>
                  <div>
                    <img src={iconWorking} />
                    <p>WORKING CAPITAL</p>
                  </div>
                  <div>
                    <img src={iconUpgrade} />
                    <p>TECHNOLOGY UPGRADE</p>
                  </div>
                  <div>
                    <img src={iconMarketing} />
                    <p>MARKETING SOLUTIONS</p>
                  </div>
                </div>

                <div>
                  <div>
                    <img src={iconLocation} />
                    <p>LOCATION EXPANSION</p>
                  </div>
                  <div>
                    <img src={iconEquipment} />
                    <p>EQUIPMENT LEASING</p>
                  </div>
                  <div>
                    <img src={iconDebit} />
                    <p>DEBT CONSOLIDATION</p>
                  </div>
                </div>


              </div>
            </Col>
          </Row>
        </div>
        {/* <div className="bot_features2-item d-flex flex-column justify-content-center align-items-center">
          <h1 className="bot_features2-item--title text-uppercase text-center font-weight-bold">
            Digital Web Marketing
          </h1>
        </div> */}
      </div>
      <Carousell />
    </main>
  );
}
