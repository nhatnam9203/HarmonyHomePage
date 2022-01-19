import React from "react";
import { SelectDate, ButtonReport } from "../../widget";
import columns from "./column";
import ReactTable from "react-table";
import { Button } from "react-bootstrap";
import Loading from "@/components/Loading";
import PopupExport from "@/components/PopupExport";
import Pagination from "@/components/PaginationPOS";
import Search from "@/components/Search";
import {
  exportRetailer,
  closeExport,
  resetSortStaff,
} from "@/actions/retailerActions";

import { getStaffReport, sort_staff_report, } from "@/actions/reportPosActions";

import { useSelector, useDispatch } from "react-redux";
import { convertDateData } from "@/util";
import "react-table/react-table.css";
import "../style.scss";

const Index = ({ onBack }) => {
  const dispatch = useDispatch();
  const [valueDate, setValueDate] = React.useState("This Week");
  const [isVisibleExport, setVisibileExport] = React.useState(false);

  const [page, setPage] = React.useState(1);

  const {
    loading,
    linkExport,
  } = useSelector((state) => state.retailer);

  const {
    staff_report,
    staff_report_pages,
    directionSort_staff_report,
    typeSort_staff_report,
  } = useSelector((state) => state.reportPos);

  console.log({ staff_report_pages })


  const {
    detail: { merchantId },
  } = useSelector((state) => state.merchantDetail);
  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  React.useEffect(() => {
    getData(convertDateData(valueDate), "", "", page);
  }, []);

  const getData = (
    quickFilter = "",
    start = "",
    end = "",
    pageStaff = 1,
    sortType,
    sort
  ) => {
    let url = `staff/salary?quickFilter=${quickFilter}&timeStart=${start}&timeEnd=${end}&page=${pageStaff}&merchantId=${merchantId}`;
    console.log({ url })
    url = encodeURI(url);
    dispatch(getStaffReport(url, token));
  };

  const exportData = (quickFilter = "", start = "", end = "", type = "") => {
    let url = `staff/salary/export?quickFilter=${quickFilter}&timeStart=${start}&timeEnd=${end}&merchantId=${merchantId}&type=${type}`;
    url = encodeURI(url);
    dispatch(exportRetailer(url, token));
  };

  const onChangeDate = (date) => {
    setValueDate(date);
  };

  const updateValueCustom = (start, end) => {
    setValueDate(`${start} - ${end}`);
  };

  const changePage = async (pageStaff) => {
    await setPage(pageStaff);
    onClickShowReport(pageStaff);
  };

  const onClickShowReport = (pageStaff = null) => {
    if (
      valueDate === "Today" ||
      valueDate === "Yesterday" ||
      valueDate === "This Week" ||
      valueDate === "Last Week" ||
      valueDate === "This Month" ||
      valueDate === "Last Month"
    ) {
      getData(convertDateData(valueDate), "", "", pageStaff ? pageStaff : page);
    } else {
      let temps = valueDate.toString().split(" - ");
      let start = temps[0],
        end = temps[1];
      try {
        getData("custom", start, end, pageStaff ? pageStaff : page);
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
    dispatch(sort_staff_report({ type }));
  };


  return (
    <>
      <div className="info_merchant_title">
        Staffs reports
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
        onClickShowReport={() => onClickShowReport(null)}
        onClickExport={onClickExport}
      />


      <div className="table-container">
        <ReactTable
          manual
          sortable={false}
          data={staff_report || []}
          minRows={1}
          noDataText="NO DATA!"
          NoDataComponent={() => (
            <div className="retailer_nodata">NO DATA!</div>
          )}
          LoadingComponent={() => loading && <Loading />}
          loading={loading}
          columns={columns(
            directionSort_staff_report,
            onClickSort,
            typeSort_staff_report
          )}
          PaginationComponent={() => <div />}
        />
      </div>

      {staff_report.length > 0 && (
        <Pagination
          activePage={page}
          handlePageChange={changePage}
          totalItem={staff_report_pages}
        />
      )}
      <PopupExport
        isVisible={isVisibleExport}
        linkExport={linkExport}
        closeExport={onCloseExport}
      />
    </>
  );
};

export default Index;
