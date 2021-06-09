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

    /* SALES BY ORDER */
    sales_by_order: [],
    summary_sales_by_order: {},
    typeSort_sales_by_order: "",
    directionSort_sales_by_order: "ASC",

    /* SALES BY PRODUCT */
    sales_by_product: [],
    summary_sales_by_product: {},
    typeSort_sales_by_product: "",
    directionSort_sales_by_product: "ASC",

    /* SALES BY CATEGORY */
    sales_by_categoryt: [],
    summary_sales_by_categoryt: {},
    typeSort_sales_by_categoryt: "",
    directionSort_sales_by_categoryt: "ASC",

    /* SALES BY CUSTOMER */
    sales_by_customer: [],
    summary_sales_by_customer: {},
    typeSort_sales_by_customer: "",
    directionSort_sales_by_customer: "ASC",

    /* SALES BY PRODUCT */
    top_product: [],
    summary_top_product: {},
    typeSort_top_product: "",
    directionSort_top_product: "ASC",

    /* SALES BY CATEGORY */
    top_category: [],
    summary_top_category: {},
    typeSort_top_category: "",
    directionSort_top_category: "ASC",

    /* STAFF REPORT */
    staff_report: [],
    summary_staff_report: {},
    typeSort_staff_report: "",
    directionSort_staff_report: "ASC",

    /* MARKING EFFICIENCY */
    marketing_efficiency: [],
    summary_marketing_efficiency: {},
    typeSort_marketing_efficiency: "",
    directionSort_marketing_efficiency: "ASC",

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

    /* SALES BY PRODUCT */
    case types.SET_SALES_BY_PRODUCT:
      return {
        ...state,
        sales_by_product: payload?.data || [],
        summary_sales_by_product: payload?.summary || {},
      };

    case types.SORT_SALES_BY_PRODUCT:
      return {
        ...state,
        directionSort_sales_by_product:
          state.directionSort_sales_by_product === "ASC" ? "DESC" : "ASC",
        typeSort_sales_by_product: payload.type,
        sales_by_product: sortTable(
          payload.type,
          state.sales_by_product,
          state.directionSort_sales_by_product === "ASC" ? "DESC" : "ASC"
        ),
      };

    /* SALES BY CATEGORY */
    case types.SET_SALES_BY_CATEGORY:
      return {
        ...state,
        sales_by_category: payload?.data || [],
        summary_sales_by_category: payload?.summary || {},
      };

    case types.SORT_SALES_BY_CATEGORY:
      return {
        ...state,
        directionSort_sales_by_category:
          state.directionSort_sales_by_category === "ASC" ? "DESC" : "ASC",
        typeSort_sales_by_category: payload.type,
        sales_by_category: sortTable(
          payload.type,
          state.sales_by_category,
          state.directionSort_sales_by_category === "ASC" ? "DESC" : "ASC"
        ),
      };

    /* SALES BY CUSTOMER */
    case types.SET_SALES_BY_CUSTOMER:
      return {
        ...state,
        sales_by_customer: payload?.data || [],
        summary_sales_by_customer: payload?.summary || {},
      };

    case types.SORT_SALES_BY_CUSTOMER:
      return {
        ...state,
        directionSort_sales_by_customer:
          state.directionSort_sales_by_customer === "ASC" ? "DESC" : "ASC",
        typeSort_sales_by_customer: payload.type,
        sales_by_customer: sortTable(
          payload.type,
          state.sales_by_customer,
          state.directionSort_sales_by_customer === "ASC" ? "DESC" : "ASC"
        ),
      };

    /* TOP PRODUCT */
    case types.SET_TOP_PRODUCT:
      return {
        ...state,
        top_product: payload?.data || [],
        summary_top_product: payload?.summary || {},
      };

    case types.SORT_TOP_PRODUCT:
      return {
        ...state,
        directionSort_top_product:
          state.directionSort_top_product === "ASC" ? "DESC" : "ASC",
        typeSort_top_product: payload.type,
        top_product: sortTable(
          payload.type,
          state.top_product,
          state.directionSort_top_product === "ASC" ? "DESC" : "ASC"
        ),
      };

    /* TOP CATEGORY */
    case types.SET_TOP_CATEGORY:
      return {
        ...state,
        top_category: payload?.data || [],
        summary_top_category: payload?.summary || {},
      };

    case types.SORT_TOP_CATEGORY:
      return {
        ...state,
        directionSort_top_category:
          state.directionSort_top_category === "ASC" ? "DESC" : "ASC",
        typeSort_top_category: payload.type,
        top_category: sortTable(
          payload.type,
          state.top_category,
          state.directionSort_top_category === "ASC" ? "DESC" : "ASC"
        ),
      };

    /* STAFF REPORT */
    case types.SET_STAFF_REPORT:
      return {
        ...state,
        staff_report: payload?.data || [],
        summary_staff_report: payload?.summary || {},
      };

    case types.SORT_STAFF_REPORT:
      return {
        ...state,
        directionSort_staff_report:
          state.directionSort_staff_report === "ASC" ? "DESC" : "ASC",
        typeSort_staff_report: payload.type,
        staff_report: sortTable(
          payload.type,
          state.staff_report,
          state.directionSort_staff_report === "ASC" ? "DESC" : "ASC"
        ),
      };

    /* MARKETING EFFICIENCY */
    case types.SET_STAFF_REPORT:
      return {
        ...state,
        marketing_efficiency: payload?.data || [],
        summary_marketing_efficiency: payload?.summary || {},
      };

    case types.SORT_MARKETING_EFFICIENCY:
      return {
        ...state,
        directionSort_marketing_efficiency:
          state.directionSort_marketing_efficiency === "ASC" ? "DESC" : "ASC",
        typeSort_marketing_efficiency: payload.type,
        marketing_efficiency: sortTable(
          payload.type,
          state.marketing_efficiency,
          state.directionSort_marketing_efficiency === "ASC" ? "DESC" : "ASC"
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
