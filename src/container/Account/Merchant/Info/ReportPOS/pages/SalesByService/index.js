import React from "react";
import { SelectDate, ButtonReport } from "../../widget";
import columns from "./column";
import ReactTable from "react-table";
import { Button } from "react-bootstrap";
import Loading from "@/components/Loading";
import {
  exportRetailer,
  closeExport,
} from "@/actions/retailerActions";

import {
  getSalesByService,
  sort_sales_by_service,
} from "@/actions/reportPosActions";

import { useSelector, useDispatch } from "react-redux";
import PopupExport from "@/components/PopupExport";
import { convertDateData, handleChange, FormatPrice } from "@/util";
import InputSelect from "@/components/InputSelect";
import { useForm } from "react-hook-form";
import ServiceStatistic from "../../subPages/ServiceStatistic";

import "react-table/react-table.css";
import "../style.scss";

const filterList = [
  { label: "All services", value: "all" },
  { label: "Top 5 services", value: "top5" },
  { label: "Top 10 services", value: "top10" },
];

const Index = ({ onBack }) => {
  const dispatch = useDispatch();
  const [valueDate, setValueDate] = React.useState("This Week");
  const [isVisibleExport, setVisibileExport] = React.useState(false);

  const [isDetail, setDetail] = React.useState(false);
  const [idDetail, setIdDetail] = React.useState("");
  const [dataDetail, setDataDetail] = React.useState([]);


  const {
    loading,
    linkExport,
  } = useSelector((state) => state.retailer);

  const {
    directionSort_sales_by_service,
    sales_by_service,
    typeSort_sales_by_service,
  } = useSelector((state) => state.reportPos);

  const {
    detail: { merchantId },
  } = useSelector((state) => state.merchantDetail);
  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  const form = useForm({});

  React.useEffect(() => {
    getData(convertDateData(valueDate));
  }, []);

  const getData = (quickFilter = "", start = "", end = "") => {
    const filterType = form.getValues("filterType");
    let url = `service/report/saleByService?quickFilter=${quickFilter}&timeStart=${start}&timeEnd=${end}&service=${filterType}&merchantId=${merchantId}`;
    url = encodeURI(url);
    dispatch(getSalesByService(url, token));
  };

  const exportData = (quickFilter = "", start = "", end = "") => {
    const filterType = form.getValues("filterType");
    let url = `service/report/saleByService/export?quickFilter=${quickFilter}&timeStart=${start}&timeEnd=${end}&service=${filterType}&merchantId=${merchantId}`;

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
    dispatch(sort_sales_by_service({ type }));
  };

  const onRowClick = (state, rowInfo, column, instance) => {
    return {
      onClick: (e) => {
        if (rowInfo) {
          if (!rowInfo?.original?.total_appointmentCount) {
            const { details, serviceId } = rowInfo?.original;
            onFilter(details, serviceId);
          }
        }
      },
    };
  };

  const sum = (data) => {
    return {
      total_quantity: handleChange("quantity", data),
      total_totalSales: handleChange("totalSales", data),
      total_totalDuration: handleChange("totalDuration", data),
      total_avgPrice: handleChange("avgPrice", data),
    }
  }

  const onFilter = (giftCardStatistics = [], giftCardGeneralId) => {
    setDataDetail(giftCardStatistics);
    setIdDetail(giftCardGeneralId);
    setDetail(true);
    let result = [];
    result = giftCardStatistics.map((obj => ({
      ...obj,
      avgPrice: FormatPrice(obj.avgPrice),
      totalSales: FormatPrice(obj.totalSales),
      totalDuration : FormatPrice(obj.totalDuration)  
    })));

    result = [
      ...result,
      sum(result)
    ];

    dispatch({
      type: "SET_SERVICE_STATISTIC",
      payload: result
    });
  }

  const onChildFilter = (generalId) => {
    setIdDetail(generalId);

    const giftCard = sales_by_service.find(obj => obj?.serviceId == generalId);

    let result = [];

    result = giftCard?.details?.map((obj => ({
      ...obj,
      avgPrice: FormatPrice(obj.avgPrice),
      totalSales: FormatPrice(obj.totalSales),
      totalDuration : FormatPrice(obj.totalDuration)  
    })));


    result = [
      ...result,
      sum(result)
    ];

    dispatch({
      type: "SET_SERVICE_STATISTIC",
      payload: result
    });
  }

  if (isDetail) {
    return (
      <ServiceStatistic
        parentList={sales_by_service}
        onBack={() => setDetail(false)}
        defaultFilter={idDetail}
        valueDate={valueDate}
        data={dataDetail}
        onChildFilter={onChildFilter}
      />
    )
  }

  return (
    <>
      <div className="info_merchant_title">
        Sales by Service
        <Button className="btn btn_cancel" onClick={onBack}>
          Back
        </Button>
      </div>
      <SelectDate
        value={valueDate}
        onChangeDate={onChangeDate}
        updateValueCustom={updateValueCustom}
      />
      <div style={{ position: "relative" }}>
        <ButtonReport
          onClickShowReport={onClickShowReport}
          onClickExport={onClickExport}
        />
        <div style={{ position: "absolute", left: "9.6rem", top: 0 }}>
          <InputSelect
            data={filterList}
            form={form}
            defaultValue="all"
            label=""
            name="filterType"
            width={"10rem"}
            height={"2.57rem"}
          />
        </div>
      </div>

      <div className="table-container">
        <ReactTable
          manual
          sortable={false}
          data={sales_by_service || []}
          minRows={1}
          noDataText="NO DATA!"
          NoDataComponent={() => (
            <div className="retailer_nodata">NO DATA!</div>
          )}
          LoadingComponent={() => loading && <Loading />}
          loading={loading}
          columns={columns(
            directionSort_sales_by_service,
            onClickSort,
            typeSort_sales_by_service
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
