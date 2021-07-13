import React from "react";
import Fade from "react-reveal/Fade";
import ReactTable from "react-table";
import columns from "./columns";
import Search from "@/components/Search";
import Pagination from "@/components/Pagination";
import { useSelector, useDispatch } from "react-redux";
import Loading from "@/components/Loading";
import OrderDetail from "../OrderDetail";
import {
  getOrderDetail,
  setVisibleOrderDetail,
} from "@/actions/retailerActions";

import "react-table/react-table.css";
import "../Info.scss";

const Index = ({
  pageOrders = 1,
  changePageOrders = () => {},
  valueSearch,
  onChangeSearch,
  searchOrder,
  valueSort,
  changeSortOrders,
}) => {
  const dispatch = useDispatch();

  const {
    orders,
    orderPages,
    loading,
    loadingDetail,
    isVisibleOrderDetail,
    typeSort_orders,
  } = useSelector((state) => state.retailer);

  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  const onClickSort = (status, sortType) => {
    changeSortOrders(status, sortType);
  };

  const onRowClick = (state, rowInfo, column, instance) => {
    return {
      onClick: (e) => {
        if (rowInfo) {
          const { appointmentId } = rowInfo.original;
          const url = `retailer/appointment/${appointmentId}`;
          dispatch(getOrderDetail(url, token, showDetail));
        }
      },
    };
  };

  const showDetail = () => {
    dispatch(setVisibleOrderDetail(true));
  };

  if (isVisibleOrderDetail) {
    return (
      <OrderDetail onBack={() => dispatch(setVisibleOrderDetail(false))} />
    );
  }

  return (
    <div style={{ position: "relative" }}>
      <Fade>
        <div className="info_merchant_title">
          Orders
          <Search
            value={valueSearch}
            onChange={onChangeSearch}
            onSubmit={searchOrder}
          />
        </div>
        <div className="table-container">
          <ReactTable
            className="table_order"
            manual
            sortable={false}
            data={orders}
            minRows={1}
            noDataText="NO DATA!"
            NoDataComponent={() => (
              <div className="retailer_nodata">NO DATA!</div>
            )}
            LoadingComponent={() => loading && <Loading />}
            loading={loading}
            columns={columns(valueSort, onClickSort, typeSort_orders)}
            PaginationComponent={() => <div />}
            getTdProps={onRowClick}
          />

          {orders.length > 0 && (
            <Pagination
              activePage={pageOrders}
              handlePageChange={changePageOrders}
              totalItem={Math.ceil(orderPages / 2)}
            />
          )}
        </div>
      </Fade>
      {loadingDetail && <Loading />}
    </div>
  );
};

export default Index;
