import React from "react";
import ReactTable from "react-table";
import columns from "./columns";
import Search from "@/components/Search";
import Pagination from "@/components/Pagination";
import Loading from "@/components/Loading";
import PopupExport from "@/components/PopupExport";
import InventoryDetail from "../InventoryDetail";
import { ButtonReport } from "../Report/widget";
import InventoryEdit from "../InventoryEdit";
import { useSelector, useDispatch } from "react-redux";
import {
  getInventoryDetail,
  setVisibleInventoryDetail,
  closeExport,
  setVisibleInventoryEdit,
  getSubCategory,
  setVisibleInventoryAdd,
  getAttribute,
  setInventoryDetail,
} from "@/actions/retailerActions";
import PopupSelectExport from "./PopupSelectExport";

import "react-table/react-table.css";
import "../Info.scss";

const Index = ({
  pageInventory = 1,
  changePageInventory = () => { },
  valueSearch,
  onChangeSearch,
  searchInventory,
  valueSort,
  changeSortInventory,
  exportInventory,
  getInventoryData,
}) => {
  const dispatch = useDispatch();

  const {
    inventory,
    inventoryPages,
    loading,
    loadingDetail,
    isVisibleInventoryDetail,
    isVisibleInventoryEdit,
    typeSort_inventory,
    linkExport,
  } = useSelector((state) => state.retailer);

  const { detail } = useSelector((state) => state.merchantDetail);
  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  const [isVisibleExport, setVisibileExport] = React.useState(false);
  const [isConfirmExport, setConfirmExport] = React.useState(false);
  const [reportType, setReportType] = React.useState("");

  const onClickSort = (status, sortType) => {
    changeSortInventory(status, sortType);
  };

  const addProduct = () => {
    dispatch(setVisibleInventoryEdit(true));
    dispatch(setVisibleInventoryAdd(true));
    dispatch(setInventoryDetail({}));

    const urlSubCategory = `category/search?status=ACTIVE&merchantId=${detail.merchantId}`;
    dispatch(getSubCategory(urlSubCategory, token));
    dispatch(getAttribute(detail.merchantId));
  };

  const onRowClick = (state, rowInfo, column, instance) => {
    return {
      onClick: (e) => {
        if (rowInfo) {
          const { productId } = rowInfo.original;
          const url = `product/${productId}`;
          const urlSubCategory = `category/search?status=ACTIVE&merchantId=${detail.merchantId}`;
          dispatch(getInventoryDetail(url, token, showDetail));
          dispatch(getSubCategory(urlSubCategory, token));
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

  const onClickExport = (typeReport) => {
    setConfirmExport(true)
    setReportType(typeReport);
    // setVisibileExport(true);
    // exportInventory(reportType.toString().toLowerCase(), isNeedToOrder);
  };

  const onExport = (isNeedToOrder) => {
    setVisibileExport(true);
    exportInventory(reportType.toString().toLowerCase(), isNeedToOrder);
    setConfirmExport(false);
  }

  const backToInventory = () => {
    dispatch(setVisibleInventoryDetail(false));
    getInventoryData();
  }

  const backFromEdit = (type) => {
    if (type === "reset") {
      dispatch(setVisibleInventoryEdit(false));
      backToInventory();
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    } else {
      dispatch(setVisibleInventoryEdit(false))
    }
    dispatch(setVisibleInventoryAdd(false));
  }

  if (isVisibleInventoryEdit) {
    return (
      <InventoryEdit onBack={backFromEdit} />
    );
  }

  if (isVisibleInventoryDetail) {
    return (
      <InventoryDetail
        onBack={backToInventory}
      />
    );
  }

  return (
    <>
      <>
        <div className="info_merchant_title">
          Inventory
          <div
            onClick={addProduct}
            className="btn-new-product"
          >
            New product
          </div>
        </div>
        <div className="info_merchant_title" style={{ marginTop: -3 }}>
          <div style={{ marginTop: 15 }}>
            <Search
              value={valueSearch}
              onChange={onChangeSearch}
              onSubmit={searchInventory}
            />
          </div>
          <ButtonReport
            onClickShowReport={() => { }}
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
        {loadingDetail && <Loading isFullLoading={true} />}
      </>
      <PopupExport
        isVisible={isVisibleExport}
        linkExport={linkExport}
        closeExport={onCloseExport}
      />

      <PopupSelectExport
        isVisible={isConfirmExport}
        onExport={onExport}
        close={() => setConfirmExport(false)}
      />
    </>
  );
};

export default Index;
