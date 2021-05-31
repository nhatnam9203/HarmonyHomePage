import React from "react";
import Fade from "react-reveal/Fade";
import ReactTable from "react-table";
import columns from "./columns";
import Search from "@/components/Search";
import Pagination from "@/components/Pagination";
import Loading from "@/components/Loading";
import { useSelector } from "react-redux";

import "react-table/react-table.css";
import "../Info.scss";

const Index = ({
  pageInventory = 1,
  changePageInventory = () => {},
  valueSearch,
  onChangeSearch,
  searchInventory,
  valueSort,
  changeSortInventory,
}) => {
  const { inventory, inventoryPages, loading } = useSelector(
    (state) => state.retailer
  );

  const onClickSort = (status, sortType) => {
    changeSortInventory(status, sortType);
  };

  return (
    <Fade>
      <div className="info_merchant_title">
        Inventory
        <Search
          value={valueSearch}
          onChange={onChangeSearch}
          onSubmit={searchInventory}
        />
      </div>
      <div className="table-container">
        <ReactTable
          manual
          sortable={false}
          data={inventory}
          minRows={1}
          noDataText="NO DATA!"
          LoadingComponent={() =>
            loading && (
              <div style={{ marginTop: 100 }}>
                <Loading />
              </div>
            )
          }
          NoDataComponent={() => (
            <div className="retailer_nodata">NO DATA!</div>
          )}
          loading={loading}
          columns={columns(valueSort, onClickSort)}
          PaginationComponent={() => <div />}
        />
        <Pagination
          activePage={pageInventory}
          handlePageChange={changePageInventory}
          totalItem={Math.ceil(inventoryPages / 2)}
        />
      </div>
    </Fade>
  );
};

export default Index;
