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
  getStaffStatistic,
  sort_service_statistic
} from "@/actions/reportPosActions";

import { useSelector, useDispatch } from "react-redux";
import PopupExport from "@/components/PopupExport";
import { convertDateData, handleChange } from "@/util";
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
    directionSort_service_statistic,
    service_statistic,
    typeSort_service_statistic,
  } = useSelector((state) => state.reportPos);

  console.log({ service_statistic })

  const {
    detail: { merchantId },
  } = useSelector((state) => state.merchantDetail);
  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  const form = useForm({});

  const getData = (quickFilter = "", start = "", end = "") => {
    const staffId = form.getValues("filterType");
    let url = `staff/report/serviceduration/detail/${staffId}?timeStart=${start}&timeEnd=${end}&quickFilter=${quickFilter}&merchantId=${merchantId}`;
    url = encodeURI(url);
    dispatch(getStaffStatistic(url, token));
  };

  const exportData = (quickFilter = "", start = "", end = "", type) => {
    const filterType = form.getValues("filterType");
    let url = `service/report/saleByService/export?quickFilter=${quickFilter}&timeStart=${start}&timeEnd=${end}&type=${type}&service=${filterType}&merchantId=${merchantId}`;
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
    dispatch(sort_service_statistic({ type }));
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


  React.useEffect(() => {
    const list = [
      ...parentList
    ].map((obj) => ({
      label: obj?.name,
      value: obj?.serviceId
    }));
    setFilterList(list);
  }, [parentList]);

  return (
    <>
      <div className="info_merchant_title">
        Service statistic
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
              onChildFilter(value)
            }}
          />
        </div>
      </div>

      <div className="table-container">
        <ReactTable
          manual
          sortable={false}
          data={service_statistic || []}
          minRows={1}
          noDataText="NO DATA!"
          NoDataComponent={() => (
            <div className="retailer_nodata">NO DATA!</div>
          )}
          LoadingComponent={() => loading && <Loading />}
          loading={loading}
          columns={columns(
            directionSort_service_statistic,
            onClickSort,
            typeSort_service_statistic
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
