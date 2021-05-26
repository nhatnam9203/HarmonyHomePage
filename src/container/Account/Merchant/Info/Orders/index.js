import React from "react";
import Fade from "react-reveal/Fade";
import ReactTable from "react-table";
import columns from "./columns";
import Search from "../../../../../components/Search";
import Pagination from "../../../../../components/Pagination";
import { useSelector } from "react-redux";

import "react-table/react-table.css";
import "../Info.scss";

const Index = ({
  pageOrders = 1,
  changePageOrders = () => {},
  valueSearch,
  onChangeSearch,
  searchOrder,
}) => {
  const { orders, orderPages } = useSelector((state) => state.retailer);

  return (
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
          manual
          sortable={false}
          data={orders}
          minRows={1}
          noDataText="NO DATA!"
          NoDataComponent={() => <div />}
          loading={false}
          columns={columns}
          PaginationComponent={() => <div />}
        />
        <Pagination
          activePage={pageOrders}
          handlePageChange={changePageOrders}
          totalItem={Math.ceil(orderPages / 2)}
        />
      </div>
    </Fade>
  );
};

export default Index;
