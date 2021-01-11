import React from "react";
import { Col, Row } from "react-bootstrap";
import visionIMG from "../../../assets/images/investor/shutterstock_554418190.png";

export default function Story() {
  return (
    <main>
      <div className="story px-4 m-auto text-center">
        <h1 className="story_title text-uppercase font-weight-bold">
          our story
        </h1>
        <p className="story_text">
          Harmony Payment Systems, the sister company of HarmonyPay, has a
          portfolio of over 600 merchants in a unique vertical market of salons.
          The HarmonyPay Team attended the ETA Transact 19 in Las Vegas and were
          delighted by the extremely positive reception and excitement about the
          HarmonyPay app from peers in the Fin Tech world. Salon owners
          nation-wide also gave an enthusiastic welcome when the Team demoed the
          apps at Premiere Orlando 19.
        </p>
        <p className="story_text m-0">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et.
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
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est.
            </p>
            <ul className="vision_link font-weight-light">
              <li className="vision_link-item">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </li>
              <li className="vision_link-item">
                {" "}
                Labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et.
              </li>
              <li className="vision_link-item">
                Dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est.
              </li>
            </ul>
            <p className="vision_text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam.
            </p>
          </Col>
        </Row>
      </div>
    </main>
  );
}
