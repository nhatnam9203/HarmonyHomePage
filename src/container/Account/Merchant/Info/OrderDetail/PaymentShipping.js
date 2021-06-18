import React from "react";
import { Row, Col } from "react-bootstrap";
import Title from "@/components/Title";
import "./style.scss";

const PaymentShipping = ({ payment, shipping }) => {
  return (
    <>
      <Title>Payment & Shipping method</Title>
      <Row style={{ marginTop: "1rem" }}>
        <Col lg={6}>
          <div className="title">Payment Informations</div>
          <div className="orderAccount_container_info">
            <div className="rowInfo">
              <p>Harmony Pay</p>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="title">Shipping & Handling Information</div>
          <div className="orderAccount_container_info">
            <div className="rowInfo">
              <p>Shipping carrier</p>
            </div>
            <div className="rowInfo">
              {shipping.shippingCarrier && (
                <p>
                  {`${shipping?.shippingCarrier || ""} : ${
                    shipping.trackingNumber || ""
                  }`}
                </p>
              )}
            </div>
            <div
              className="rowInfo"
              className="rowInfo"
              style={{ marginTop: 10 }}
            >
              <p>Shipping method</p>
            </div>
            <div>
              {shipping.shippingMethodGroup && (
                <p>
                  {`${shipping?.shippingMethodGroup || ""} : ${
                    shipping.shippingMethodLabel || ""
                  }`}
                </p>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default PaymentShipping;
