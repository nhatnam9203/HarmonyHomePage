import React from "react";
import { Row, Col } from "react-bootstrap";
import Title from "./Title";
import "./style.scss";

const Address = () => {
  return (
    <>
      <Title>Order & Account Information</Title>
      <Row style={{ marginTop: "1rem" }}>
        <Col>
          <div className="title">Billing address</div>
          <div className="orderAccount_container_info">
            <div className="rowInfo">
              <p>Phan Nhat Nam</p>
            </div>
            <div className="rowInfo">
              <p>134 bui minh truc f6 q8</p>
            </div>
            <div className="rowInfo">
              <p>0355140858</p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="title">Shipping address</div>
          <div className="orderAccount_container_info">
            <div className="rowInfo">
              <p>Phan Nhat Nam</p>
            </div>
            <div className="rowInfo">
              <p>134 bui minh truc f6 q8</p>
            </div>
            <div className="rowInfo">
              <p>0355140858</p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Address;
