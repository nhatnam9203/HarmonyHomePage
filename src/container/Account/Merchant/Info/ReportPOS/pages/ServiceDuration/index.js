import React from "react";
import { SelectDate, ButtonReport } from "../../widget";
import columns from "./column";
import ReactTable from "react-table";
import Loading from "@/components/Loading";
import { Button } from "react-bootstrap";
import {
  exportRetailer,
  closeExport,
} from "@/actions/retailerActions";

import {
  sort_service_duration,
  getServiceDuration,
  getStaffStatistic
} from "@/actions/reportPosActions";

import { useSelector, useDispatch } from "react-redux";
import PopupExport from "@/components/PopupExport";
import { convertDateData } from "@/util";
import StaffStatistic from "../../subPages/StaffStatistic";
import "react-table/react-table.css";
import "../style.scss";

const Index = ({ onBack }) => {
  const dispatch = useDispatch();
  const [valueDate, setValueDate] = React.useState("This Week");
  const [isVisibleExport, setVisibileExport] = React.useState(false);
  const [isDetail, setDetail] = React.useState(false);

  const [idDetail, setIdDetail] =  React.useState("");

  const {
    loading,
    linkExport,
  } = useSelector((state) => state.retailer);

  const {
    directionSort_service_duration,
    service_duration,
    typeSort_service_duration,
  } = useSelector((state) => state.reportPos);

  const {
    detail: { merchantId },
  } = useSelector((state) => state.merchantDetail);
  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  React.useEffect(() => {
    getData(convertDateData(valueDate));
  }, []);

  const getData = (quickFilter = "", start = "", end = "") => {
    let url = `staff/report/serviceduration?timeStart=${start}&timeEnd=${end}&quickFilter=${quickFilter}&page=1&merchantId=${merchantId}`;
    url = encodeURI(url);
    dispatch(getServiceDuration(url, token));
  };

  const exportData = (quickFilter = "", start = "", end = "", type = "") => {
    let url = `staff/report/serviceduration/export?timeStart=${start}&timeEnd=${end}&quickFilter=${quickFilter}&page=1&merchantId=${merchantId}`;
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
    dispatch(sort_service_duration({ type }));
  };

  const onRowClick = (state, rowInfo, column, instance) => {
    return {
      onClick: (e) => {
        if (rowInfo) {
          const { staffId } = rowInfo?.original;
          let quickFilter = "", start = "", end = "";

          if (
            valueDate === "Today" ||
            valueDate === "Yesterday" ||
            valueDate === "This Week" ||
            valueDate === "Last Week" ||
            valueDate === "This Month" ||
            valueDate === "Last Month"
          ) {
            quickFilter = convertDateData(valueDate);
          } else {
            let temps = valueDate.toString().split(" - ");
            start = temps[0];
            end = temps[1];
            quickFilter = "custom";
          }

          setIdDetail(staffId);
          let url = `staff/report/serviceduration/detail/${staffId}?timeStart=${start}&timeEnd=${end}&quickFilter=${quickFilter}&merchantId=${merchantId}`;
          dispatch(getStaffStatistic(url, token, callBack));

        }
      },
    };
  };

  const callBack = () => {
    setDetail(true);
  }


  if (isDetail) {
    return (
      <StaffStatistic
        parentList={service_duration}
        onBack={() => setDetail(false)}
        defaultFilter={idDetail}
        valueDate={valueDate}
      />
    )
  }


  return (
    <>
      <div className="info_merchant_title">
        Service duration
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
          data={service_duration || []}
          minRows={1}
          noDataText="NO DATA!"
          NoDataComponent={() => (
            <div className="retailer_nodata">NO DATA!</div>
          )}
          LoadingComponent={() => loading && <Loading />}
          loading={loading}
          columns={columns(
            directionSort_service_duration,
            onClickSort,
            typeSort_service_duration
          )}
          getTdProps={onRowClick}
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
