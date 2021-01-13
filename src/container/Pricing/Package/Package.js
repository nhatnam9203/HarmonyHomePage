import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Packkage1 from "../../../assets/images/pricing/Group 5867@2x.jpg";
import Packkage2 from "../../../assets/images/pricing/Group 5868@2x.jpg";
import Packkage3 from "../../../assets/images/pricing/Group 5869@2x.jpg";
import Packkage4 from "../../../assets/images/pricing/Group 1185@2x.jpg";
import FullFeatures from "../../../assets/images/pricing/imgpsh_fullsize_anim.jpeg";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { MdKeyboardArrowRight } from "react-icons/md";

import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getPackagePricingAction } from "../../../actions/userActions";
import Loading from "../../../util/Loading";

export default function Package() {
  const [show, setShow] = useState(false);
  const [checked, setchecked] = useState(false);
  const dispatch = useDispatch();

  const handleChecked = () => {
    setchecked(!checked);
  };

  useEffect(() => {
    dispatch(getPackagePricingAction());
  }, [dispatch]);
  const { loading, packageList } = useSelector((state) => state.pricing);
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
      {loading ? (
        <Loading />
      ) : (
        <main className="package">
          <h1 className="package__title text-uppercase text-center font-weight-bold">
            Package & Pricing
          </h1>
          <p className="package__text text-center">
            Try HarmonyPay Merchants free for 30 days, no credit card required
          </p>
          <Row className="package__container mx-auto ">
            <Col className="package__col d-flex justify-content-center align-items-center px-0">
              <Card className="package__item h-100">
                <Card.Img variant="top" src={Packkage1} />
                <Card.Body className="package__item--cardbody d-flex flex-column justify-content-center align-items-center">
                  <Card.Title className="package__features--title1 text-left border-0">
                    Pricing model
                  </Card.Title>
                  <div className="d-flex align-items-center">
                    {checked ? (
                      <span className="text-center mr-lg-3 package__features--span">
                        Billed
                        <br /> Monthly
                      </span>
                    ) : (
                      <span className="text-center mr-lg-3 package__features--span checked">
                        Billed
                        <br /> Monthly
                      </span>
                    )}

                    <input
                      type="checkbox"
                      className="switch mr-lg-3"
                      onClick={handleChecked}
                    />
                    {checked ? (
                      <span className="text-center package__features--span checked">
                        Billed
                        <br /> Annually
                      </span>
                    ) : (
                      <span className="text-center package__features--span">
                        Billed
                        <br /> Annually
                      </span>
                    )}
                  </div>
                </Card.Body>
              </Card>
              <Card className="package__item h-100">
                <Card.Img variant="top" src={Packkage2} />
                <Card.Body className="package__item--cardbody d-flex flex-column justify-content-center">
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
                </Card.Body>
              </Card>
              <Card className="package__item h-100">
                <Card.Img variant="top" src={Packkage3} />
                <Card.Body className="package__item--cardbody d-flex flex-column justify-content-center">
                  <Card.Title className="package__item--title text-center font-weight-bold">
                    $
                    {checked ? pricingAnnuallyMedium1 : packageList[1]?.pricing}
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
                </Card.Body>
              </Card>
              <Card className="package__item h-100">
                <Card.Img variant="top" src={Packkage4} />
                <Card.Body className="package__item--cardbody d-flex flex-column justify-content-center">
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
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="package__features package__container mx-auto text-center font-weight-bold">
            Features
          </div>
          <div>
            <Row className="package__container package__features--row mx-auto">
              <Col xs={3} className="package__features--title">
                POS
              </Col>
              <Col
                xs={3}
                className="package__features--tick d-flex justify-content-center align-items-center"
              >
                <TiTick size={35} />
              </Col>
              <Col
                xs={3}
                className="package__features--tick d-flex justify-content-center align-items-center"
              >
                <TiTick size={35} />
              </Col>
              <Col
                xs={3}
                className="package__features--tick d-flex justify-content-center align-items-center"
              >
                <TiTick size={35} />
              </Col>
            </Row>
            <Row className="package__container package__features--row mx-auto">
              <Col xs={3} className="package__features--title text-capitalize">
                Sign In App
              </Col>
              <Col
                xs={3}
                className="package__features--tick d-flex justify-content-center align-items-center"
              >
                <TiTick size={35} />
              </Col>
              <Col
                xs={3}
                className="package__features--tick d-flex justify-content-center align-items-center"
              >
                <TiTick size={35} />
              </Col>
              <Col
                xs={3}
                className="package__features--tick d-flex justify-content-center align-items-center"
              >
                <TiTick size={35} />
              </Col>
            </Row>
            <Row className="package__container package__features--row mx-auto">
              <Col xs={3} className="package__features--title text-capitalize">
                App for staff
              </Col>
              <Col
                xs={3}
                className="package__features--tick d-flex justify-content-center align-items-center"
              >
                <TiTick size={35} />
              </Col>
              <Col
                xs={3}
                className="package__features--tick d-flex justify-content-center align-items-center"
              >
                <TiTick size={35} />
              </Col>
              <Col
                xs={3}
                className="package__features--tick d-flex justify-content-center align-items-center"
              >
                <TiTick size={35} />
              </Col>
            </Row>
            <Row className="package__container package__features--row mx-auto">
              <Col xs={3} className="package__features--title text-capitalize">
                Marketing
              </Col>
              <Col
                xs={3}
                className="package__features--tick d-flex justify-content-center align-items-center"
              >
                <TiTick size={35} />
              </Col>
              <Col
                xs={3}
                className="package__features--tick d-flex justify-content-center align-items-center"
              >
                <TiTick size={35} />
              </Col>
              <Col
                xs={3}
                className="package__features--tick d-flex justify-content-center align-items-center"
              >
                <TiTick size={35} />
              </Col>
            </Row>
            <Row className="package__container package__features--row mx-auto">
              <Col xs={3} className="package__features--title text-capitalize">
                Report
              </Col>
              <Col
                xs={3}
                className="package__features--tick d-flex justify-content-center align-items-center"
              >
                <TiTick size={35} />
              </Col>
              <Col
                xs={3}
                className="package__features--tick d-flex justify-content-center align-items-center"
              >
                <TiTick size={35} />
              </Col>
              <Col
                xs={3}
                className="package__features--tick d-flex justify-content-center align-items-center"
              >
                <TiTick size={35} />
              </Col>
            </Row>
            <Row className="package__container package__features--row mx-auto">
              <Col
                xs={3}
                className="package__features--title text-capitalize"
              ></Col>
              <Col
                xs={3}
                className="package__features--tick d-flex justify-content-center align-items-center"
              >
                <button
                  className="text-capitalize package__features--btn text-center bg-white border-0 font-weight-bold"
                  onClick={() => setShow(true)}
                >
                  See features{" "}
                  <MdKeyboardArrowRight
                    size={30}
                    className="package__rightArr"
                  />
                </button>
              </Col>
              <Col
                xs={3}
                className="package__features--tick d-flex justify-content-center align-items-center"
              >
                <button
                  className="text-capitalize package__features--btn text-center bg-white border-0 font-weight-bold"
                  onClick={() => setShow(true)}
                >
                  See features{" "}
                  <MdKeyboardArrowRight
                    size={30}
                    className="package__rightArr"
                  />
                </button>
              </Col>
              <Col
                xs={3}
                className="package__features--tick d-flex justify-content-center align-items-center"
              >
                <button
                  className="text-capitalize package__features--btn text-center bg-white border-0 font-weight-bold"
                  onClick={() => setShow(true)}
                >
                  See features{" "}
                  <MdKeyboardArrowRight
                    size={30}
                    className="package__rightArr"
                  />
                </button>
              </Col>
            </Row>
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
          </div>
        </main>
      )}
    </>
  );
}
