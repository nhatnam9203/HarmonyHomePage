import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import team1 from "../../../assets/images/investor/Rectangle 539.png";
import team2 from "../../../assets/images/investor/Rectangle 542.png";
import team3 from "../../../assets/images/investor/Rectangle 545.png";
import team4 from "../../../assets/images/investor/Rectangle 548.png";

export default function Team() {
  return (
    <main className="team w-100 h-100">
      <Container className="team_wrap  d-flex flex-column justify-content-center align-items-center">
        <h1 className="team_title text-uppercase font-weight-bold text-center">
          Our Team
        </h1>
        {/* <p className="team_text text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the
        </p> */}
        <Row className="mx-0">
          <Col md={6} xs={12} xl={3} className="mt-4">
            <Card className="shadow team_card h-100">
              <Card.Img
                variant="top"
                src={team1}
                className="team_card-img mx-auto rounded-circle"
              />
              <Card.Body className="d-flex flex-column align-items-center text-center">
                <Card.Title className="team_card-title text-capitalize">
                  Robert Omara
                </Card.Title>
                <Card.Title className="team_card-subtitle text-capitalize">
                  Chief Technology Officer
                </Card.Title>
                <Card.Text className="team_card-text">
                  He is a seasoned developer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xs={12} xl={3} className="mt-4">
            <Card className="shadow team_card h-100">
              <Card.Img
                variant="top"
                src={team2}
                className="team_card-img mx-auto rounded-circle"
              />
              <Card.Body className="d-flex flex-column align-items-center text-center">
                <Card.Title className="team_card-title text-capitalize">
                  Dat Jerry Nguyen
                </Card.Title>
                <Card.Title className="team_card-subtitle text-capitalize">
                  CEO
                </Card.Title>
                <Card.Text className="team_card-text">
                  Dat Jerry Nguyen, CEO, has been a small business owner for
                  decades. After observing how “big” companies run their
                  businesses and the waste innately involved in companies that
                  grow too big to manage, he decided to centralize his
                  experience with the advent of today’s technology.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xs={12} xl={3} className="mt-4">
            <Card className="shadow team_card h-100">
              <Card.Img
                variant="top"
                src={team3}
                className="team_card-img mx-auto rounded-circle"
              />
              <Card.Body className="d-flex flex-column align-items-center text-center">
                <Card.Title className="team_card-title text-capitalize">
                  Vinh Nguyen
                </Card.Title>
                <Card.Title className="team_card-subtitle text-capitalize">
                  Executive Vice President
                </Card.Title>
                <Card.Text className="team_card-text">
                  Vinh is an electrical engineer for over 20 years.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xs={12} xl={3} className="mt-4">
            <Card className="shadow team_card h-100">
              <Card.Img
                variant="top"
                src={team4}
                className="team_card-img mx-auto rounded-circle"
              />
              <Card.Body className="d-flex flex-column align-items-center text-center">
                <Card.Title className="team_card-title text-capitalize">
                  Minhdy &quot;Zee&quot; Tran
                </Card.Title>
                <Card.Title className="team_card-subtitle text-capitalize">
                  Chief Operating Officer
                </Card.Title>
                <Card.Text className="team_card-text">
                  She is well-trained manager of a merchant service provider and
                  an attorney with nearly 10 years of practicing experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
