import React from "react";
import { Row, Col } from "react-bootstrap";
import Title from "@/components/Title";
import "./style.scss";

const Address = ({ billingAddress, shippingAddress }) => {
  return (
    <>
      <Title>Address Information</Title>
      <Row style={{ marginTop: "1rem" }}>
        <Col lg={6}>
          <div className="title">Billing address</div>
          <div className="orderAccount_container_info">
            <div className="rowInfo">
              <p>{`${billingAddress?.addressFirstName || ""} ${
                billingAddress?.addressLastName || ""
              }`}</p>
            </div>
            <div className="rowInfo">
              <p>{`${billingAddress?.stateName || ""} ${
                billingAddress?.street || ""
              } ${billingAddress?.city || ""} ${
                billingAddress?.zipCode || ""
              }`}</p>
            </div>
            <div className="rowInfo">
              <p>{`${billingAddress?.addressPhone || ""}`}</p>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="title">Shipping address</div>
          <div className="orderAccount_container_info">
            <div className="rowInfo">
              <p>{`${shippingAddress?.addressFirstName || ""} ${
                shippingAddress?.addressLastName || ""
              }`}</p>
            </div>
            <div className="rowInfo">
              <p>{`${shippingAddress?.stateName || ""} ${
                shippingAddress?.street || ""
              } ${shippingAddress?.city || ""} ${
                shippingAddress?.zipCode || ""
              }`}</p>
            </div>
            <div className="rowInfo">
              <p>{`${shippingAddress?.addressPhone || ""}`}</p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Address;
