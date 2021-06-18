import React from "react";
import { Row, Col } from "react-bootstrap";
import Title from "@/components/Title";
import "./style.scss";

const OrderTotal = ({
  tax,
  subTotal,
  discount,
  total,
  shippingAmount,
  paidTotal,
  returnAmount,
  dueAmount,
  note,
}) => {
  return (
    <>
      <Title>Order Total</Title>
      <Row style={{ marginTop: "1rem" }}>
        <Col lg={6}>
          <div className="title">Order Total</div>
          <div className="orderAccount_container_info">
            <div className="rowInfo">
              <p>Subtotal </p>
              <p style={{ fontWeight: "600" }}>$ {subTotal} </p>
            </div>
            <div className="rowInfo">
              <p>Shipping & Handling </p>
              <p style={{ fontWeight: "600" }}>$ {shippingAmount} </p>
            </div>
            <div className="rowInfo">
              <p>Tax</p>
              <p style={{ fontWeight: "600" }}>$ {tax} </p>
            </div>
            <div className="rowInfo">
              <p>Discount</p>
              <p style={{ fontWeight: "600" }}>$ {discount} </p>
            </div>
          </div>
          <div
            className="orderAccount_container_info"
            style={{ background: "transparent" }}
          >
            <div className="rowInfo">
              <p className="orderDetail_blue">Grand Total </p>
              <p className="orderDetail_blue">$ {total} </p>
            </div>
            <div className="rowInfo">
              <p className="orderDetail_blue">Total Paid </p>
              <p className="orderDetail_blue">$ {paidTotal} </p>
            </div>
            <div className="rowInfo">
              <p className="orderDetail_blue">Total Refunded</p>
              <p className="orderDetail_blue">$ {returnAmount} </p>
            </div>
            <div className="rowInfo">
              <p className="orderDetail_blue">Total Due</p>
              <p className="orderDetail_blue">$ {dueAmount} </p>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="title">Notes for this Order</div>
          <div className="commentText">
            <p>Comment text</p>
            <div>{typeof note === "string" ? note : ""}</div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default OrderTotal;
