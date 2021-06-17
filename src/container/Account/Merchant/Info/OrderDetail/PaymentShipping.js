import React from "react";
import { Row, Col } from "react-bootstrap";
import Title from "./Title";
import "./style.scss";

const Address = () => {
  return (
    <>
      <Title>Payment & Shipping method</Title>
      <Row style={{ marginTop: "1rem" }}>
        <Col>
          <div className="title">Payment Informations</div>
          <div className="orderAccount_container_info">
            <div className="rowInfo">
              <p>Harmony Pay</p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="title">Shipping & Handling Information</div>
          <div className="orderAccount_container_info">
            <div className="rowInfo">
              <p>Shipping carrier</p>
            </div>
            <div className="rowInfo">
              <p>UPS : 23132545646</p>
            </div>
            <div
              className="rowInfo"
              className="rowInfo"
              style={{ marginTop: 10 }}
            >
              <p>Shipping method</p>
            </div>
            <div>
              <p>flat rate : 1-2 days</p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Address;
