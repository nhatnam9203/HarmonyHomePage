import React from "react";
import { SelectDate, ButtonReport } from "../../widget";
import columns from "./column";
import ReactTable from "react-table";
import Loading from "@/components/Loading";
import { getOverall, sortOverAll } from "@/actions/retailerActions";
import { useSelector, useDispatch } from "react-redux";
import { convertDateData } from "../../../../../../../util";
import "react-table/react-table.css";
import "../style.scss";

const Overall = () => {
  const dispatch = useDispatch();
  const [valueDate, setValueDate] = React.useState("Last Month");
  const {
    loading,
    reportOverall,
    typeSortOverall,
    directionSortOverall,
  } = useSelector((state) => state.retailer);

  const {
    detail: { merchantId },
  } = useSelector((state) => state.merchantDetail);
  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  React.useEffect(() => {
    getData(convertDateData(valueDate));
  }, []);

  const getData = (quickFilter = "", start = "", end = "") => {
    let url = `retailer/Appointment/report/sale/overall?quickFilter=${quickFilter}&timeStart=${start}&timeEnd=${end}&merchantId=${merchantId}`;
    url = encodeURI(url);
    dispatch(getOverall(url, token));
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
        getData("", start, end);
      } catch (error) {
        alert(error);
      }
    }
  };

  const onClickExport = (reportType) => {
    switch (reportType) {
      case "PDF":
        break;

      case "Excel":
        break;

      default:
        break;
    }
  };

  const onClickSort = (direction, type) => {
    dispatch(sortOverAll({ type }));
  };

  return (
    <>
      <div className="info_merchant_title">Overall</div>
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
          data={reportOverall || []}
          minRows={1}
          noDataText="NO DATA!"
          NoDataComponent={() => (
            <div className="retailer_nodata">NO DATA!</div>
          )}
          LoadingComponent={() => loading && <Loading />}
          loading={loading}
          columns={columns(directionSortOverall, onClickSort)}
          PaginationComponent={() => <div />}
        />
      </div>
    </>
  );
};

export default Overall;
