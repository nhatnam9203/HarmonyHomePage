import React from "react";
import { Row, Col } from "react-bootstrap";
import Title from "./Title";
import "./style.scss";

const OrderTotal = () => {
  return (
    <>
      <Title>Order Total</Title>
      <Row style={{ marginTop: "1rem" }}>
        <Col>
          <div className="title">Order Total</div>
          <div className="orderAccount_container_info">
            <div className="rowInfo">
              <p>Subtotal </p>
              <p style={{ fontWeight: "600" }}>$ 96.00 </p>
            </div>
            <div className="rowInfo">
              <p>Shipping & Handling </p>
              <p style={{ fontWeight: "600" }}>$ 5.00 </p>
            </div>
            <div className="rowInfo">
              <p>Tax</p>
              <p style={{ fontWeight: "600" }}>$ 5.00 </p>
            </div>
            <div className="rowInfo">
              <p>Discount</p>
              <p style={{ fontWeight: "600" }}>$ 5.00 </p>
            </div>
          </div>
          <div
            className="orderAccount_container_info"
            style={{ background: "transparent" }}
          >
            <div className="rowInfo">
              <p className="orderDetail_blue">Grand Total </p>
              <p className="orderDetail_blue">$ 96.00 </p>
            </div>
            <div className="rowInfo">
              <p className="orderDetail_blue">Total Paid </p>
              <p className="orderDetail_blue">$ 5.00 </p>
            </div>
            <div className="rowInfo">
              <p className="orderDetail_blue">Total Refunded</p>
              <p className="orderDetail_blue">$ 5.00 </p>
            </div>
            <div className="rowInfo">
              <p className="orderDetail_blue">Total Due</p>
              <p className="orderDetail_blue">$ 5.00 </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="title">Notes for this Order</div>
          <div className="commentText">
            <p>Comment text</p>
            <div></div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default OrderTotal;
