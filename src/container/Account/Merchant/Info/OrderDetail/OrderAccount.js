import React from "react";
import { Row, Col } from "react-bootstrap";
import Title from "@/components/Title";
import moment from "moment";
import "./style.scss";

const OrderAccount = ({
  appointmentId,
  purchasePoint,
  createdDate,
  status,
  customerName,
  phone,
  email,
  address,
}) => {
  return (
    <>
      <Title>Order & Account Information</Title>
      <Row style={{ marginTop: "1rem" }}>
        <Col lg={6}>
          <div className="title">Order Information</div>
          <div className="orderAccount_container_info">
            <div className="rowInfo">
              <p>ID</p>
              <p>{`# ${appointmentId}`}</p>
            </div>
            <div className="rowInfo">
              <p>Purchase Point</p>
              <p>{`${purchasePoint}`}</p>
            </div>
            <div className="rowInfo">
              <p>Order Date</p>
              <p>{`${moment(createdDate).format("MMMM DD, YYYY hh:mm A")}`}</p>
            </div>
            <div className="rowInfo">
              <p>Order status</p>
              <p>{`${status}`}</p>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="title">Account Information</div>
          <div className="orderAccount_container_info">
            <div className="rowInfo">
              <p>Customer name</p>
              <p
                style={{ color: "#1B68AC", fontWeight: "600" }}
              >{`${customerName}`}</p>
            </div>
            <div className="rowInfo">
              <p>Phone number</p>
              <p>{`${phone}`}</p>
            </div>
            <div className="rowInfo">
              <p>Email</p>
              <p>{`${email}`}</p>
            </div>
            <div className="rowInfo">
              <p>Address</p>
              <p>{`${address}`}</p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default OrderAccount;
