import React from "react";
import { SelectDate, ButtonReport } from "../../widget";
import columns from "./column";
import { Button } from "react-bootstrap";
import ReactTable from "react-table";
import Loading from "@/components/Loading";
import PopupExport from "@/components/PopupExport";
import {
  sort_top_category,
  exportRetailer,
  closeExport,
  getTopCategory,
} from "@/actions/retailerActions";
import { useSelector, useDispatch } from "react-redux";
import { convertDateData } from "@/util";
import "react-table/react-table.css";
import "../style.scss";

const Index = ({ onBack }) => {
  const dispatch = useDispatch();
  const [valueDate, setValueDate] = React.useState("Last Month");
  const [isVisibleExport, setVisibileExport] = React.useState(false);

  const {
    loading,
    directionSort_top_category,
    linkExport,
    top_category,
  } = useSelector((state) => state.retailer);

  const {
    detail: { merchantId },
  } = useSelector((state) => state.merchantDetail);
  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  React.useEffect(() => {
    getData(convertDateData(valueDate));
  }, []);

  const getData = (quickFilter = "", start = "", end = "") => {
    let url = `product/report/saleByCategory?quickFilter=${quickFilter}&timeStart=${start}&timeEnd=${end}&category=top&merchantId=${merchantId}`;
    url = encodeURI(url);
    dispatch(getTopCategory(url, token));
  };

  const exportData = (quickFilter = "", start = "", end = "", type = "") => {
    let url = `product/report/saleByCategory/export?quickFilter=${quickFilter}&timeStart=${start}&timeEnd=${end}&category=top&merchantId=${merchantId}&type=${type}`;
    url = encodeURI(url);
    dispatch(exportRetailer(url, token));
  };

  const onChangeDate = (date) => {
    setValueDate(date);
  };

  const updateValueCustom = (start, end) => {
    setValueDate(`${start} - ${end}`);
  };

  const onClickShowReport = () => {
    if (
      valueDate === "Today" ||
      valueDate === "Yesterday" ||
      valueDate === "This Week" ||
      valueDate === "Last Week" ||
      valueDate === "This Month" ||
      valueDate === "Last Month"
    ) {
      getData(convertDateData(valueDate));
    } else {
      let temps = valueDate.toString().split(" - ");
      let start = temps[0],
        end = temps[1];
      try {
        getData("custom", start, end);
      } catch (error) {
        alert(error);
      }
    }
  };

  const onClickExport = (reportType) => {
    setVisibileExport(true);
    if (
      valueDate === "Today" ||
      valueDate === "Yesterday" ||
      valueDate === "This Week" ||
      valueDate === "Last Week" ||
      valueDate === "This Month" ||
      valueDate === "Last Month"
    ) {
      exportData(
        convertDateData(valueDate),
        "",
        "",
        reportType.toString().toLowerCase()
      );
    } else {
      let temps = valueDate.toString().split(" - ");
      let start = temps[0],
        end = temps[1];
      try {
        exportData("custom", start, end, reportType.toString().toLowerCase());
      } catch (error) {
        alert(error);
      }
    }
  };

  const onCloseExport = () => {
    setVisibileExport(false);
    dispatch(closeExport());
  };

  const onClickSort = (direction, type) => {
    dispatch(sort_top_category({ type }));
  };

  return (
    <>
      <div className="info_merchant_title">
        Top Categories
        <Button className="btn btn_cancel" onClick={onBack}>
          Back
        </Button>
      </div>
      <SelectDate
        value={valueDate}
        onChangeDate={onChangeDate}
        updateValueCustom={updateValueCustom}
      />
      <ButtonReport
        onClickShowReport={onClickShowReport}
        onClickExport={onClickExport}
      />
      <div className="table-container">
        <ReactTable
          manual
          sortable={false}
          data={top_category || []}
          minRows={1}
          noDataText="NO DATA!"
          NoDataComponent={() => (
            <div className="retailer_nodata">NO DATA!</div>
          )}
          LoadingComponent={() => loading && <Loading />}
          loading={loading}
          columns={columns(directionSort_top_category, onClickSort)}
          PaginationComponent={() => <div />}
        />
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
