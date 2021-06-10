import React from "react";
import { SelectDate, ButtonReport } from "../../widget";
import {
  sort_payment_method,
  exportRetailer,
  closeExport,
  getPaymentByMethod,
} from "@/actions/retailerActions";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import PopupExport from "@/components/PopupExport";
import { convertDateData } from "@/util";
import TablePayment from "./TablePayment";
import Loading from "@/components/Loading";
import "react-table/react-table.css";
import "../style.scss";

const Index = ({ onBack }) => {
  const dispatch = useDispatch();
  const [valueDate, setValueDate] = React.useState("Last Month");
  const [isVisibleExport, setVisibileExport] = React.useState(false);

  const {
    loading,
    directionSort_payment_method,
    linkExport,
    payment_method,
    summary_payment_method,
  } = useSelector((state) => state.retailer);

  const {
    detail: { merchantId },
  } = useSelector((state) => state.merchantDetail);
  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  React.useEffect(() => {
    getData(convertDateData(valueDate));
  }, []);

  const getData = (quickFilter = "", start = "", end = "") => {
    let url = `retailer/Appointment/report/sale/paymentMethod?quickFilter=${quickFilter}&timeStart=${start}&timeEnd=${end}&merchantId=${merchantId}`;
    url = encodeURI(url);
    dispatch(getPaymentByMethod(url, token));
  };

  const exportData = (quickFilter = "", start = "", end = "", type = "") => {
    let url = `retailer/Appointment/report/sale/paymentMethod/export?quickFilter=${quickFilter}&timeStart=${start}&timeEnd=${end}&merchantId=${merchantId}&type=${type}`;
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
    alert("chưa có api !!!!!!!!!!");
    return;
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
        <TablePayment
          data={payment_method}
          onClickSort={onClickSort}
          valueSort={directionSort_payment_method}
          summary={summary_payment_method}
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
