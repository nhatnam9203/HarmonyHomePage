import * as types from "../constants/retailerConstant";
import sortArray from "sort-array";

export const retailerReducer = (
  state = {
    loading: false,
    loadingExport: false,
    orders: [],
    orderPages: 0,
    inventory: [],
    inventoryPages: 0,
    customer: [],
    customerPages: 0,
    report: [],

    reportOverall: [],
    summaryOverall: {},
    typeSortOverall: "",
    directionSortOverall: "ASC",

    sales_by_order: [],
    summary_sales_by_order: {},
    typeSort_sales_by_order: "",
    directionSort_sales_by_order: "ASC",

    linkExport: "",
  },
  { type, payload }
) => {
  switch (type) {
    case types.RETAILER_REQUEST:
      return { ...state, loading: true };

    case types.STOP_RETAILER_REQUEST:
      return { ...state, loading: false };

    case types.RETAILER_EXPORT_REQUEST:
      return { ...state, loadingExport: true };

    case types.STOP_RETAILER_EXPORT_REQUEST:
      return { ...state, loadingExport: false };

    case types.EXPORT_SUCCESS:
      return { ...state, loadingExport: false, linkExport: payload };

    case types.CLOSE_EXPORT:
      return { ...state, loadingExport: false, linkExport: "" };

    case types.SET_ORDERS:
      return { ...state, orders: payload.data, orderPages: payload.count };

    case types.SET_INVENTORY:
      return {
        ...state,
        inventory: payload.data,
        inventoryPages: payload.count,
      };

    case types.SET_CUSTOMER:
      return {
        ...state,
        customer: payload.data,
        customerPages: payload.count,
      };

    /* OVERALL */
    case types.SET_OVERALL:
      return {
        ...state,
        reportOverall: payload?.data || [],
        summaryOverall: payload?.summary || {},
      };

    case types.SORT_OVRERALL:
      return {
        ...state,
        directionSortOverall:
          state.directionSortOverall === "ASC" ? "DESC" : "ASC",
        typeSortOverall: payload.type,
        reportOverall: sortTable(
          payload.type,
          state.reportOverall,
          state.directionSortOverall === "ASC" ? "DESC" : "ASC"
        ),
      };

    /* SALES BY ORDER */
    case types.SET_SALES_BY_ORDER:
      return {
        ...state,
        sales_by_order: payload?.data || [],
        summary_sales_by_order: payload?.summary || {},
      };

    case types.SORT_SALES_BY_ORDER:
      return {
        ...state,
        directionSort_sales_by_order:
          state.directionSort_sales_by_order === "ASC" ? "DESC" : "ASC",
        typeSort_sales_by_order: payload.type,
        sales_by_order: sortTable(
          payload.type,
          state.sales_by_order,
          state.directionSort_sales_by_order === "ASC" ? "DESC" : "ASC"
        ),
      };

    default:
      return state;
  }
};

const sortTable = (sortType, data, direction) => {
  let temptData = JSON.parse(JSON.stringify(data));
  temptData = sortArray(temptData, {
    by: sortType,
    order: direction.toString().toLowerCase(),
  });
  return temptData;
};
