import React from "react";
import Fade from "react-reveal/Fade";
import ReactTable from "react-table";
import columns from "./columns";
import Search from "@/components/Search";
import Pagination from "@/components/Pagination";
import { useSelector } from "react-redux";
import Loading from "@/components/Loading";
import OrderDetail from "../OrderDetail";

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

  const [isDetail, setVisibileDetail] = React.useState(false);

  const onClickSort = (status, sortType) => {
    changeSortOrders(status, sortType);
  };

  const onRowClick = (state, rowInfo, column, instance) => {
    return {
      onClick: (e) => {
        setVisibileDetail(true);
      },
    };
  };

  if (isDetail) {
    return <OrderDetail onBack={() => setVisibileDetail(false)} />;
  }

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
          NoDataComponent={() => (
            <div className="retailer_nodata">NO DATA!</div>
          )}
          LoadingComponent={() => loading && <Loading />}
          loading={loading}
          columns={columns(valueSort, onClickSort)}
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
  );
};

export default Index;
