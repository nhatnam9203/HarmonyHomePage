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
  exportReport
} from "@/actions/retailerActions";

import { getStaffReport, sort_staff_logTime, getStaffLogTime } from "@/actions/reportPosActions";
import InputSelect from "@/components/InputSelect";

import { useSelector, useDispatch } from "react-redux";
import { convertDateData } from "@/util";
import { useForm } from "react-hook-form";
import { isEmpty } from "lodash";
import PopupConfirm from "@/components/PopupConfirm";

import "react-table/react-table.css";
import "../style.scss";

const filterList = [
  { label: "All type", value: "null" },
  { label: "Check In", value: "0" },
  { label: "Check Out", value: "1" },
];

const Index = ({ onBack }) => {
  const dispatch = useDispatch();
  const [valueDate, setValueDate] = React.useState("This Week");
  const [isVisibleExport, setVisibileExport] = React.useState(false);
  const [valueSearch, setValueSearch] = React.useState("");

  const [page, setPage] = React.useState(1);

  const [isModalDelete, setVisibleDelete] = React.useState(false);
  const [merchantStaffLogtimeId, setMerchantStaffLogtimeId] = React.useState(null);

  const form = useForm({});

  const {
    loading,
    linkExport,
  } = useSelector((state) => state.retailer);

  const {
    staff_logTime,
    staff_logTime_pages,
    directionSort_staff_logTime,
    typeSort_staff_logTime,
  } = useSelector((state) => state.reportPos);

  const onChangeSearch = (e) => {
    setValueSearch(e.target.value);
  }

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

    const filterType = form.getValues("filterType");
    let url = filterType == "null" ?
      `MerchantStaffLogtime/?page=${pageStaff}&quickFilter=${quickFilter}&timeStart=${start}&timeEnd=${end}&merchantId=${merchantId}` :
      `MerchantStaffLogtime/?page=${pageStaff}&quickFilter=${quickFilter}&timeStart=${start}&timeEnd=${end}&type=${filterType}&merchantId=${merchantId}`
    url = encodeURI(url);
    dispatch(getStaffLogTime(url, token));
  };

  const exportData = (quickFilter = "", start = "", end = "", type = "") => {
    const filterType = form.getValues("filterType");
    let url = filterType == "null" ?
      `MerchantStaffLogtime/export?exportType=${type}&quickFilter=${quickFilter}&timeStart=${start}&timeEnd=${end}&merchantId=${merchantId}` :
      `MerchantStaffLogtime/export?exportTyper=${type}&quickFilter=${quickFilter}&timeStart=${start}&timeEnd=${end}&type=${filterType}&merchantId=${merchantId}`
    url = encodeURI(url);
    dispatch(exportReport(url, token));
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
    dispatch(sort_staff_logTime({ type }));
  };

  const editLogTime = () =>{

  };

  const onDelete = () =>{

  };

  const showModalDelete = (id) =>{
    setMerchantStaffLogtimeId(id);
    setVisibleDelete(true);
  }

  return (
    <>
      <div className="info_merchant_title">
        Staffs reports
        <Button className="btn btn_cancel" onClick={onBack}>
          Back
        </Button>
      </div>

      <Search
        value={valueSearch}
        onChange={onChangeSearch}
        onSubmit={() => {
          setPage(1);
          onClickShowReport(1)
        }}
      />

      <SelectDate
        value={valueDate}
        onChangeDate={onChangeDate}
        updateValueCustom={updateValueCustom}
      />

      <div style={{ position: "relative" }}>
        <ButtonReport
          onClickShowReport={() => onClickShowReport(null)}
          onClickExport={onClickExport}
          isShowCSV={false}
        />
        <div style={{ position: "absolute", left: "9.6rem", top: 0 }}>
          <InputSelect
            data={filterList}
            form={form}
            defaultValue="null"
            label=""
            name="filterType"
            width={"12rem"}
            height={"2.57rem"}
          />
        </div>
      </div>


      <div className="table-container">
        <ReactTable
          manual
          sortable={false}
          data={staff_logTime || []}
          minRows={1}
          noDataText="NO DATA!"
          NoDataComponent={() => (
            <div className="retailer_nodata">NO DATA!</div>
          )}
          LoadingComponent={() => loading && <Loading />}
          loading={loading}
          columns={columns(
            directionSort_staff_logTime,
            onClickSort,
            typeSort_staff_logTime,
            showModalDelete,
            editLogTime
          )}
          PaginationComponent={() => <div />}
        />
      </div>

      {staff_logTime.length > 0 && (
        <Pagination
          activePage={page}
          handlePageChange={changePage}
          totalItem={staff_logTime_pages}
        />
      )}
      <PopupExport
        isVisible={isVisibleExport}
        linkExport={linkExport}
        closeExport={onCloseExport}
      />
      <PopupConfirm
        isVisible={isModalDelete}
        close={() => setVisibleDelete(false)}
        onDelete={onDelete}
        title="Are you sure you want to Delete this session?"
      />
    </>
  );
};

export default Index;
