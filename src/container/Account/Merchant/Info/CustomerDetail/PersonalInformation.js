import React from "react";
import Title from "@/components/Title";
import moment from "moment";
import { Row, Col } from "react-bootstrap";
import { convertIsVip } from "@/util";

const Personalinformation = ({
  phone,
  email,
  gender,
  birthdate,
  isVip,
  createdDate,
  defaultBillingAddress,
  defaultShippingAddress,
}) => {
  return (
    <>
      <Title>Personal Information</Title>
      <Row style={{ marginTop: "1rem" }}>
        <Col lg={6}>
          <div className="orderAccount_container_info">
            <div className="rowInfo">
              <p>Phone</p>
              <p>{phone}</p>
            </div>
            <div className="rowInfo">
              <p>Email</p>
              <p>{email}</p>
            </div>
            <div className="rowInfo">
              <p>Gender</p>
              <p>{gender}</p>
            </div>
            <div className="rowInfo">
              <p>Birthday</p>
              <p>{moment(birthdate).format("MMMM DD, YYYY")}</p>
            </div>
            <div className="rowInfo">
              <p>Group</p>
              <p>{convertIsVip(isVip)}</p>
            </div>
            <div className="rowInfo">
              <p>Customer since</p>
              <p>{moment(createdDate).format("MMMM DD, YYYY")}</p>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="orderAccount_container_info">
            <div style={{ fontWeight: "700" }}>Default Billing Address</div>
            <div className="info_customer_address">
              <p>
                {`${defaultBillingAddress?.addressFirstName || ""} ${
                  defaultBillingAddress?.addressLastName || ""
                }`}
              </p>
              <p>
                {`${defaultBillingAddress?.stateName || ""} ${
                  defaultBillingAddress?.street || ""
                } ${defaultBillingAddress?.city || ""} ${
                  defaultBillingAddress?.zipCode || ""
                }`}
              </p>
              <p>{defaultBillingAddress?.addressPhone || ""}</p>
            </div>

            <div style={{ fontWeight: "700", marginTop: 15 }}>
              Default Shipping Address
            </div>
            <div className="info_customer_address">
              <p>
                {`${defaultShippingAddress?.addressFirstName || ""} ${
                  defaultShippingAddress?.addressLastName || ""
                }`}
              </p>
              <p>
                {`${defaultShippingAddress?.stateName || ""} ${
                  defaultShippingAddress?.street || ""
                } ${defaultShippingAddress?.city || ""} ${
                  defaultShippingAddress?.zipCode || ""
                }`}
              </p>
              <p>{defaultShippingAddress?.addressPhone || ""}</p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Personalinformation;
