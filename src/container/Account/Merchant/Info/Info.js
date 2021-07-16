import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMerchantByIdAction } from "@/actions/userActions";
import {
  getOrders,
  getInventory,
  getCustomer,
  sort_inventory,
  sort_orders,
  sort_customer,
  reset_sort_orders,
  reset_sort_inventory,
  reset_sort_customer,
  exportRetailer,
} from "@/actions/retailerActions";
import Loading from "@/util/Loading";

import BusinessInformation from "./BusinessInformation";
import Inventory from "./Inventory";
import Customer from "./Customer";
import Report from "./Report";
import Orders from "./Orders";
import Tabs from "./Tabs";

import { isEmpty } from "lodash";

import "./Info.scss";

function Info() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.merchantDetail);
  const {
    directionSort_inventory,
    directionSort_orders,
    directionSort_customer,
  } = useSelector((state) => state.retailer);

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
  const [sortInventory, setSortInventory] = React.useState("");
  const [sortTypeInventory, setSortTypeInventory] = React.useState("");
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
      getOrdersData(1);
      getInventoryData(1);
      getCustomerData(1);
    }
  }, [merchantId]);

  const getOrdersData = (page, sort, sortType) => {
    let url = `retailer/appointment?page=${page}&key=${keySearchOrders}&sorts={"${sortType}":"${sort}"}&merchantId=${detail.merchantId}`;
    if (isEmpty(sort) || isEmpty(sortType)) {
      url = `retailer/appointment?page=${page}&key=${keySearchOrders}&sorts=&merchantId=${detail.merchantId}`;
    }
    url = encodeURI(url);
    dispatch(getOrders(url, token));
  };

  const getInventoryData = (page, sort, sortType) => {
    let url = `product?page=${page}&key=${keySearchInventory}&sorts={"${sortType}":"${sort}"}&merchantId=${detail.merchantId}`;
    if (isEmpty(sort) || isEmpty(sortType)) {
      url = `product?page=${page}&key=${keySearchInventory}&sorts=&merchantId=${detail.merchantId}`;
    }
    url = encodeURI(url);
    dispatch(getInventory(url, token));
  };

  const exportInventory = (exportType) => {
    let url = `product/export?page=${pageInventory}&key=${keySearchInventory}&sorts={"${sortTypeInventory}":"${sortInventory}"}&merchantId=${detail.merchantId}&type=${exportType}`;
    if (isEmpty(sortInventory) || isEmpty(sortTypeInventory)) {
      url = `product/export?page=${pageInventory}&key=${keySearchInventory}&sorts=&merchantId=${detail.merchantId}}&type=${exportType}`;
    }
    url = encodeURI(url);
    dispatch(exportRetailer(url, token));
  };

  const getCustomerData = (page, sort, sortType) => {
    let url = `customer/search?page=${page}&key=${keySearchCustomer}&sorts={"${sortType}":"${sort}"}&merchantId=${detail.merchantId}`;
    if (isEmpty(sort) || isEmpty(sortType)) {
      url = `customer/search?page=${page}&key=${keySearchCustomer}&sorts=&merchantId=${detail.merchantId}`;
    }
    url = encodeURI(url);
    dispatch(getCustomer(url, token));
  };

  const exportCustomer = (exportType) => {
    let url = `customer/export?page=${pageCustomer}&key=${keySearchCustomer}&sorts={"${sortTypeCustomer}":"${sortCustomer}"}&merchantId=${detail.merchantId}&type=${exportType}`;
    if (isEmpty(sortCustomer) || isEmpty(sortTypeCustomer)) {
      url = `customer/export?page=${pageCustomer}&key=${keySearchCustomer}&sorts=&merchantId=${detail.merchantId}}&type=${exportType}`;
    }
    url = encodeURI(url);
    dispatch(exportRetailer(url, token));
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
    await dispatch(sort_orders({ type: sortType }));
    await getOrdersData(pageOrders, sort, sortType);
  };

  const changeSortInventory = async (sort, sortType) => {
    await setSortInventory(sort);
    await setSortTypeInventory(sortType);
    await dispatch(sort_inventory({ type: sortType }));
    await getInventoryData(pageInventory, sort, sortType);
  };

  const changeSortCustomer = async (sort, sortType) => {
    await setSortCustomer(sort);
    await setSortTypeCustomer(sortType);
    await dispatch(sort_customer({ type: sortType }));
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
    await dispatch(reset_sort_orders());
    getOrdersData(1);
  };

  const searchInventory = async () => {
    await setPageInventory(1);
    await dispatch(reset_sort_inventory());
    getInventoryData(1);
  };

  const searchCustomer = async () => {
    await setPageCustomer(1);
    await dispatch(reset_sort_customer());
    getCustomerData(1);
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
            valueSort={directionSort_orders}
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
            valueSort={directionSort_inventory}
            onChangeSearch={onChangeSearchInventory}
            changeTab={changeTab}
            exportInventory={exportInventory}
            getInventoryData={()=>getInventoryData(pageInventory,sortInventory,sortTypeInventory)}
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
            valueSort={directionSort_customer}
            onChangeSearch={onChangeSearchCustomer}
            exportCustomer={exportCustomer}
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
            {/* <Button className="btn btn_cancel" onClick={() => history.goBack()}>
              Back
            </Button> */}
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
