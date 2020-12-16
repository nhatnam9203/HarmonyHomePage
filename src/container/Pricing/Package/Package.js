import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Packkage1 from "../../../assets/images/pricing/Group 5867@2x.jpg";
import Packkage2 from "../../../assets/images/pricing/Group 5868@2x.jpg";
import Packkage3 from "../../../assets/images/pricing/Group 5869@2x.jpg";
import Packkage4 from "../../../assets/images/pricing/Group 1185@2x.jpg";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Package() {
  return (
    <main className="package">
      <h1 className="package__title text-uppercase text-center font-weight-bold">
        Package & Pricing
      </h1>
      <p className="package__text text-center">
        Try HarmonyPay Merchants free for 30 days, no credit card required
      </p>
      <Row className="package__container mx-auto ">
        <Col className="d-flex justify-content-center align-items-center px-0">
          <Card className="package__item h-100">
            <Card.Img variant="top" src={Packkage1} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Link className="package__item--btn text-center" to="/sign-up">
                Start free trial
              </Link>
            </Card.Body>
          </Card>
          <Card className="package__item h-100">
            <Card.Img variant="top" src={Packkage2} />
            <Card.Body className="package__item--cardbody d-flex flex-column justify-content-center">
              <Card.Title className="package__item--title text-center">
                $49.95<span className="package__item--sub">/month</span>
              </Card.Title>
              <Link className="package__item--btn text-center" to="/sign-up">
                Start free trial
              </Link>
            </Card.Body>
          </Card>
          <Card className="package__item h-100">
            <Card.Img variant="top" src={Packkage3} />
            <Card.Body className="package__item--cardbody d-flex flex-column justify-content-center">
              <Card.Title className="package__item--title text-center">
                $89.95<span className="package__item--sub">/month</span>
              </Card.Title>
              <Link className="package__item--btn text-center" to="/sign-up">
                Start free trial
              </Link>
            </Card.Body>
          </Card>
          <Card className="package__item h-100">
            <Card.Img variant="top" src={Packkage4} />
            <Card.Body className="package__item--cardbody d-flex flex-column justify-content-center">
              <Card.Title className="package__item--title text-center">
                $94.95<span className="package__item--sub">/month</span>
              </Card.Title>
              <Link className="package__item--btn text-center" to="/sign-up">
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
          <Col className="package__features--title">POS</Col>
          <Col className="package__features--tick d-flex justify-content-center align-items-center">
            <TiTick size={35} />
          </Col>
          <Col className="package__features--tick d-flex justify-content-center align-items-center">
            <TiTick size={35} />
          </Col>
          <Col className="package__features--tick d-flex justify-content-center align-items-center">
            <TiTick size={35} />
          </Col>
        </Row>
        <Row className="package__container package__features--row mx-auto">
          <Col className="package__features--title text-capitalize">
            Sign In App
          </Col>
          <Col className="package__features--tick d-flex justify-content-center align-items-center">
            <TiTick size={35} />
          </Col>
          <Col className="package__features--tick d-flex justify-content-center align-items-center">
            <TiTick size={35} />
          </Col>
          <Col className="package__features--tick d-flex justify-content-center align-items-center">
            <TiTick size={35} />
          </Col>
        </Row>
        <Row className="package__container package__features--row mx-auto">
          <Col className="package__features--title text-capitalize">
            App for staff
          </Col>
          <Col className="package__features--tick d-flex justify-content-center align-items-center">
            <TiTick size={35} />
          </Col>
          <Col className="package__features--tick d-flex justify-content-center align-items-center">
            <TiTick size={35} />
          </Col>
          <Col className="package__features--tick d-flex justify-content-center align-items-center">
            <TiTick size={35} />
          </Col>
        </Row>
        <Row className="package__container package__features--row mx-auto">
          <Col className="package__features--title text-capitalize">
            Marketing
          </Col>
          <Col className="package__features--tick d-flex justify-content-center align-items-center">
            <TiTick size={35} />
          </Col>
          <Col className="package__features--tick d-flex justify-content-center align-items-center">
            <TiTick size={35} />
          </Col>
          <Col className="package__features--tick d-flex justify-content-center align-items-center">
            <TiTick size={35} />
          </Col>
        </Row>
        <Row className="package__container package__features--row mx-auto">
          <Col className="package__features--title text-capitalize">Report</Col>
          <Col className="package__features--tick d-flex justify-content-center align-items-center">
            <TiTick size={35} />
          </Col>
          <Col className="package__features--tick d-flex justify-content-center align-items-center">
            <TiTick size={35} />
          </Col>
          <Col className="package__features--tick d-flex justify-content-center align-items-center">
            <TiTick size={35} />
          </Col>
        </Row>
        <Row className="package__container package__features--row mx-auto">
          <Col className="package__features--title text-capitalize"></Col>
          <Col className="package__features--tick d-flex justify-content-center align-items-center">
            <Link
              to="/sign-up"
              className="text-capitalize package__features--btn text-center font-weight-bold"
            >
              See features{" "}
              <MdKeyboardArrowRight size={30} className="package__rightArr" />
            </Link>
          </Col>
          <Col className="package__features--tick d-flex justify-content-center align-items-center">
            <Link
              to="/sign-up"
              className="text-capitalize package__features--btn text-center font-weight-bold"
            >
              See features{" "}
              <MdKeyboardArrowRight size={30} className="package__rightArr" />
            </Link>
          </Col>
          <Col className="package__features--tick d-flex justify-content-center align-items-center">
            <Link
              to="/sign-up"
              className="text-capitalize package__features--btn text-center font-weight-bold"
            >
              See features{" "}
              <MdKeyboardArrowRight size={30} className="package__rightArr" />
            </Link>
          </Col>
        </Row>
      </div>
    </main>
  );
}
