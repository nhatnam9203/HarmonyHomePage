import React from "react";
import { SelectDate, ButtonReport } from "../../widget";
import {
  exportRetailer,
  closeExport,
} from "@/actions/retailerActions";

import {
  sort_payment_method,
  getPaymentByMethod,
} from "@/actions/reportPosActions";

import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import PopupExport from "@/components/PopupExport";
import { convertDateData } from "@/util";
import Loading from "@/components/Loading";
import ReactTable from "react-table";
import columns from "./column";
import "react-table/react-table.css";
import "../style.scss";

const Index = ({ onBack }) => {
  const dispatch = useDispatch();
  const [valueDate, setValueDate] = React.useState("This Week");
  const [isVisibleExport, setVisibileExport] = React.useState(false);

  const {
    loading,
    linkExport,
  } = useSelector((state) => state.retailer);

  const {
    directionSort_payment_method,
    payment_method,
    summary_payment_method,
    typeSort_payment_method,
  } = useSelector((state) => state.reportPos);

  const {
    detail: { merchantId },
  } = useSelector((state) => state.merchantDetail);
  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  React.useEffect(() => {
    getData(convertDateData(valueDate));
  }, []);

  const getData = (quickFilter = "", start = "", end = "") => {

    let url = `overall/paymentMethod?quickFilter=${quickFilter}&timeStart=${start}&timeEnd=${end}&method=all&merchantId=${merchantId}`;
    url = encodeURI(url);
    dispatch(getPaymentByMethod(url, token));
  };


  const exportData = (quickFilter = "", start = "", end = "", type = "") => {
    let url = `overall/paymentMethod?quickFilter=${quickFilter}&timeStart=${start}&timeEnd=${end}&method=all&merchantId=${merchantId}`;
    url = encodeURI(url);
    dispatch(exportRetailer(url, token));
  };

  const onChangeDate = (date) => {
    setValueDate(date);
  };

  const updateValueCustom = (start, end) => {
    setValueDate(`${start} - ${end}`);
  };

  console.log({
    directionSort_payment_method,
    payment_method,
    summary_payment_method,
    typeSort_payment_method,
  })

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
    dispatch(sort_payment_method({ type }));
  };

  return (
    <>
      <div className="info_merchant_title">
        Sales by Payment method
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
      <div className="table-container" style={{ position: "relative" }}>
        <ReactTable
          manual
          sortable={false}
          data={payment_method || []}
          minRows={1}
          noDataText="NO DATA!"
          NoDataComponent={() => (
            <div className="retailer_nodata">NO DATA!</div>
          )}
          LoadingComponent={() => loading && <Loading />}
          loading={loading}
          columns={columns(
            directionSort_payment_method,
            onClickSort,
            typeSort_payment_method
          )}
          PaginationComponent={() => <div />}
        />
        {loading && <Loading />}
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
