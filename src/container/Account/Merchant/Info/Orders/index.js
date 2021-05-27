import React from "react";
import Fade from "react-reveal/Fade";
import ReactTable from "react-table";
import columns from "./columns";
import Search from "../../../../../components/Search";
import Pagination from "../../../../../components/Pagination";
import { useSelector } from "react-redux";
import Loading from "../../../../../components/Loading";

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
  const { orders, orderPages, loading } = useSelector(
    (state) => state.retailer
  );

  const onClickSort = (status) => {
    changeSortOrders(status);
  };

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
          LoadingComponent={() =>
            loading && (
              <div style={{ marginTop: 100 }}>
                <Loading />
              </div>
            )
          }
          NoDataComponent={() => <div />}
          loading={loading}
          columns={columns(valueSort, onClickSort)}
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
