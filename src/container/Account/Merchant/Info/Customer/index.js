import React from "react";
import Fade from "react-reveal/Fade";
import ReactTable from "react-table";
import columns from "./columns";
import Search from "@/components/Search";
import Pagination from "@/components/Pagination";
import Loading from "@/components/Loading";
import CustomerDetail from "../CustomerDetail";
import { useSelector, useDispatch } from "react-redux";
import {
  getCustomerDetail,
  getAppointmentCustomer,
  setVisibleCustomerDetail,
} from "@/actions/retailerActions";

import "react-table/react-table.css";
import "../Info.scss";

const Index = ({
  pageCustomer = 1,
  changePageCustomer = () => {},
  valueSearch,
  onChangeSearch,
  searchCustomer,
  valueSort,
  changeSortCustomer,
}) => {
  const dispatch = useDispatch();

  const {
    customer,
    customerPages,
    loading,
    loadingDetail,
    isVisibleCustomerDetail,
    typeSort_customer,
  } = useSelector((state) => state.retailer);

  const { detail } = useSelector((state) => state.merchantDetail);

  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  const onClickSort = (status, sortType) => {
    changeSortCustomer(status, sortType);
  };

  const onRowClick = (state, rowInfo, column, instance) => {
    return {
      onClick: (e) => {
        const { customerId } = rowInfo.original;
        const url = `customer/${customerId}?merchantId=${detail.merchantId}`;
        const subUrl = `retailer/appointment/getByCustomer/${customerId}?merchantId=${detail.merchantId}&page=1&key=`;
        dispatch(getAppointmentCustomer(subUrl, token));
        dispatch(getCustomerDetail(url, token, showDetail));
      },
    };
  };

  const showDetail = () => {
    dispatch(setVisibleCustomerDetail(true));
  };

  if (isVisibleCustomerDetail) {
    return (
      <CustomerDetail
        onBack={() => dispatch(setVisibleCustomerDetail(false))}
      />
    );
  }

  return (
    <div style={{ position: "relative" }}>
      <Fade>
        <div className="info_merchant_title">
          Customer
          <Search
            value={valueSearch}
            onChange={onChangeSearch}
            onSubmit={searchCustomer}
          />
        </div>
        <div className="table-container">
          <ReactTable
            manual
            sortable={false}
            data={customer}
            minRows={1}
            noDataText="NO DATA!"
            NoDataComponent={() => (
              <div className="retailer_nodata">NO DATA!</div>
            )}
            loading={loading}
            LoadingComponent={() => loading && <Loading />}
            columns={columns(valueSort, onClickSort, typeSort_customer)}
            PaginationComponent={() => <div />}
            getTdProps={onRowClick}
          />
          {customer.length > 0 && (
            <Pagination
              activePage={pageCustomer}
              handlePageChange={changePageCustomer}
              totalItem={Math.ceil(customerPages / 2)}
            />
          )}
        </div>
      </Fade>
      {loadingDetail && <Loading />}
    </div>
  );
};

export default Index;
