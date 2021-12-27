import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Packkage1 from "../../../assets/images/img/Pricing/Group 5957.jpg";
import Packkage2 from "../../../assets/images/img/Pricing/Group 5958.jpg";
import Packkage3 from "../../../assets/images/img/Pricing/Group 5959.jpg";
import Packkage4 from "../../../assets/images/img/Pricing/Group 5960.jpg";
import icon_checked from "../../../assets/images/home/icon_checked.png";
import FullFeatures from "../../../assets/images/pricing/imgpsh_fullsize_anim.jpeg";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { MdKeyboardArrowRight } from "react-icons/md";
import Switch from "react-switch";


import Modal from "react-bootstrap/Modal";
import HeaderPackage from "./HeaderPackpage";
import { useDispatch, useSelector } from "react-redux";
import { getPackagePricingAction } from "../../../actions/userActions";

export default function Package() {
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(false);
  const [packageName, setPackpageName] = React.useState("HarmonyOne");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPackagePricingAction());
  }, [dispatch]);

  const { packageList } = useSelector((state) => state.pricing);

  const pricingAnnuallyBasic =
    packageList[2]?.pricing * packageList[2]?.annually;

  const pricingAnnuallyMedium =
    packageList[1]?.pricing * packageList[1]?.annually;

  const pricingAnnuallyPro = packageList[0]?.pricing * packageList[0]?.annually;

  const pricingAnnuallyBasic1 = pricingAnnuallyBasic.toFixed(2);
  const pricingAnnuallyMedium1 = pricingAnnuallyMedium.toFixed(2);
  const pricingAnnuallyPro1 = pricingAnnuallyPro.toFixed(2);

  return (
    <>
      <main className="package">

        <div className="package__header">
          <h1 className="package__title text-uppercase text-center font-weight-bold">
            Package & Pricing
          </h1>

          <h6 className="package__subTitle text-center">
            Try HarmonyPay Merchants free for 30 days, no credit card required
          </h6>

          <Row className="package__container mx-auto justify-content-md-center">
            <Col
              xs={6}
              md={5}
              style={{ paddingRight: 5 }}
            >
              <div style={{ opacity: packageName == "HarmonyOne" ? 1 : 0.6 }} onClick={() => setPackpageName("HarmonyOne")} className="package__name">
                <h3>Harmony One</h3>
              </div>
            </Col>

            <Col
              xs={6}
              md={5}
              style={{ paddingLeft: 5 }}
            >
              <div style={{ opacity: packageName == "HarmonyPOS" ? 1 : 0.6 }} onClick={() => setPackpageName("HarmonyPOS")} className="package__name">
                <h3>HarmonyPay POS Salon</h3>
              </div>
            </Col>

          </Row>
        </div>

        <div className="package__subItem">
          <h2 style={{ fontSize: 37 }} className="text-center font-weight-bold">
            HarmonyPay POS Salon
          </h2>
          <div className="d-flex align-items-center package__subItem">
            {checked ? (
              <span className="text-center mr-lg-3 package__features--span font-weight-bold">
                Billed
                <br /> Monthly
              </span>
            ) : (
              <span className="text-center mr-lg-3 package__features--span font-weight-bold checked">
                Billed
                <br /> Monthly
              </span>
            )}

            <div style={{ marginRight: 10 }}>
              <Switch
                onChange={setChecked}
                checked={checked}
                uncheckedIcon={<div />}
                checkedIcon={<div />}
                onColor="#45954F"
                offColor="#45954F"
              />
            </div>

            {checked ? (
              <span className="text-center package__features--span font-weight-bold checked">
                Billed
                <br /> Annually
              </span>
            ) : (
              <span className="text-center package__features--span font-weight-bold">
                Billed
                <br /> Annually
              </span>
            )}
          </div>
        </div>

        <Row className="package__container mx-auto ">

          <Col
            xs={12}
            md={4}
            className=""
          >
            <Card className="package__item">
              <HeaderPackage
                title="LEGEND"
                subTitle="8 Staffs"
                color="#1266AE"
                isSpecial={false}
              />
              <Card.Body className="package__item--cardbody d-flex flex-column">
                <Card.Title className="package__item--title text-center font-weight-bold">
                  ${checked ? pricingAnnuallyBasic1 : packageList[2]?.pricing}
                  <span className="package__item--sub">
                    /{checked ? "year" : "month"}
                  </span>
                </Card.Title>
                <Link
                  className="package__item--btn text-center"
                  to="/home/sign-up"
                >
                  Start free trial
                </Link>
                <Card.Text className="package__item--text">
                  The legendary struggle of a salon owner without Harmony POS
                  system. Let’s this package mark the beginning of your
                  legendary successful salon.
                  <span style={{ color: "white" }}>
                    The Quan”. We are your ambassador of Quan. gghjghjgjhghgdgd767fgfhssg
                  </span>
                </Card.Text>

                <div className="item__check">
                  <img src={icon_checked} alt="image_checked" />
                  <div>POS</div>
                </div>
                <div className="item__check">
                  <img src={icon_checked} alt="image_checked" />
                  <div>Check-in App</div>
                </div>
                <div className="item__check">
                  <img src={icon_checked} alt="image_checked" />
                  <div>Marketing</div>
                </div>
                <div className="item__check">
                  <img src={icon_checked} alt="image_checked" />
                  <div>Report</div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={12}
            md={4}
            className=""
          >
            <Card className="package__item">
              <HeaderPackage
                title="LIVE, LOVE AND ENJOY"
                subTitle="15 Staffs"
                color="#0E5999"
                isSpecial={true}
              />
              <Card.Body className="package__item--cardbody d-flex flex-column">
                <Card.Title className="package__item--title text-center font-weight-bold">
                  ${checked ? pricingAnnuallyMedium1 : packageList[1]?.pricing}
                  <span className="package__item--sub">
                    /{checked ? "year" : "month"}
                  </span>
                </Card.Title>
                <Link
                  className="package__item--btn text-center"
                  to="/home/sign-up"
                >
                  Start free trial
                </Link>
                <Card.Text className="package__item--text">
                  The purpose of life is to live it, to experience and enjoy the
                  love it gives in every breath. Let live, love, and enjoy life
                  as it comes.
                  <span style={{ color: "white" }}>
                    The Quan”. We are your ambassador of Quan. We will show you the money hghghjgghghj
                  </span>
                </Card.Text>

                <div className="item__check">
                  <img src={icon_checked} alt="image_checked" />
                  <div>POS</div>
                </div>
                <div className="item__check">
                  <img src={icon_checked} alt="image_checked" />
                  <div>Check-in App</div>
                </div>
                <div className="item__check">
                  <img src={icon_checked} alt="image_checked" />
                  <div>Marketing</div>
                </div>
                <div className="item__check">
                  <img src={icon_checked} alt="image_checked" />
                  <div>Report</div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={12}
            md={4}
            className=""
          >
            <Card className="package__item">
              <HeaderPackage
                title="THE QUAN"
                subTitle="16+ Staffs"
                color="#032E53"
                isSpecial={true}
              />
              <Card.Body className="package__item--cardbody d-flex flex-column">
                <Card.Title className="package__item--title text-center font-weight-bold">
                  ${checked ? pricingAnnuallyPro1 : packageList[0]?.pricing}
                  <span className="package__item--sub">
                    /{checked ? "year" : "month"}
                  </span>
                </Card.Title>
                <Link
                  className="package__item--btn text-center"
                  to="/home/sign-up"
                >
                  Start free trial
                </Link>
                <Card.Text className="package__item--text">
                  Inspire by Rod Tidwell’s word in the movie Jerry Maguire. “It
                  means love, respect, community… and the dollars too. The
                  entire package. The Quan”. We are your ambassador of Quan. We
                  will show you the money
                </Card.Text>

                <div className="item__check">
                  <img src={icon_checked} alt="image_checked" />
                  <div>POS</div>
                </div>
                <div className="item__check">
                  <img src={icon_checked} alt="image_checked" />
                  <div>Check-in App</div>
                </div>
                <div className="item__check">
                  <img src={icon_checked} alt="image_checked" />
                  <div>Marketing</div>
                </div>
                <div className="item__check">
                  <img src={icon_checked} alt="image_checked" />
                  <div>Report</div>
                </div>
              </Card.Body>
            </Card>
          </Col>


          <button
            className="text-capitalize package__features--btn text-center bg-white border-0 font-weight-bold"
            onClick={() => setShow(true)}
          >
            See features{" "}
            <MdKeyboardArrowRight size={30} className="package__rightArr" />
          </button>


          <Modal
            show={show}
            onHide={() => setShow(false)}
            size="xl"
            aria-labelledby="package-modal"
            centered
            className="video-modal text-center"
          >
            <Modal.Header className="border-0" closeButton></Modal.Header>
            <Modal.Body>
              <img src={FullFeatures} alt="" className="w-100" />
            </Modal.Body>
          </Modal>
        </Row>
      </main>
    </>
  );
}
