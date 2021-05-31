import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getMerchantByIdAction } from "@/actions/userActions";
import {
  getOrders,
  getInventory,
  getCustomer,
} from "@/actions/retailerActions";
import Loading from "@/util/Loading";

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
  const merchantId = detail.merchantId;
  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  const [firstLoading, setFirstLoading] = React.useState(false);

  /* tab active */
  const [tabActive, setTabActive] = React.useState("Business Information");

  /* Orders */
  const [sortOrders, setSortOrders] = React.useState("ASC");
  const [sortTypeOrders, setSortTypeOrders] = React.useState("code");
  const [pageOrders, setPageOrders] = React.useState(1);
  const [keySearchOrders, setKeySearchOrders] = React.useState("");

  /* Inventory */
  const [sortInventory, setSortInventory] = React.useState("ASC");
  const [sortTypeInventory, setSortTypeInventory] = React.useState("name");
  const [pageInventory, setPageInventory] = React.useState(1);
  const [keySearchInventory, setKeySearchInventory] = React.useState("");

  /* Customer */
  const [sortCustomer, setSortCustomer] = React.useState("DESC");
  const [sortTypeCustomer, setSortTypeCustomer] = React.useState("email");
  const [pageCustomer, setPageCustomer] = React.useState(1);
  const [keySearchCustomer, setKeySearchCustomer] = React.useState("");

  React.useEffect(() => {
    dispatch(getMerchantByIdAction(id));
    setFirstLoading(true);
    setTimeout(() => {
      setFirstLoading(false);
    }, 500);
  }, []);

  React.useEffect(() => {
    if (merchantId) {
      getOrdersData(1, sortOrders, sortTypeOrders);
      getInventoryData(1, sortInventory, sortTypeInventory);
      getCustomerData(1, sortCustomer, sortTypeCustomer);
    }
  }, [merchantId]);

  const getOrdersData = (page, sort, sortType) => {
    let url = `retailer/appointment?page=${page}&key=${keySearchOrders}&sorts={"${sortType}":"${sort}"}&merchantId=${detail.merchantId}`;
    url = encodeURI(url);
    dispatch(getOrders(url, token));
  };

  const getInventoryData = (page, sort, sortType) => {
    let url = `product?page=${page}&key=${keySearchInventory}&sorts={"${sortType}":"${sort}"}&merchantId=${detail.merchantId}`;
    url = encodeURI(url);
    dispatch(getInventory(url, token));
  };

  const getCustomerData = (page, sort, sortType) => {
    let url = `customer/search?page=${page}&key=${keySearchCustomer}&sorts={"${sortType}":"${sort}"}&merchantId=${detail.merchantId}`;
    url = encodeURI(url);
    dispatch(getCustomer(url, token));
  };

  const changePageOrders = async (page) => {
    await setPageOrders(page);
    await getOrdersData(page, sortOrders, sortTypeOrders);
  };

  const changePageInventory = async (page) => {
    await setPageInventory(page);
    await getInventoryData(page, sortInventory, sortTypeInventory);
  };

  const changePageCustomer = async (page) => {
    await setPageCustomer(page);
    await getCustomerData(page, sortCustomer, sortTypeCustomer);
  };

  const changeSortOrders = async (sort, sortType) => {
    await setSortOrders(sort);
    await setSortTypeOrders(sortType);
    await getOrdersData(pageOrders, sort, sortType);
  };

  const changeSortInventory = async (sort, sortType) => {
    await setSortInventory(sort);
    await setSortTypeInventory(sortType);
    await getInventoryData(pageInventory, sort, sortType);
  };

  const changeSortCustomer = async (sort, sortType) => {
    await setSortCustomer(sort);
    await setSortTypeCustomer(sortType);
    await getCustomerData(pageCustomer, sort, sortType);
  };

  const onChangeSearchOrder = (e) => {
    const value = e.target.value;
    setKeySearchOrders(value);
  };

  const onChangeSearchInventory = (e) => {
    const value = e.target.value;
    setKeySearchInventory(value);
  };

  const onChangeSearchCustomer = (e) => {
    const value = e.target.value;
    setKeySearchCustomer(value);
  };

  const searchOrder = async () => {
    await setPageOrders(1);
    getOrdersData(1, sortOrders, sortTypeOrders);
  };

  const searchInventory = async () => {
    await setPageInventory(1);
    getInventoryData(1, sortInventory, sortTypeInventory);
  };

  const searchCustomer = async () => {
    await setPageCustomer(1);
    getCustomerData(1, sortCustomer, sortTypeCustomer);
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
            pageOrders={pageOrders}
            searchOrder={searchOrder}
            valueSearch={keySearchOrders}
            valueSort={sortOrders}
            onChangeSearch={onChangeSearchOrder}
          />
        );
      case "Inventory":
        return (
          <Inventory
            changePageInventory={changePageInventory}
            changeSortInventory={changeSortInventory}
            pageInventory={pageInventory}
            searchInventory={searchInventory}
            valueSearch={keySearchInventory}
            valueSort={sortInventory}
            onChangeSearch={onChangeSearchInventory}
          />
        );
      case "Customer":
        return (
          <Customer
            changePageCustomer={changePageCustomer}
            changeSortCustomer={changeSortCustomer}
            pageCustomer={pageCustomer}
            searchCustomer={searchCustomer}
            valueSearch={keySearchCustomer}
            valueSort={sortCustomer}
            onChangeSearch={onChangeSearchCustomer}
          />
        );
      case "Report":
        return <Report />;

      default:
        return null;
    }
  };

  return (
    <div className="info_content">
      {firstLoading ? (
        <div style={{ marginTop: 200 }}>
          <Loading />
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-between">
            <span className="info_businessName">
              {id} - {detail?.businessName}
            </span>
            <Button className="btn btn_cancel" onClick={() => history.goBack()}>
              Back
            </Button>
          </div>
          {detail.type == "Retailer" && (
            <Tabs tabActive={tabActive} changeTab={changeTab} />
          )}
          {renderTabItem()}
        </>
      )}
    </div>
  );
}

export default Info;
