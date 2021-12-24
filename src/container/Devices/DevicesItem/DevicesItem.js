import React, { useState } from "react";
import { Card, CardDeck, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PayPoint from "../../../assets/images/home/on_demand_marketing.png";
import Mpop from "../../../assets/images/device/mpop.png";
import Drawer1 from "../../../assets/images/device/clover_device_1.png";
import Drawer2 from "../../../assets/images/device/clover_device_2.png";
import Drawer3 from "../../../assets/images/device/clover_device_3.png";
import Ipad2 from "../../../assets/images/device/ipad1w.jpg";
import Ipad1 from "../../../assets/images/device/ipad2w.jpg";
import Ipad3 from "../../../assets/images/device/ipad3w.jpg";
import StandBlack1 from "../../../assets/images/device/ipad1.jpg";
import StandBlack2 from "../../../assets/images/device/ipad2.jpg";
import StandBlack3 from "../../../assets/images/device/ipad3.jpg";
import Printer from "../../../assets/images/device/printer.png";
import dejavoo_QD2 from "../../../assets/images/device/dejavoo_QD2.png";
import dejavoo_QD3 from "../../../assets/images/device/dejavoo_QD3.png";
import a60 from "../../../assets/images/device/a60.png";
import a80 from "../../../assets/images/device/a80.png";
import a920 from "../../../assets/images/device/a920.png";

export default function DevicesItem() {
  const [swap, setSwap] = useState(true);
  const [swap2, setSwap2] = useState(true);
  const [swap3, setSwap3] = useState(true);

  return (
    <main>
      <div className="divices__container px-4">
        <div className="divices__top">
          <div className="divices__item d-flex flex-column justify-content-center align-items-center">
            <h1 className="divices__item--title text-uppercase text-center font-weight-bold">
              Choose the Right Hardware for business
            </h1>

            <h2 className="divices__bot-title text-uppercase font-weight-bold text-center">
              paypoint
            </h2>
            <hr className="divices__bot-hr" />

            <Row className="row__size mx-0">
              <Col
                xs={12}
                md={6}
                className="xs-d-flex d-sm-flex d-md-block justify-content-center p-0"
              >
                <Card className="xs-d-flex d-sm-flex d-md-block justify-content-center p-0 align-items-center border-0">
                  <Card.Img
                    className="divices__item--img"
                    src={PayPoint}
                    alt=""
                  />
                </Card>
              </Col>
              <Col xs={12} md={6} className="text-center text-md-left p-0">
                <h1 className="text-uppercase font-weight-bold divices__item--title2">
                  PayPoint® Plus
                  <br />
                  for iPad®POS System
                </h1>
                <p className="divices__item--text2 ">
                  PayPoint Plus for iPad is a new all-in-one mPOS solution that
                  brings unmatched style to the point of sale with a distinctive
                  modern aesthetic. PayPoint Plus provides everything a merchant
                  needs including a fully integrated 2D barcode scanner from
                  Honeywell, a 3-inch printer from Star Micronics, an
                  encryptable MSR from Magtek, full-sized 16-inch cash drawer
                  and connections for third party peripherals. With a
                  flip-for-signature and a built-in customer facing display to
                  encourage shopper engagement, this space-saving and
                  commercial-grade AiO is ideal for retail, hospitality,
                  restaurants and entertainment venues.
                </p>

                <Link
                  className="divices__item--btn text-uppercase font-weight-bold text-center"
                  to="/home/sign-up"
                >
                  contact sale
                </Link>
              </Col>
            </Row>
            <Row className="mx-0">
              <Col
                xs={12}
                md={6}
                className="text-center text-md-left p-0 order-1 order-md-0"
              >
                <h1 className="text-uppercase font-weight-bold divices__item--title2">
                  mPOP™ Multifunction System
                </h1>
                <h3 className="divices__item--subtitle">
                  Compact and Sleek Design
                </h3>
                <p className="divices__item--text2 ">
                  The functions and connectivity of the mPOP make processing
                  customer transactions smooth and effective for small shops,
                  cafes, florists, bars, and many more. Aesthetically simple and
                  elegant, the mPOP™ provides the ultimate point of sale
                  solution for the new face of mPOS.
                </p>
                <Link
                  className="divices__item--btn text-uppercase font-weight-bold text-center"
                  to="/home/sign-up"
                >
                  contact sale
                </Link>
              </Col>
              <Col
                xs={12}
                md={6}
                className="xs-d-flex d-sm-flex justify-content-sm-center justify-content-md-end p-0 order-0 order-md-1"
              >
                <Card className="xs-d-flex d-sm-flex justify-content-sm-center justify-content-md-end p-0 order-0 order-md-1 align-items-center border-0">
                  <Card.Img className="divices__item--img" src={Mpop} alt="" />
                </Card>

                {/* <img className="divices__item--img" src={Mpop} alt="" /> */}
              </Col>
            </Row>
          </div>
        </div>
        <div className="divices__bot">
        
          <div className="divices__bot-item d-flex flex-column justify-content-center align-items-center">
            <h2 className="divices__bot-title text-uppercase font-weight-bold text-center">
              clover devices
            </h2>
            <hr className="divices__bot-hr" />
            <Row className="mx-0">
              <CardDeck>
                <Card className="divices__bot-card">
                  <Card.Img
                    variant="top"
                    src={Drawer1}
                    className="divices__bot-card--img mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="divices__bot-card--title divices__bot-card--title--clover text-center text-text-uppercase">
                      Clover GO
                    </Card.Title>
                    <div className="divices__bot-card--text">
                      Take your business to your customers with this sleek, compact mobile credit card reader and app that pack a lot of processing power. Whether at the local farmer’s market or at a customer’s job site, you can accept payments on the go, wherever you have a Wi-Fi or cellular connection.
                    </div>
                  </Card.Body>
                </Card>
                <Card className="divices__bot-card">
                  <Card.Img
                    variant="top"
                    src={Drawer2}
                    className="divices__bot-card--img mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="divices__bot-card--title divices__bot-card--title--clover text-center text-text-uppercase">
                      Clover Mini
                    </Card.Title>
                    <div className="divices__bot-card--text">
                      A full point-of-sale system in one sleek little package. Mini can fit into any space but packs plenty of POS power to run your business, end to end. Use it just for payments or to run your whole business from inventory to payroll.
                    </div>
                  </Card.Body>
                </Card>
                <Card className="divices__bot-card">
                  <Card.Img
                    variant="top"
                    src={Drawer3}
                    className="divices__bot-card--img mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="divices__bot-card--title divices__bot-card--title--clover text-center text-text-uppercase">
                      Clover Flex
                    </Card.Title>
                    <div className="divices__bot-card--text">
                      Serve customers better – at the counter, in line, at the table, or in the field – with the Clover Flex handheld POS system. This all-in-one device offers built-in capabilities to accept payments, conduct business, and track sales all from the palm of your hand.
                    </div>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Row>{" "}
            <Link
              className="divices__item--btn text-uppercase font-weight-bold text-center mt-4"
              to="/home/sign-up"
            >
              contact sale
            </Link>
          </div>

          <div className="divices__bot-item d-flex flex-column justify-content-center align-items-center">
            <h2 className="divices__bot-title text-uppercase font-weight-bold text-center">
              Ipad stand
            </h2>
            <hr className="divices__bot-hr" />
            <Row className="mx-0">
              <CardDeck>
                <Card className="divices__bot-card">
                  {swap ? (
                    <Card.Img
                      variant="top"
                      src={Ipad1}
                      className="divices__bot-card--img mx-auto"
                    />
                  ) : (
                    <Card.Img
                      variant="top"
                      src={StandBlack2}
                      className="divices__bot-card--img mx-auto"
                    />
                  )}
                  <Card.Body>
                    <Card.Title className="divices__bot-card--title text-center text-text-uppercase">
                      {'BEELTA IPAD STAND FOR 9.7"/10.2 INCH'}
                    </Card.Title>
                    <Card.Text className="divices__bot-card--text1 d-flex justify-content-center">
                      <button
                        className="divices__bot-card--color mr-4"
                        onClick={() => setSwap(true)}
                      ></button>
                      <button
                        className="divices__bot-card--color bg-dark"
                        onClick={() => setSwap(false)}
                      ></button>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="divices__bot-card">
                  {swap2 ? (
                    <Card.Img
                      variant="top"
                      src={Ipad2}
                      className="divices__bot-card--img mx-auto"
                    />
                  ) : (
                    <Card.Img
                      variant="top"
                      src={StandBlack1}
                      className="divices__bot-card--img mx-auto"
                    />
                  )}
                  <Card.Body>
                    <Card.Title className="divices__bot-card--title text-center text-text-uppercase">
                      {`BEELTA IPAD STAND FOR 11"/12.9 INCH(2018)`}
                    </Card.Title>
                    <Card.Text className="divices__bot-card--text1 d-flex justify-content-center">
                      <button
                        className="divices__bot-card--color mr-4"
                        onClick={() => setSwap2(true)}
                      ></button>
                      <button
                        className="divices__bot-card--color bg-dark"
                        onClick={() => setSwap2(false)}
                      ></button>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="divices__bot-card">
                  {swap3 ? (
                    <Card.Img
                      variant="top"
                      src={Ipad3}
                      className="divices__bot-card--img mx-auto"
                    />
                  ) : (
                    <Card.Img
                      variant="top"
                      src={StandBlack3}
                      className="divices__bot-card--img mx-auto"
                    />
                  )}
                  <Card.Body>
                    <Card.Title className="divices__bot-card--title text-center text-text-uppercase">
                      BEELTA IPAD STAND FOR PRO 12.9 INCH(2015/2017)
                    </Card.Title>
                    <Card.Text className="divices__bot-card--text1 d-flex justify-content-center">
                      <button
                        className="divices__bot-card--color mr-4"
                        onClick={() => setSwap3(true)}
                      ></button>
                      <button
                        className="divices__bot-card--color bg-dark"
                        onClick={() => setSwap3(false)}
                      ></button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Row>{" "}
            <Link
              className="divices__item--btn text-uppercase font-weight-bold text-center mt-4"
              to="/home/sign-up"
            >
              contact sale
            </Link>
          </div>
          <div className="divices__bot-item d-flex flex-column justify-content-center align-items-center">
            <h2 className="divices__bot-title text-uppercase font-weight-bold text-center">
              terminal devices
            </h2>
            <hr className="divices__bot-hr" />
            <Row className="mx-0">
              <CardDeck>
                <Card className="divices__bot-card">
                  <Card.Img
                    variant="top"
                    src={a60}
                    className="divices__bot-card--img1 mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="divices__bot-card--title2 text-center text-text-uppercase">
                      A60
                    </Card.Title>
                  </Card.Body>
                </Card>
                <Card className="divices__bot-card">
                  <Card.Img
                    variant="top"
                    src={a80}
                    className="divices__bot-card--img1 mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="divices__bot-card--title2 text-center text-text-uppercase">
                      A80 SmartDesktop payment terminal
                    </Card.Title>
                  </Card.Body>
                </Card>
                <Card className="divices__bot-card">
                  <Card.Img
                    variant="top"
                    src={a920}
                    className="divices__bot-card--img1 mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="divices__bot-card--title2 text-center text-text-uppercase">
                      A920 Smart Mobile
                    </Card.Title>
                  </Card.Body>
                </Card>
                {/* <Card className="divices__bot-card">
                  <Card.Img
                    variant="top"
                    src={Terminal3}
                    className="divices__bot-card--img1 mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="divices__bot-card--title2 text-center text-text-uppercase">
                      S920 Mobile Payment Terminal
                    </Card.Title>
                  </Card.Body>
                </Card> */}
                <Card className="divices__bot-card">
                  <Card.Img
                    variant="top"
                    src={dejavoo_QD2}
                    className="divices__bot-card--img1 mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="divices__bot-card--title2 text-center text-text-uppercase">
                      Dejavoo QD2 Mobile Wireless Android
                    </Card.Title>
                  </Card.Body>
                </Card>

                <Card className="divices__bot-card">
                  <Card.Img
                    variant="top"
                    src={dejavoo_QD3}
                    className="divices__bot-card--img1 mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="divices__bot-card--title2 text-center text-text-uppercase">
                      Dejavoo QD3 mPOS Android
                    </Card.Title>
                  </Card.Body>
                </Card>

              </CardDeck>
            </Row>{" "}
            <Link
              className="divices__item--btn text-uppercase font-weight-bold text-center mt-4"
              to="/home/sign-up"
            >
              contact sale
            </Link>
          </div>
          <div className="divices__bot-item d-flex flex-column justify-content-center align-items-center">
            <h2 className="divices__bot-title text-uppercase font-weight-bold text-center">
              Printer
            </h2>
            <hr className="divices__bot-hr" />
            <Row className="mx-0">
              <Col
                xs={12}
                md={3}
                className="xs-d-flex d-sm-flex d-md-block justify-content-center p-0"
              >
                <Card className="xs-d-flex d-sm-flex d-md-block justify-content-center p-0 align-items-center border-0">
                  <Card.Img
                    className="divices__item--img"
                    src={Printer}
                    alt=""
                  />
                </Card>
                {/* <img className="divices__item--img" src={Printer} alt="" /> */}
              </Col>
              <Col
                xs={12}
                md={9}
                className="text-center text-md-left p-0 order-1 order-md-0"
              >
                <h1 className="text-uppercase font-weight-bold divices__item--title2">
                  TSP143III Thermal Printer
                </h1>
                <h3 className="divices__item--subtitle">
                  High-Speed and Reliable
                </h3>
                <p className="divices__item--text2 ">
                  {`With included internal power supply, power cables, complete
                  mounting kits, and paper roll, the TSP143III is the perfect
                  printer for any mPOS bundle. Star has also added an additional
                  USB type-A connector for one convenient power source for your
                  tablet or mobile device. The TSP143III prints at a high-speed
                  of 43 RPM (250mm/s) and includes "Drop-In and Print" paper
                  loading and a guillotine auto-cutter.`}
                </p>
                <Link
                  className="divices__item--btn text-uppercase font-weight-bold text-center"
                  to="/home/sign-up"
                >
                  contact sale
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </main>
  );
}
