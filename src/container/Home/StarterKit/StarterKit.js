import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import EloPayPoint from "../../../assets/images/elo-paypoint.png";
import IPStand from "../../../assets/images/ip-stand.png";
import CashDrawer from "../../../assets/images/cash-drawer.png";
import ReceiptPrinter from "../../../assets/images/receipt-printer.png";
import PAX from "../../../assets/images/pax.png";

export default function StarterKit() {
  return (
    <main className="starter d-flex flex-column align-items-center justify-content-center">
      <h1 className="starter_title text-uppercase font-weight-bold">
        Starter Kit
      </h1>
      <p className="starter_text">
        Become more professional with specialized equipment
      </p>
      <Container>
        <Row className="starter_kit-wrap">
          <Col className="p-0">
            <Card className="rounded-0">
              <Card.Body className="starter_card-body">
                <Card.Title className="starter_card-title font-weight-light text-capitalize">
                  Elo Paypoint
                </Card.Title>
                <Card.Text className="starter_card-text text-capitalize font-weight-light">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam era.
                </Card.Text>
                <Card.Img src={EloPayPoint} className="starter_card-img" />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Row>
              <Col className="p-0">
                <Card className="rounded-0">
                  <Card.Body className="starter_card-body">
                    <Card.Title className="starter_card-title font-weight-light text-capitalize">
                      Ipad stand
                    </Card.Title>
                    <Card.Text className="starter_card-text--item text-capitalize font-weight-light">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </Card.Text>
                    <Card.Img
                      src={IPStand}
                      className="starter_card-img--item"
                    />
                  </Card.Body>
                </Card>
              </Col>
              <Col className="p-0">
                <Card className="rounded-0">
                  <Card.Body className="starter_card-body">
                    <Card.Title className="starter_card-title font-weight-light text-capitalize">
                      Ipad stand
                    </Card.Title>
                    <Card.Text className="starter_card-text--item text-capitalize font-weight-light">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </Card.Text>
                    <Card.Img
                      src={CashDrawer}
                      className="starter_card-img--item"
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="p-0">
                <Card className="rounded-0">
                  <Card.Body className="starter_card-body">
                    <Card.Title className="starter_card-title font-weight-light text-capitalize">
                      Ipad stand
                    </Card.Title>
                    <Card.Text className="starter_card-text--item text-capitalize font-weight-light">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </Card.Text>
                    <Card.Img
                      src={ReceiptPrinter}
                      className="starter_card-img--item"
                    />
                  </Card.Body>
                </Card>
              </Col>
              <Col className="p-0">
                <Card className="rounded-0">
                  <Card.Body className="starter_card-body">
                    <Card.Title className="starter_card-title font-weight-light text-capitalize">
                      Ipad stand
                    </Card.Title>
                    <Card.Text className="starter_card-text--item text-capitalize font-weight-light">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </Card.Text>
                    <Card.Img src={PAX} className="pax_img" />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <button className="starter_button text-uppercase">
        see compatible devices
      </button>
    </main>
  );
}
