import React from "react";
import ReactTable from "react-table";
import columns from "./columns";
import Search from "@/components/Search";
import Pagination from "@/components/Pagination";
import Loading from "@/components/Loading";
import PopupExport from "@/components/PopupExport";
import InventoryDetail from "../InventoryDetail";
import { ButtonReport } from "../Report/widget";
import { useSelector, useDispatch } from "react-redux";
import {
  getInventoryDetail,
  setVisibleInventoryDetail,
  closeExport,
} from "@/actions/retailerActions";

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
  exportInventory,
}) => {
  const dispatch = useDispatch();

  const {
    inventory,
    inventoryPages,
    loading,
    loadingDetail,
    isVisibleInventoryDetail,
    typeSort_inventory,
    linkExport,
  } = useSelector((state) => state.retailer);

  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  const [isVisibleExport, setVisibileExport] = React.useState(false);

  const onClickSort = (status, sortType) => {
    changeSortInventory(status, sortType);
  };

  const onRowClick = (state, rowInfo, column, instance) => {
    return {
      onClick: (e) => {
        if (rowInfo) {
          const { productId } = rowInfo.original;
          const url = `product/${productId}`;
          dispatch(getInventoryDetail(url, token, showDetail));
        }
      },
    };
  };

  const showDetail = () => {
    dispatch(setVisibleInventoryDetail(true));
  };

  const onCloseExport = () => {
    setVisibileExport(false);
    dispatch(closeExport());
  };

  const onClickExport = (reportType) => {
    setVisibileExport(true);
    exportInventory(reportType.toString().toLowerCase());
  };

  if (isVisibleInventoryDetail) {
    return (
      <InventoryDetail
        onBack={() => dispatch(setVisibleInventoryDetail(false))}
      />
    );
  }

  return (
    <>
      <>
        <div className="info_merchant_title">Inventory</div>
        <div className="info_merchant_title" style={{ marginTop: -3 }}>
          <div style={{ marginTop: 15 }}>
            <Search
              value={valueSearch}
              onChange={onChangeSearch}
              onSubmit={searchInventory}
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
            data={inventory}
            minRows={1}
            noDataText="NO DATA!"
            NoDataComponent={() => (
              <div className="retailer_nodata">NO DATA!</div>
            )}
            LoadingComponent={() => loading && <Loading />}
            loading={loading}
            columns={columns(valueSort, onClickSort, typeSort_inventory)}
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
        {loadingDetail && <Loading />}
      </>
      <PopupExport
        isVisible={isVisibleExport}
        linkExport={linkExport}
        closeExport={onCloseExport}
      />
    </>
  );
};

export default Index;
