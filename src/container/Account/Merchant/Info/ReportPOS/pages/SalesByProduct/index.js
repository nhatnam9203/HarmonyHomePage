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
  getSalesByProduct,
  sort_sales_by_product_pos
} from "@/actions/reportPosActions";

import { useSelector, useDispatch } from "react-redux";
import PopupExport from "@/components/PopupExport";
import { convertDateData, FormatPrice, handleChange } from "@/util";
import InputSelect from "@/components/InputSelect";
import { useForm } from "react-hook-form";
import ProductStatistic from "../../subPages/ProductStatistic";
import { isEmpty } from "lodash";

import "react-table/react-table.css";
import "../style.scss";

const filterList = [
  { label: "Top 5 products", value: "top5" },
  { label: "Top 10 products", value: "top10" },
  { label: "All products", value: "all" },
];

const Index = ({ onBack }) => {
  const dispatch = useDispatch();
  const [valueDate, setValueDate] = React.useState("This Week");
  const [isVisibleExport, setVisibileExport] = React.useState(false);

  const [filterListState, setFilterListState] = React.useState(filterList);



  const [isDetail, setDetail] = React.useState(false);
  const [idDetail, setIdDetail] = React.useState("");
  const [dataDetail, setDataDetail] = React.useState([]);

  const [idFilter, setIdFilter] = React.useState("top5");
  const [dataFilter, setDataFilter] = React.useState([]);


  const {
    loading,
    linkExport,
  } = useSelector((state) => state.retailer);

  const {
    directionSort_sales_by_product,
    sales_by_product,
    typeSort_sales_by_product,
  } = useSelector((state) => state.reportPos);

  const {
    detail: { merchantId },
  } = useSelector((state) => state.merchantDetail);
  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  const form = useForm({});

  React.useEffect(() => {
    getData(convertDateData(valueDate));
  }, []);


  // React.useEffect(() => {
  //   let tempArr = [];
  //   if (sales_by_product.length > 0) {
  //     tempArr = sales_by_product.map((obj) => ({
  //       label: obj?.name,
  //       value: obj?.productId
  //     }));
  //     setFilterListState([
  //       ...filterList,
  //       ...tempArr,
  //     ])
  //   }
  // }, [sales_by_product]);

  const getData = (quickFilter = "", start = "", end = "") => {
    const filterType = form.getValues("filterType");
    let url = `product/report/saleByProduct?quickFilter=${quickFilter}&timeStart=${start}&timeEnd=${end}&product=${filterType}&merchantId=${merchantId}`;
    url = encodeURI(url);
    dispatch(getSalesByProduct(url, token));
  };

  const exportData = (quickFilter = "", start = "", end = "") => {
    const filterType = form.getValues("filterType");
    let url = `product/report/saleByProduct/export?quickFilter=${quickFilter}&timeStart=${start}&timeEnd=${end}&product=${filterType}&merchantId=${merchantId}`;
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
    dispatch(sort_sales_by_product_pos({ type }));
  };

  const onRowClick = (state, rowInfo, column, instance) => {
    return {
      onClick: (e) => {
        if (rowInfo) {
          if (!rowInfo?.original?.total_quantity) {
            const { details, productId } = rowInfo?.original;
            onFilter(details, productId);
          }
        }
      },
    };
  };

  const sum = (data) => {
    return {
      total_quantity: handleChange("quantity", data),
      total_totalSales: handleChange("totalSales", data),
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
    })));

    result = [
      ...result,
      sum(result)
    ];

    dispatch({
      type: "SET_PRODUCT_STATISTIC",
      payload: result
    });
  }

  const onChildFilter = (generalId) => {
    setIdDetail(generalId);

    const giftCard = sales_by_product.find(obj => obj?.productId == generalId);

    let result = [];

    result = giftCard?.details?.map((obj => ({
      ...obj,
      avgPrice: FormatPrice(obj.avgPrice),
      totalSales: FormatPrice(obj.totalSales),
    })));


    result = [
      ...result,
      sum(result)
    ];

    dispatch({
      type: "SET_PRODUCT_STATISTIC",
      payload: result
    });
  }

  const handleSelectFilter = (value) => {
    if (value == "all" || value == "top5" || value == "top10") {
      onClickShowReport();
      setIdFilter(null);
    } else {
      setIdFilter(value);
      const tempList = sales_by_product.filter(obj => obj.productId == value);
      setDataFilter(tempList);
    }
  }


  if (isDetail) {
    return (
      <ProductStatistic
        parentList={sales_by_product}
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
        Sales by Product
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
            data={filterListState}
            form={form}
            defaultValue="top5"
            label=""
            name="filterType"
            width={"12rem"}
            height={"2.57rem"}
            // onChange={value => handleSelectFilter(value)}
          />
        </div>
      </div>

      <div className="table-container">
        <ReactTable
          manual
          sortable={false}
          data={sales_by_product}
          minRows={1}
          noDataText="NO DATA!"
          NoDataComponent={() => (
            <div className="retailer_nodata">NO DATA!</div>
          )}
          LoadingComponent={() => loading && <Loading />}
          loading={loading}
          columns={columns(
            directionSort_sales_by_product,
            onClickSort,
            typeSort_sales_by_product
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
