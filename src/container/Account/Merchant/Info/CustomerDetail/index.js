import React from "react";
import Fade from "react-reveal/Fade";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import PersonalInformation from "./PersonalInformation";
import Address from "./Addresses";
import Orders from "./Orders";
import Loading from "@/components/Loading";
import OrderDetail from "../OrderDetail";
import "./style.scss";

const Index = ({ onBack }) => {
  React.useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  const [isDetail, setDetail] = React.useState(false);

  const {
    customerDetail,
    customerAppointments,
    countCustomerAppointments,
    loadingDetail,
  } = useSelector((state) => state.retailer);

  const showDetail = () => {
    setDetail(true);
  };

  if (isDetail) return <OrderDetail onBack={() => setDetail(false)} />;

  return (
    <div style={{ position: "relative" }}>
      <Fade>
        <div className="info_merchant_title">
          <div>
            <span style={{ color: "#333" }}>Customer name</span>
          </div>
          <Button className="btn btn_cancel" onClick={onBack}>
            Back
          </Button>
        </div>
        <PersonalInformation
          phone={customerDetail.phone}
          email={customerDetail.email}
          gender={customerDetail.gender}
          birthdate={customerDetail.birthdate}
          isVip={customerDetail.isVip}
          createdDate={customerDetail.createdDate}
          defaultBillingAddress={customerDetail.defaultBillingAddress}
          defaultShippingAddress={customerDetail.defaultShippingAddress}
        />

        <Address addresses={customerDetail.addresses} />

        <Orders
          customerAppointments={customerAppointments}
          countCustomerAppointments={countCustomerAppointments}
          customerId={customerDetail.customerId}
          showDetail={showDetail}
        />
      </Fade>
      {loadingDetail && <Loading />}
    </div>
  );
};

export default Index;
