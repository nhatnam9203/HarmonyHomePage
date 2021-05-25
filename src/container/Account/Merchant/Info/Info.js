import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getMerchantByIdAction } from "../../../../actions/userActions";
import { getOrders, getInventory } from "../../../../actions/retailerActions";

import BusinessInformation from "./BusinessInformation";
import Inventory from "./Inventory";
import Customer from "./Customer";
import Report from "./Report";
import Orders from "./Orders";
import Tabs from "./Tabs";

import "./Info.scss";

function Info() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.merchantDetail);
  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  /* tab active */
  const [tabActive, setTabActive] = React.useState("Business Information");

  /* Orders */
  const [sortOrders, setSortOrders] = React.useState("");
  const [pageOrders, setPageOrders] = React.useState(1);
  const [keySearchOrders] = React.useState("");

  /* Inventory */
  const [sortInventory] = React.useState("");
  const [keySearchInventory] = React.useState("");

  React.useEffect(() => {
    dispatch(getMerchantByIdAction(id));
    getOrdersData();
    getInventoryData();
  }, [dispatch]);

  const getOrdersData = () => {
    const url = `retailer/appointment?page=${pageOrders}&key=${keySearchOrders}&sorts=${sortOrders}&merchantId=${detail.merchantId}`;
    dispatch(getOrders(url, token));
  };

  const getInventoryData = () => {
    const url = `product/key=${keySearchInventory}&sorts=${sortInventory}&merchantId=${detail.merchantId}`;
    dispatch(getInventory(url, token));
  };

  const changePageOrders = (page) => {
    setPageOrders(page);
  };

  const changeSortOrders = (sort) => {
    setSortOrders(sort);
  };

  const changeTab = (tabName) => {
    setTabActive(tabName);
  };

  const renderTabItem = () => {
    switch (tabActive) {
      case "Business Information":
        return <BusinessInformation />;
      case "Orders":
        return (
          <Orders
            changePageOrders={changePageOrders}
            changeSortOrders={changeSortOrders}
          />
        );
      case "Inventory":
        return <Inventory />;
      case "Customer":
        return <Customer />;
      case "Report":
        return <Report />;

      default:
        return null;
    }
  };

  return (
    <div className="info_content">
      <div className="d-flex justify-content-between">
        <span className="info_businessName">
          {id} - {detail?.businessName}
        </span>
        <Button className="btn btn_cancel" onClick={() => history.goBack()}>
          Back
        </Button>
      </div>
      <Tabs tabActive={tabActive} changeTab={changeTab} />
      {renderTabItem()}
    </div>
  );
}

export default Info;
