import React from "react";
import Fade from "react-reveal/Fade";
import ReactTable from "react-table";
import columns from "./columns";
import Search from "@/components/Search";
import Pagination from "@/components/Pagination";
import Loading from "@/components/Loading";
import InventoryDetail from "../InventoryDetail";
import { useSelector, useDispatch } from "react-redux";
import { getInventoryDetail } from "@/actions/retailerActions";

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
  const dispatch = useDispatch();

  const [isDetail, setVisibileDetail] = React.useState(false);

  const { inventory, inventoryPages, loading, loadingDetail } = useSelector(
    (state) => state.retailer
  );

  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  const onClickSort = (status, sortType) => {
    changeSortInventory(status, sortType);
  };

  const onRowClick = (state, rowInfo, column, instance) => {
    return {
      onClick: (e) => {
        const { productId } = rowInfo.original;
        const url = `product/${productId}`;
        dispatch(getInventoryDetail(url, token, showDetail));
      },
    };
  };

  const showDetail = () => {
    setVisibileDetail(true);
  };

  if (isDetail) {
    return <InventoryDetail onBack={() => setVisibileDetail(false)} />;
  }

  return (
    <div style={{ position: "relative" }}>
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
            NoDataComponent={() => (
              <div className="retailer_nodata">NO DATA!</div>
            )}
            LoadingComponent={() => loading && <Loading />}
            loading={loading}
            columns={columns(valueSort, onClickSort)}
            PaginationComponent={() => <div />}
            getTdProps={onRowClick}
          />
          {inventory.length > 0 && (
            <Pagination
              activePage={pageInventory}
              handlePageChange={changePageInventory}
              totalItem={Math.ceil(inventoryPages / 2)}
            />
          )}
        </div>
      </Fade>
      {loadingDetail && <Loading />}
    </div>
  );
};

export default Index;
