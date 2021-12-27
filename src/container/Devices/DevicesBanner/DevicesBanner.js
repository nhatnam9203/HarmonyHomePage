import React from "react";
import BannerDevice from "../../../assets/images/device/banner_devices.png";
import { Card, Row, Col } from "react-bootstrap";

export default function DevicesBanner() {
  return <div className="devices__banner">
    <Row style={{ marginLeft : 0, marginRight : 0 }}>
      <Col
        xs={12}
        md={12}
        className="xs-d-flex d-sm-flex justify-content-sm-center justify-content-md-end p-0 order-0 order-md-1"
      >
        <Card className="xs-d-flex d-sm-flex justify-content-sm-center justify-content-md-end p-0 order-0 order-md-1 align-items-center border-0">
          <Card.Img
            className="bot_features2-item--img"
            src={BannerDevice}
            alt="Harmony one"
          />
        </Card>
      </Col>
    </Row>

  </div>;
}
