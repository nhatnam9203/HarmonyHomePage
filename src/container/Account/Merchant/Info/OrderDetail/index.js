import React from "react";
import Fade from "react-reveal/Fade";
import { Button } from "react-bootstrap";
import OrderAccountInformation from "./OrderAccount";
import ItemsOrdered from "./ItemsOrdered";
import AddressInformation from "./Adress";
import PaymentShippingMethod from "./PaymentShipping";
import OrderTotal from "./OrderTotal";
import "./style.scss";

const Index = ({ onBack }) => {
  return (
    <Fade>
      <div className="info_merchant_title">
        Order #1234566
        <Button className="btn btn_cancel" onClick={onBack}>
          Back
        </Button>
      </div>
      <OrderAccountInformation />
      <ItemsOrdered />
      <AddressInformation />
      <PaymentShippingMethod />
      <OrderTotal />
    </Fade>
  );
};

export default Index;
