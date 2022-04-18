import React from "react";
import ReactTable from "react-table";
import columns from "./columns";
import Search from "@/components/Search";
import Pagination from "@/components/Pagination";
import { useSelector, useDispatch } from "react-redux";
import Loading from "@/components/Loading";
import OrderDetail from "../OrderDetail";
import {
  getOrderDetail,
  setVisibleOrderDetail,
} from "@/actions/retailerActions";
import { ButtonReport, SelectDate } from "../Report/widget";
import { useForm } from "react-hook-form";
import {
  exportRetailer,
  closeExport,
  exportReport
} from "@/actions/retailerActions";
import { convertDateData } from "@/util";
import InputSelect from "@/components/InputSelect";
import icon_filter from "@/assets/images/icon_filter.png";
import icon_close from "@/assets/images/icon_close.png";
import SlidingPane from "react-sliding-pane";
import { isEmpty } from "lodash";
import icon_closed from "../../../../../assets/images/icon_closed.png"
import "react-sliding-pane/dist/react-sliding-pane.css";

import "react-table/react-table.css";
import "../Info.scss";

export const PURCHASE_POINTS_STORE = "Store";
export const PURCHASE_POINTS_ORDER = "CallOrder";

export const PURCHASE_POINTS = [
  {
    label: "All Point",
    value: "all",
  },
  {
    label: "Store",
    value: PURCHASE_POINTS_STORE,
  },
  {
    label: "Website",
    value: "Website",
  },
  {
    label: "PhoneCall",
    value: PURCHASE_POINTS_ORDER,
  },
];

export const PAYMENTS = [
  {
    label: "All Payment",
    value: "all",
  },
  {
    label: "HarmonyPay",
    value: "HarmonyPay",
  },
  {
    label: "Gift Card",
    value: "Gift Card",
  },
  {
    label: "Credit Card",
    value: "Credit Card",
  },
  {
    label: "Cash",
    value: "Cash",
  },
  {
    label: "Other",
    value: "Other",
  },
];

export const ORDER_STATUS = [
  {
    label: "All Status",
    value: "all",
  },
  {
    label: "Canceled",
    value: "Canceled",
  },
  {
    label: "Complete",
    value: "Complete",
  },
  {
    label: "Pending",
    value: "Pending",
  },
  {
    label: "Processing",
    value: "Processing",
  },
  {
    label: "Shipped",
    value: "Shipped",
  },
  {
    label: "Returned",
    value: "Returned",
  },
];


const Index = ({
  pageOrders = 1,
  changePageOrders = () => { },
  valueSearch,
  onChangeSearch,
  searchOrder,
  valueSort,
  changeSortOrders,
  valueDate,
  setValueDate,
  getOrdersData,
  sortOrders,
  sortTypeOrders,
}) => {
  const dispatch = useDispatch();

  const {
    orders,
    orderPages,
    loading,
    loadingDetail,
    isVisibleOrderDetail,
    typeSort_orders,
  } = useSelector((state) => state.retailer);

  const {
    detail: { merchantId },
  } = useSelector((state) => state.merchantDetail);

  const [isVisibleExport, setVisibileExport] = React.useState(false);
  const [openPanel, setOpenPanel] = React.useState(false);

  const [status, setStatus] = React.useState("all");
  const [purchasePoint, setPurchasePoint] = React.useState("all");
  const [payment, setPayment] = React.useState("all");

  const form = useForm({});

  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  const onClickSort = (status, sortType) => {
    changeSortOrders(status, sortType);
  };

  const exportData = (quickFilter = "", start = "", end = "", type = "") => {
    const filterType = form.getValues("filterType");
    let url = `retailer/Appointment/export?quickFilter=${quickFilter}&timeStart=${start}&timeEnd=${end}&merchantId=${merchantId}&type=${type}`;
    url = encodeURI(url);
    dispatch(exportRetailer(url, token));
  };

  const onChangeDate = (date) => {
    setValueDate(date);
  };

  const updateValueCustom = (start, end) => {
    setValueDate(`${start} - ${end}`);
  };

  const onClickShowReport = (pageStaff = null) => {
    getOrdersData(pageStaff);
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

  const onRowClick = (state, rowInfo, column, instance) => {
    return {
      onClick: (e) => {
        if (rowInfo) {
          const { appointmentId } = rowInfo.original;
          const url = `retailer/appointment/${appointmentId}`;
          dispatch(getOrderDetail(url, token, showDetail));
        }
      },
    };
  };

  const showDetail = () => {
    dispatch(setVisibleOrderDetail(true));
  };


  const _openPanel = () => {
    setOpenPanel(true);

    setTimeout(() => {
      form.setValue("ORDER_STATUS", status);
      form.setValue("PURCHASE_POINTS", purchasePoint);
      form.setValue("PAYMENTS", payment);
      const panels = document.getElementsByClassName("some-custom-overlay-class");
      const panelsContent = document.getElementsByClassName("slide-pane__content");
      if (panels) {
        const panel = panels[0];
        panel.addEventListener("click", (e) => {
          const panelContent = panelsContent[0];
          if (panelContent && !panelContent?.contains(e.target)) {
            setOpenPanel(false);
          }
        });
      }

    }, 500);
  };

  const resetFilter = () => {
    form.setValue("ORDER_STATUS", "all");
    form.setValue("PURCHASE_POINTS", "all");
    form.setValue("PAYMENTS", "all");
    setStatus("");
    setPurchasePoint("");
    setPayment("");
  }

  React.useEffect(() => {
    if (status == "all" && purchasePoint == "all" && payment == "all") {
    } else {
      let tempObj = {};
      if (status !== "all") {
        tempObj = {
          ...tempObj,
          status,
        }
      }
      if (purchasePoint !== "all") {
        tempObj = {
          ...tempObj,
          purchasePoint,
        }
      }
      if (payment !== "all") {
        tempObj = {
          ...tempObj,
          payment,
        }
      }

      if (isEmpty(status)) {
        delete tempObj["status"];
      }
      if (isEmpty(purchasePoint)) {
        delete tempObj["purchasePoint"];
      }
      if (isEmpty(payment)) {
        delete tempObj["payment"];
      }

      if (isEmpty(tempObj)) {
        getOrdersData(1, null, null);
      } else {
        getOrdersData(1, null, null, tempObj);
      }
    }

  }, [status, purchasePoint, payment]);


  if (isVisibleOrderDetail) {
    return (
      <OrderDetail onBack={() => dispatch(setVisibleOrderDetail(false))} />
    );
  }


  return (
    <>
      <div style={{ position: "relative" }}>
        <>
          <div className="info_merchant_title">
            Orders
          </div>

          <Search
            value={valueSearch}
            onChange={onChangeSearch}
            onSubmit={() => {
              changePageOrders(1);
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
              onClickShowReport={() => onClickShowReport(pageOrders)}
              onClickExport={onClickExport}
            />
            <div style={{ position: "absolute", left: "9.6rem", top: 0 }}>
              <div onClick={_openPanel} className="btnFilter">
                Filters
                <img
                  src={icon_filter}
                  style={{ width: 18, height: 18 }}
                  alt="img"
                />
              </div>
            </div>
          </div>

          <div className="container_filter_close">
            {
              !isEmpty(status) && status !== "all" &&
              <div className="item_close">
                {`Status : ${status}`}
                <img onClick={() => {
                  setStatus("");
                  form.setValue("ORDER_STATUS", "");
                }}
                  src={icon_closed}
                  className="icon_closed"
                />
              </div>
            }
            {
              !isEmpty(purchasePoint) && purchasePoint !== "all" &&
              <div className="item_close">
                {`PurchasePoint : ${purchasePoint}`}
                <img onClick={() => {
                  setPurchasePoint("");
                  form.setValue("PURCHASE_POINTS", "");
                }}
                  src={icon_closed}
                  className="icon_closed"
                />
              </div>
            }
            {
              !isEmpty(payment) && payment !== "all" &&
              <div className="item_close">
                {`Payments : ${payment}`}
                <img onClick={() => {
                  setPayment("");
                  form.setValue("PAYMENTS", "");
                }}
                  src={icon_closed}
                  className="icon_closed"
                />
              </div>
            }
          </div>

          <div className="table-container">
            <ReactTable
              className="table_order"
              manual
              sortable={false}
              data={orders}
              minRows={1}
              noDataText="NO DATA!"
              NoDataComponent={() => (
                <div className="retailer_nodata">NO DATA!</div>
              )}
              LoadingComponent={() => loading && <Loading />}
              loading={loading}
              columns={columns(valueSort, onClickSort, typeSort_orders)}
              PaginationComponent={() => <div />}
              getTdProps={onRowClick}
            />

            {orders.length > 0 && (
              <Pagination
                activePage={pageOrders}
                handlePageChange={changePageOrders}
                totalItem={Math.ceil(orderPages / 2)}
              />
            )}
          </div>
        </>
        {loadingDetail && <Loading isFullLoading={true} />}

      </div>
      <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={openPanel}
        onRequestClose={() => {
        }}
        hideHeader={true}
        width={300}
        shouldCloseOnEsc={true}
      >

        <div className="containerFilter">
          <div className="topFilter">
            <div
              className="headerFilter"
              style={{ width: "14rem" }}
            >
              Filters
              <img
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenPanel(false);
                }}
                src={icon_close} className="iconFilter"
              />
            </div>
            <br />
            <InputSelect
              data={ORDER_STATUS}
              form={form}
              defaultValue="all"
              label="Status"
              name="ORDER_STATUS"
              width={"14rem"}
              height={"2.57rem"}
              onChange={value => {
                if (value !== "all") {
                  setStatus(value);
                } else {
                  setStatus("");
                }
              }}
            />
            <InputSelect
              data={PURCHASE_POINTS}
              form={form}
              defaultValue="all"
              label="Purchase point"
              name="PURCHASE_POINTS"
              width={"14rem"}
              height={"2.57rem"}
              onChange={value => {
                if (value !== "all") {
                  setPurchasePoint(value);
                } else {
                  setPurchasePoint("");
                }
              }}
            />
            <InputSelect
              data={PAYMENTS}
              form={form}
              defaultValue="all"
              label="Payment method"
              name="PAYMENTS"
              width={"14rem"}
              height={"2.57rem"}
              onChange={value => {
                if (value !== "all") {
                  setPayment(value);
                } else {
                  setPayment("");
                }
              }}
            />
          </div>

          <div
            onClick={resetFilter}
            className="btn-reset-filter"
          >
            Reset
          </div>
        </div>
      </SlidingPane>
    </>
  );
};

export default Index;
