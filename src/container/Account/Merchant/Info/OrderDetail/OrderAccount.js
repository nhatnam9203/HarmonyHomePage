import React from "react";
import { Row, Col } from "react-bootstrap";
import Title from "./Title";
import "./style.scss";

const OrderAccount = () => {
  return (
    <>
      <Title>Order & Account Information</Title>
      <Row style={{ marginTop: "1rem" }}>
        <Col>
          <div className="title">Order Information</div>
          <div className="orderAccount_container_info">
            <div className="rowInfo">
              <p>ID</p>
              <p>#68787789</p>
            </div>
            <div className="rowInfo">
              <p>Purchase Point</p>
              <p>store</p>
            </div>
            <div className="rowInfo">
              <p>Order Date</p>
              <p>March 23 , 2021 8:35 AM</p>
            </div>
            <div className="rowInfo">
              <p>Order status</p>
              <p>Complete</p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="title">Account Information</div>
          <div className="orderAccount_container_info">
            <div className="rowInfo">
              <p>Customer name</p>
              <p style={{ color: "#1B68AC", fontWeight: "600" }}>#68787789</p>
            </div>
            <div className="rowInfo">
              <p>Phone number</p>
              <p>store</p>
            </div>
            <div className="rowInfo">
              <p>Email</p>
              <p>March 23 , 2021 8:35 AM</p>
            </div>
            <div className="rowInfo">
              <p>Address</p>
              <p>Complete</p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default OrderAccount;
