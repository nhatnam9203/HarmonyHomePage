import React from "react";
import Fade from "react-reveal/Fade";
import { Button } from "react-bootstrap";

import OrderAccountInformation from "./OrderAccount";
import ItemsOrdered from "./ItemsOrdered";
import AddressInformation from "./Adress";
import PaymentShippingMethod from "./PaymentShipping";
import OrderTotal from "./OrderTotal";

import { useSelector } from "react-redux";
import "./style.scss";

const Index = ({ onBack }) => {
  const { orderDetail } = useSelector((state) => state.retailer);

  React.useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <Fade>
      <div className="info_merchant_title">
        <div>
          Order <span style={{ color: "#333" }}>#{orderDetail?.code}</span>
        </div>
        <Button className="btn btn_cancel" onClick={onBack}>
          Back
        </Button>
      </div>
      <OrderAccountInformation
        appointmentId={orderDetail?.appointmentId || ""}
        purchasePoint={orderDetail?.purchasePoint || ""}
        createdDate={orderDetail?.createdDate || ""}
        status={orderDetail?.status || ""}
        customerName={
          orderDetail?.customer?.firstName +
          " " +
          orderDetail?.customer?.lastName
        }
        phone={orderDetail?.customer?.phone || ""}
        email={orderDetail?.customer?.email || ""}
        address={orderDetail?.customer?.address || ""}
      />

      <ItemsOrdered products={orderDetail?.products || []} />

      <AddressInformation
        billingAddress={orderDetail?.billingAddress || ""}
        shippingAddress={orderDetail?.shippingAddress || ""}
      />

      <PaymentShippingMethod
        shipping={orderDetail?.shipping || ""}
        payment={orderDetail?.payment || ""}
      />

      <OrderTotal
        tax={orderDetail?.tax || ""}
        subTotal={orderDetail?.subTotal || ""}
        discount={orderDetail?.discount || ""}
        total={orderDetail?.total || ""}
        shippingAmount={orderDetail?.shipping?.shippingAmount || ""}
        paidTotal={orderDetail?.paidTotal || ""}
        returnAmount={orderDetail?.returnAmount || "0.00 "}
        dueAmount={orderDetail.dueAmount || ""}
        note={orderDetail.note || ""}
      />
    </Fade>
  );
};

export default Index;
