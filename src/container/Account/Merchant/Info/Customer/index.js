import React from "react";
import ReactTable from "react-table";
import columns from "./columns";
import Search from "@/components/Search";
import Pagination from "@/components/Pagination";
import Loading from "@/components/Loading";
import PopupExport from "@/components/PopupExport";
import CustomerDetail from "../CustomerDetail";
import { ButtonReport } from "../Report/widget";
import { useSelector, useDispatch } from "react-redux";
import {
  getCustomerDetail,
  getAppointmentCustomer,
  setVisibleCustomerDetail,
  closeExport,
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
  exportCustomer,
}) => {
  const dispatch = useDispatch();

  const {
    customer,
    customerPages,
    loading,
    loadingDetail,
    isVisibleCustomerDetail,
    typeSort_customer,
    linkExport,
  } = useSelector((state) => state.retailer);

  const { detail } = useSelector((state) => state.merchantDetail);

  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  const [isVisibleExport, setVisibileExport] = React.useState(false);

  const onClickSort = (status, sortType) => {
    changeSortCustomer(status, sortType);
  };

  const onRowClick = (state, rowInfo, column, instance) => {
    return {
      onClick: (e) => {
        if (rowInfo) {
          const { customerId } = rowInfo.original;
          const url = `customer/${customerId}?merchantId=${detail.merchantId}`;
          const subUrl = `retailer/appointment/getByCustomer/${customerId}?merchantId=${detail.merchantId}&page=1&key=`;
          dispatch(getAppointmentCustomer(subUrl, token));
          dispatch(getCustomerDetail(url, token, showDetail));
        }
      },
    };
  };

  const showDetail = () => {
    dispatch(setVisibleCustomerDetail(true));
  };

  const onCloseExport = () => {
    setVisibileExport(false);
    dispatch(closeExport());
  };

  const onClickExport = (reportType) => {
    setVisibileExport(true);
    exportCustomer(reportType.toString().toLowerCase());
  };

  if (isVisibleCustomerDetail) {
    return (
      <CustomerDetail
        onBack={() => dispatch(setVisibleCustomerDetail(false))}
      />
    );
  }

  return (
    <>
      <div style={{ position: "relative" }}>
        <div className="info_merchant_title">Customer</div>

        <div className="info_merchant_title" style={{ marginTop: -3 }}>
          <div style={{ marginTop: 15 }}>
            <Search
              value={valueSearch}
              onChange={onChangeSearch}
              onSubmit={searchCustomer}
            />
          </div>
          <ButtonReport
            onClickShowReport={() => {}}
            onClickExport={onClickExport}
            isNotShowReport
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
        {loadingDetail && <Loading />}
      </div>
      <PopupExport
        isVisible={isVisibleExport}
        linkExport={linkExport}
        closeExport={onCloseExport}
      />
    </>
  );
};

export default Index;
