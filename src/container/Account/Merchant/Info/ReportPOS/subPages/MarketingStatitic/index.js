import React from "react";
import { ButtonReport } from "../../widget";
import columns from "./column";
import ReactTable from "react-table";
import { Button } from "react-bootstrap";
import Loading from "@/components/Loading";
import {
  exportRetailer,
  closeExport,
} from "@/actions/retailerActions";

import {
  sort_marketing_statistic
} from "@/actions/reportPosActions";

import { useSelector, useDispatch } from "react-redux";
import PopupExport from "@/components/PopupExport";
import { convertDateData } from "@/util";
import InputSelect from "@/components/InputSelect";
import { useForm } from "react-hook-form";

import "react-table/react-table.css";
// import "../../style.scss";

const initialFilterList = [
  { label: "All services", value: "all" },
  { label: "Top 5 services", value: "top5" },
  { label: "Top 10 services", value: "top10" },
];

const Index = ({ onBack, parentList = [], defaultFilter = "", valueDate, onChildFilter }) => {
  const dispatch = useDispatch();
  const [isVisibleExport, setVisibileExport] = React.useState(false);

  const [filterList, setFilterList] = React.useState([initialFilterList]);


  const {
    loading,
    linkExport,
  } = useSelector((state) => state.retailer);

  const {
    directionSort_marketing_statistic,
    marketing_statistic,
    typeSort_marketing_statistic,
  } = useSelector((state) => state.reportPos);

  const {
    detail: { merchantId },
  } = useSelector((state) => state.merchantDetail);
  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  const form = useForm({});


  const exportData = (quickFilter = "", start = "", end = "", type) => {
    const filterType = form.getValues("filterType");
    let url = `overall/marketingEfficiency/export/${filterType}?quickFilter=${quickFilter}&timeStart=${start}&timeEnd=${end}&merchantId=${merchantId}&type=excel`;
    url = encodeURI(url);
    dispatch(exportRetailer(url, token));
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
    dispatch(sort_marketing_statistic({ type }));
  };

  React.useEffect(() => {
    const list = [
      ...parentList
    ].map((obj) => ({
      label: obj?.name,
      value: obj?.promotionId
    }));
    setFilterList(list);
  }, [parentList]);

  return (
    <>
      <div className="info_merchant_title">
        Marketing efficiency statistic
        <Button className="btn btn_cancel" onClick={onBack}>
          Back
        </Button>
      </div>
      <div style={{ position: "relative" }}>
        <ButtonReport
          onClickShowReport={(() => { })}
          onClickExport={onClickExport}
          renderShowReport={() => <div />}
        />
        <div style={{ position: "absolute", left: 0, top: 0 }}>
          <InputSelect
            data={filterList}
            form={form}
            defaultValue={defaultFilter}
            label=""
            name="filterType"
            width={"15rem"}
            height={"2.57rem"}
            onChange={(value) => {
              if(value){
                onChildFilter(value)
              }
            }}
          />
        </div>
      </div>

      <div className="table-container">
        <ReactTable
          manual
          sortable={false}
          data={marketing_statistic || []}
          minRows={1}
          noDataText="NO DATA!"
          NoDataComponent={() => (
            <div className="retailer_nodata">NO DATA!</div>
          )}
          LoadingComponent={() => loading && <Loading />}
          loading={loading}
          columns={columns(
            directionSort_marketing_statistic,
            onClickSort,
            typeSort_marketing_statistic
          )}
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
