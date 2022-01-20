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
  getSalesByGiftCard,
  sort_sales_by_giftCard,
} from "@/actions/reportPosActions";

import { useSelector, useDispatch } from "react-redux";
import PopupExport from "@/components/PopupExport";
import { convertDateData } from "@/util";
import InputSelect from "@/components/InputSelect";
import { useForm, useWatch } from "react-hook-form";

import "react-table/react-table.css";
import "../style.scss";

const initialFilter = [
  { label: "All", value: "0" },
];

const Index = ({ onBack }) => {
  const dispatch = useDispatch();
  const [valueDate, setValueDate] = React.useState("This Week");
  const [isVisibleExport, setVisibileExport] = React.useState(false);

  const [filterList, setFilterList] = React.useState(initialFilter);
  const [dataList, setDataList] = React.useState([]);

  const {
    loading,
    linkExport,
  } = useSelector((state) => state.retailer);

  const {
    directionSort_sales_by_giftCard,
    sales_by_giftCard,
    typeSort_sales_by_giftCard,
  } = useSelector((state) => state.reportPos);

  const {
    detail: { merchantId },
  } = useSelector((state) => state.merchantDetail);
  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  const form = useForm({
    defaultValues : {
      filterType : "0"
    }
  });

  const filterType = useWatch({
    control: form.control,
    name: "filterType"
  });

  React.useEffect(() => {
    if (filterType !== "0") {
      setDataList(sales_by_giftCard?.filter(obj => obj?.giftCardGeneralId == filterType))
    } else {
      setDataList(sales_by_giftCard)
    }
  }, [filterType,sales_by_giftCard]);

  React.useEffect(() => {
    getData(convertDateData(valueDate));
  }, []);

  React.useEffect(() => {
    if (sales_by_giftCard?.length > 1) {
      let tempListFilter = [
        ...sales_by_giftCard,
      ];

      tempListFilter?.pop();

      tempListFilter = tempListFilter.map(obj => ({
        label: obj?.type,
        value: obj?.giftCardGeneralId
      }));

      tempListFilter = [
        ...initialFilter,
        ...tempListFilter
      ];

      setFilterList(tempListFilter);
    }
  }, [sales_by_giftCard]);

  const getData = (quickFilter = "", start = "", end = "") => {
    const filterType = form.getValues("filterType");
    let url = `giftCard/reportSales?timeStart=${start}&timeEnd=${end}&quickFilter=${quickFilter}&giftCardGeneralId=${filterType}&merchantId=${merchantId}`;
    url = encodeURI(url);
    dispatch(getSalesByGiftCard(url, token));
  };

  const exportData = (quickFilter = "", start = "", end = "") => {
    const filterType = form.getValues("filterType");
    let url = `giftCard/reportSales/export?timeStart=${start}&timeEnd=${end}&quickFilter=${quickFilter}&giftCardGeneralId=${filterType}&merchantId=${merchantId}`;
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
    dispatch(sort_sales_by_giftCard({ type }));
  };

  return (
    <>
      <div className="info_merchant_title">
        Sales by gift card
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
            defaultValue="0"
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
          data={dataList || []}
          minRows={1}
          noDataText="NO DATA!"
          NoDataComponent={() => (
            <div className="retailer_nodata">NO DATA!</div>
          )}
          LoadingComponent={() => loading && <Loading />}
          loading={loading}
          columns={columns(
            directionSort_sales_by_giftCard,
            onClickSort,
            typeSort_sales_by_giftCard
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
