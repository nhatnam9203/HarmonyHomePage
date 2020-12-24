import React, { useState } from "react";
import { Card, CardDeck, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PayPoint from "../../../assets/images/Devices/elo paypoint calendar-1.png";
import Mpop from "../../../assets/images/Devices/elo paypoint calendar.png";
import Drawer1 from "../../../assets/images/Devices/CX-300_2_800x-1.png";
import Drawer2 from "../../../assets/images/Devices/CX-350_1_800x.png";
import Drawer3 from "../../../assets/images/Devices/CX-410_1_800x.png";
import Ipad1 from "../../../assets/images/Devices/CX-300_2_800x.png";
import Ipad2 from "../../../assets/images/Devices/SC-102G-A3_1_800x-1.png";
import Ipad3 from "../../../assets/images/Devices/SC-102B-A4_1_800x.png";
import StandBlack1 from "../../../assets/images/Devices/stand-black1.jpeg";
import StandBlack2 from "../../../assets/images/Devices/stand-black2.jpeg";
import StandBlack3 from "../../../assets/images/Devices/stand-black3.jpeg";
import Terminal1 from "../../../assets/images/Devices/A80-for-USCA3_3000x.png";
import Terminal2 from "../../../assets/images/Devices/a920-4-3_1800x.png";
import Terminal3 from "../../../assets/images/Devices/423350_57691.png";
import Terminal4 from "../../../assets/images/Devices/dejavoo-z1.png";
import Terminal5 from "../../../assets/images/Devices/SC-102G-A3_1_800x.png";
import Printer from "../../../assets/images/Devices/41OssYDWNRL.png";

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

            <Row className="row__size mx-0">
              <Col
                xs={12}
                md={6}
                className="xs-d-flex d-sm-flex d-md-block justify-content-center p-0"
              >
                <img className="divices__item--img" src={PayPoint} alt="" />
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
                  to="/sign-up"
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
                  to="/sign-up"
                >
                  contact sale
                </Link>
              </Col>
              <Col
                xs={12}
                md={6}
                className="xs-d-flex d-sm-flex justify-content-sm-center justify-content-md-end p-0 order-0 order-md-1"
              >
                <img className="divices__item--img" src={Mpop} alt="" />
              </Col>
            </Row>
          </div>
        </div>
        <div className="divices__bot">
          <div className="divices__bot-item d-flex flex-column justify-content-center align-items-center">
            <h2 className="divices__bot-title text-uppercase font-weight-bold text-center">
              cash drawer
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
                    <Card.Title className="divices__bot-card--title text-center text-text-uppercase">
                      POS CASH DRAWER 12 INCH, BX1214S
                    </Card.Title>
                    <Card.Text className="divices__bot-card--text">
                      <ul className="divices__bot-card--ul">
                        <li className="divices__bot-card--li">
                          13.5 x 15.2 x 3.9 inches
                        </li>
                        <li className="divices__bot-card--li">
                          Removable Tray,5Bill/5Coin,Aluminium Alloy,RJ11/RJ12
                          Cable,DC24V
                        </li>
                        <li className="divices__bot-card--li">
                          Lifecycle - Tested to Over 2,000,000 Times Operation -
                          Heavy Duty
                        </li>
                        <li className="divices__bot-card--li">
                          Aluminium Alloy material, 5Bill/5Coin Tray, Ball
                          bearing slide for smooth and stable operations
                        </li>
                        <li className="divices__bot-card--li">
                          This POS cash drawer can be used alone or connects to
                          receipt printer via RJ11/RJ12 cable
                        </li>
                        <li className="divices__bot-card--li">
                          Key open or auto open when it hooks up with receipt
                          printer / thermal printers which compatible with
                          RJ11/RJ12 Interfaces, such as Epson, Star, Citizen...
                        </li>
                        <li className="divices__bot-card--li">
                          Why Choose us? - We are your premier POS partner with
                          12 Years Experience on cash drawers and related
                          products
                        </li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="divices__bot-card">
                  <Card.Img
                    variant="top"
                    src={Drawer2}
                    className="divices__bot-card--img mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="divices__bot-card--title text-center text-text-uppercase">
                      POS CASH DRAWER 13 INCH, BX1315W
                    </Card.Title>
                    <Card.Text className="divices__bot-card--text">
                      <ul className="divices__bot-card--ul">
                        <li className="divices__bot-card--li">
                          13.5 x 15.2 x 3.9 inches
                        </li>
                        <li className="divices__bot-card--li">
                          5B/5C,Via RJ11/RJ12 Cable for Auto Open,DC24V
                        </li>
                        <li className="divices__bot-card--li">
                          Lifecycle - Tested to Over 2,000,000 Times Operation -
                          Heavy Duty
                        </li>
                        <li className="divices__bot-card--li">
                          5Bill - 5Coin Cash Drawer Tray, Media slot to insert
                          check and large bills
                        </li>
                        <li className="divices__bot-card--li">
                          This cash register can be used alone or connects to
                          receipt printer via RJ11/RJ12 cable
                        </li>
                        <li className="divices__bot-card--li">
                          Key open or auto open when it hooks up with receipt
                          printer / thermal printers which compatible with
                          RJ11/RJ12 interfaces, such as Epson, Star, Citizen...
                        </li>
                        <li className="divices__bot-card--li">
                          Why Choose us? - We are your premier POS partner with
                          12 Years Experience on cash drawers and related
                          products
                        </li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="divices__bot-card">
                  <Card.Img
                    variant="top"
                    src={Drawer3}
                    className="divices__bot-card--img mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="divices__bot-card--title text-center text-text-uppercase">
                      POS CASH DRAWER 16 INCH, BX1618W
                    </Card.Title>
                    <Card.Text className="divices__bot-card--text">
                      <ul className="divices__bot-card--ul">
                        <li className="divices__bot-card--li">
                          16.1 x 18.1 x 4.3 inches
                        </li>
                        <li className="divices__bot-card--li">
                          5Bill/5Coin Removable Tray, RJ11/RJ12 Cable, DC24V
                        </li>
                        <li className="divices__bot-card--li">
                          Lifecycle - Tested to Over 2,000,000 Times Operation -
                          Heavy Duty
                        </li>
                        <li className="divices__bot-card--li">
                          5Bill/5Coin Removable Tray,1 big slots to insert
                          checks, credit card receipts...
                        </li>
                        <li className="divices__bot-card--li">
                          This POS cash drawer can be used alone or connects to
                          receipt printer via RJ11/RJ12 cable
                        </li>
                        <li className="divices__bot-card--li">
                          Key open or auto open when it hooks up with receipt
                          printer / thermal printers which compatible with
                          RJ11/RJ12 interfaces, such as Epson, Star, Citizen...
                        </li>
                        <li className="divices__bot-card--li">
                          Why Choose us? - We are your premier POS partner with
                          12 Years Experience on cash drawers and related
                          products
                        </li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Row>{" "}
            <Link
              className="divices__item--btn text-uppercase font-weight-bold text-center mt-4"
              to="/sign-up"
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
                      {'BEELTA IPAD STAND FOR 9.7"/10.2 INCH(2018)'}
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
              to="/sign-up"
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
                    src={Terminal1}
                    className="divices__bot-card--img mx-auto"
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
                    src={Terminal2}
                    className="divices__bot-card--img mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="divices__bot-card--title2 text-center text-text-uppercase">
                      A920 Smart Mobile
                    </Card.Title>
                  </Card.Body>
                </Card>
                <Card className="divices__bot-card">
                  <Card.Img
                    variant="top"
                    src={Terminal3}
                    className="divices__bot-card--img mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="divices__bot-card--title2 text-center text-text-uppercase">
                      S920 Mobile Payment Terminal
                    </Card.Title>
                  </Card.Body>
                </Card>
                <Card className="divices__bot-card">
                  <Card.Img
                    variant="top"
                    src={Terminal4}
                    className="divices__bot-card--img mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="divices__bot-card--title2 text-center text-text-uppercase">
                      Dejavoo Z1 MPOS Terminal
                    </Card.Title>
                  </Card.Body>
                </Card>
                <Card className="divices__bot-card">
                  <Card.Img
                    variant="top"
                    src={Terminal5}
                    className="divices__bot-card--img mx-auto"
                  />
                  <Card.Body>
                    <Card.Title className="divices__bot-card--title2 text-center text-text-uppercase">
                      S300 Integrated Retail PIN Pad
                    </Card.Title>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Row>{" "}
            <Link
              className="divices__item--btn text-uppercase font-weight-bold text-center mt-4"
              to="/sign-up"
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
                <img className="divices__item--img" src={Printer} alt="" />
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
                  to="/sign-up"
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
