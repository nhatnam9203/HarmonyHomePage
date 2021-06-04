import React from "react";
import { SelectDate, ButtonReport } from "../../widget";
import columns from "./column";
import ReactTable from "react-table";
import Loading from "@/components/Loading";
import { getOverall } from "@/actions/retailerActions";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "lodash";
import "react-table/react-table.css";
import "../style.scss";

const Overall = () => {
  const dispatch = useDispatch();
  const [valueDate, setValueDate] = React.useState("This Week");
  const { loading, reportOverall, summaryOverall } = useSelector(
    (state) => state.retailer
  );
  const {
    detail: { merchantId },
  } = useSelector((state) => state.merchantDetail);
  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let url = `retailer/Appointment/report/sale/overall?quickFilter=lastMonth&timeStart=&timeEnd=&merchantId=${merchantId}`;
    url = encodeURI(url);
    dispatch(getOverall(url, token));
  };

  const onChangeDate = (date) => {
    setValueDate(date);
  };

  const updateValueCustom = (start, end) => {
    setValueDate(`${start} - ${end}`);
  };

  const onClickShowReport = () => {};

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
          columns={columns()}
          PaginationComponent={() => <div />}
        />
      </div>
    </>
  );
};

export default Overall;
