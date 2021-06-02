import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import fea1 from "../../../assets/images/Group-fea-1.svg";
import fea2 from "../../../assets/images/Group-fea-2.svg";
import fea3 from "../../../assets/images/Group-fea-3.svg";
import fea4 from "../../../assets/images/Group-fea-4.svg";
import more from "../../../assets/images/more.png";

export default function HomeFeatures() {
  return (
    <main>
      <div className="top_features d-flex flex-column justify-content-center align-items-center">
        <h1 className="top_features-title text-white font-weight-bold text-uppercase ">
          features
        </h1>
        <p className="top_features-text text-white text-center my-0">
          It was popularized in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
        </p>
      </div>
      <div className="bot_features">
        <Container>
          <Row>
            <Col xs={12} md={3} className="px-0">
              <Card className="bot_features-item">
                <div className="d-flex align-items-end justify-content-center bot_features-img">
                  <Card.Img
                    variant="top"
                    src={fea1}
                    className="bot_features--img"
                    alt="img"
                  />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between p-0">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Title className="bot_features-title text-center text-uppercase font-weight-bold">
                      Real-Time Marketing
                    </Card.Title>
                    <Card.Text className="bot_features-text text-center">
                      Create demand instantly Fill appointment gaps
                    </Card.Text>
                  </div>
                  <Button className="bot_features-button">
                    Learn more{" "}
                    <span>
                      <img
                        src={more}
                        className="learn-more"
                        alt="image-learn-more"
                      />
                    </span>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3} className="px-0">
              <Card className="bot_features-item">
                <div className="d-flex align-items-end justify-content-center bot_features-img">
                  <Card.Img
                    variant="top"
                    src={fea2}
                    className="bot_features--img"
                    alt="img"
                  />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between p-0">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Title className="bot_features-title text-center text-uppercase font-weight-bold">
                      Interactive Booking
                    </Card.Title>
                    <Card.Text className="bot_features-text text-center">
                      Two-way booking Streamline check-in management
                    </Card.Text>
                  </div>
                  <Button className="bot_features-button">
                    Learn more{" "}
                    <span>
                      <img src={more} className="learn-more" alt="img" />
                    </span>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3} className="px-0">
              <Card className="bot_features-item">
                <div className="d-flex align-items-end justify-content-center bot_features-img">
                  <Card.Img
                    variant="top"
                    src={fea3}
                    className="bot_features--img"
                    alt="img"
                  />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between p-0">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Title className="bot_features-title text-center text-uppercase font-weight-bold">
                      Payment System
                    </Card.Title>
                    <Card.Text className="bot_features-text text-center">
                      Accept all payment types Safe and secure encryption with
                      tokenization
                    </Card.Text>
                  </div>
                  <Button className="bot_features-button">
                    Learn more{" "}
                    <span>
                      <img src={more} className="learn-more" />
                    </span>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3} className="px-0">
              <Card className="bot_features-item">
                <div className="d-flex align-items-end justify-content-center bot_features-img">
                  <Card.Img
                    variant="top"
                    src={fea4}
                    className="bot_features--img"
                    alt="img"
                  />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between p-0">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Title className="bot_features-title text-center text-uppercase font-weight-bold">
                      Awesome Support & Services
                    </Card.Title>
                    <Card.Text className="bot_features-text text-center">
                      Real people, 24/7 support through phone, text, chats, and
                      emails Multi-lingual staff
                    </Card.Text>
                  </div>
                  <Button className="bot_features-button">
                    Learn more{" "}
                    <span>
                      <img src={more} className="learn-more" alt="img" />
                    </span>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}
