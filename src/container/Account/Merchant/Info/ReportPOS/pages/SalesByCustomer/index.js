import React from "react";
import { SelectDate, ButtonReport } from "../../widget";
import columns from "./column";
import ReactTable from "react-table";
import Loading from "@/components/Loading";
import { Button } from "react-bootstrap";
import {
  sort_sales_by_customer,
  exportRetailer,
  closeExport,
} from "@/actions/retailerActions";
import {
  getSalesByCustomer,
} from "@/actions/reportPosActions"
import { useSelector, useDispatch } from "react-redux";
import PopupExport from "@/components/PopupExport";
import { convertDateData, handleChange, FormatPrice } from "@/util";
import CustomerStatistic from "../../subPages/CustomerStatistic";
import "react-table/react-table.css";
import "../style.scss";

const Index = ({ onBack }) => {
  const dispatch = useDispatch();
  const [valueDate, setValueDate] = React.useState("This Week");
  const [isVisibleExport, setVisibileExport] = React.useState(false);

  const [isDetail, setDetail] = React.useState(false);
  const [idDetail, setIdDetail] = React.useState("");
  const [dataDetail, setDataDetail] = React.useState([]);

  const {
    loading,
    directionSort_sales_by_customer,
    linkExport,
    sales_by_customer,
    typeSort_sales_by_customer,
  } = useSelector((state) => state.retailer);

  const {
    detail: { merchantId },
  } = useSelector((state) => state.merchantDetail);
  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  React.useEffect(() => {
    getData(convertDateData(valueDate));
  }, []);

  const getData = (quickFilter = "", start = "", end = "") => {
    let url = `appointment/report/customerSales?quickFilter=${quickFilter}&timeStart=${start}&timeEnd=${end}&merchantId=${merchantId}`;
    url = encodeURI(url);
    dispatch(getSalesByCustomer(url, token));
  };

  const exportData = (quickFilter = "", start = "", end = "", type = "") => {
    let url = `appointment/report/customerSales/export?quickFilter=${quickFilter}&timeStart=${start}&timeEnd=${end}&merchantId=${merchantId}`;
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
    dispatch(sort_sales_by_customer({ type }));
  };

  const onRowClick = (state, rowInfo, column, instance) => {
    return {
      onClick: (e) => {
        if (rowInfo) {
          if(!rowInfo?.original?.total_appointmentCount){
            const { details, customerId } = rowInfo?.original;
            onFilter(details, customerId);
          }
        }
      },
    };
  };

  const sum = (data) => {
    return     {
      total_payamount : handleChange("payamount",data),
      total_serviceCount : handleChange("serviceCount",data),
    }
  }

  const onFilter = (giftCardStatistics = [], giftCardGeneralId) => {
    setDataDetail(giftCardStatistics);
    setIdDetail(giftCardGeneralId);
    setDetail(true);
    let result = [];
    result = giftCardStatistics.map((obj => ({
      ...obj,
      payamount: FormatPrice(obj.payamount)
    })));

    result = [
      ...result,
      sum(result)
    ];

    dispatch({
      type: "SET_CUSTOMER_STATISTIC",
      payload: result
    });
  }

  const onChildFilter = (generalId) => {
    setIdDetail(generalId);
    const giftCard = sales_by_customer.find(obj => obj?.customerId == generalId);

    let result = [];

    result = giftCard?.details?.map((obj => ({
      ...obj,
      payamount: FormatPrice(obj.payamount)
    })));


    result = [
      ...result,
      sum(result)
    ];

    dispatch({
      type: "SET_CUSTOMER_STATISTIC",
      payload: result
    });
  }

  if(isDetail){
    return(
      <CustomerStatistic
      parentList={sales_by_customer}
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
        Sales by Customer
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
          data={sales_by_customer || []}
          minRows={1}
          noDataText="NO DATA!"
          NoDataComponent={() => (
            <div className="retailer_nodata">NO DATA!</div>
          )}
          LoadingComponent={() => loading && <Loading />}
          loading={loading}
          columns={columns(
            directionSort_sales_by_customer,
            onClickSort,
            typeSort_sales_by_customer
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
