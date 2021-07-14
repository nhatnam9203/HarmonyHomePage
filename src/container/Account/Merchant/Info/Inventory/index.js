import React from "react";
import Fade from "react-reveal/Fade";
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

  const onClickShowReport = () => {
    // if (
    //   valueDate === "Today" ||
    //   valueDate === "Yesterday" ||
    //   valueDate === "This Week" ||
    //   valueDate === "Last Week" ||
    //   valueDate === "This Month" ||
    //   valueDate === "Last Month"
    // ) {
    //   getData(convertDateData(valueDate));
    // } else {
    //   let temps = valueDate.toString().split(" - ");
    //   let start = temps[0],
    //     end = temps[1];
    //   try {
    //     getData("custom", start, end);
    //   } catch (error) {
    //     alert(error);
    //   }
    // }
  };

  const onClickExport = (reportType) => {
    setVisibileExport(true);
    // if (
    //   valueDate === "Today" ||
    //   valueDate === "Yesterday" ||
    //   valueDate === "This Week" ||
    //   valueDate === "Last Week" ||
    //   valueDate === "This Month" ||
    //   valueDate === "Last Month"
    // ) {
    //   exportData(
    //     convertDateData(valueDate),
    //     "",
    //     "",
    //     reportType.toString().toLowerCase()
    //   );
    // } else {
    //   let temps = valueDate.toString().split(" - ");
    //   let start = temps[0],
    //     end = temps[1];
    //   try {
    //     exportData("custom", start, end, reportType.toString().toLowerCase());
    //   } catch (error) {
    //     alert(error);
    //   }
    // }
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
          <ButtonReport
            onClickShowReport={onClickShowReport}
            onClickExport={onClickExport}
            isNotShowReport
          />
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
        </Fade>
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
