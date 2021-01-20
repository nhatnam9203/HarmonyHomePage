import React from "react";
import { Col, Row } from "react-bootstrap";
import visionIMG from "../../../assets/images/about/about2.jpg";

export default function Story() {
  return (
    <main>
      <div className="story px-4 m-auto text-center">
        <h1 className="story_title text-uppercase font-weight-bold">
          our story
        </h1>
        <p className="story_text">
          As a serial entrepreneur and a small business owner, our CEO Dat Jerry
          Nguyen experiences firsthand the long hours and the struggle of salon
          owner, as his wife and himself operated several successful salons. The
          thought of how can we provide a solution to salon owners to operate
          more efficiently? Become a serial of questions. With the combined
          minds of our management team and the help of LeVinci Team, we created
          several powerful tools in software and services for salon owners to
          operate more efficiently, work less, and earn more. In the coming
          year, we will continue to create and provide more solutions for small
          businesses and medium businesses in other verticals.
        </p>
      </div>
      <div className="vision">
        <Row className="mx-0">
          <Col xs={12} lg={6} className="w-100 p-0">
            <img
              src={visionIMG}
              alt="Vision & Missions"
              className="vision_img w-100 h-100"
            />
          </Col>
          <Col xs={12} lg={6} className="vision__wrap text-left">
            <h1 className="vision_title text-uppercase font-weight-bold">
              Vision & Missions
            </h1>
            <p className="vision_text">
              "To innovate, create and provide solutions to small and medium
              businesses."
            </p>
          </Col>
        </Row>
      </div>
    </main>
  );
}
