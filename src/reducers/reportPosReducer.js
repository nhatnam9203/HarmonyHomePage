import * as types from "../constants/retailerConstant";
import sortArray from "sort-array";

export const reportPosReducer = (
  state = {
    loading: false,
    loadingExport: false,
    loadingDetail: false,
    loadingUpfile: false,
    loadingAttribute: false,
    loadingNewCategory: false,
    orders: [],
    orderDetail: {},
    orderPages: 0,
    inventory: [],
    inventoryDetail: {},
    inventoryPages: 0,
    customer: [],
    customerDetail: {},
    customerPages: 0,
    customerAppointments: [],
    countCustomerAppointments: 0,
    report: [],
    subCategory: [],
    attributes: [],
    maxPageAttributes: 1,
    pageAttributes: 1,

    isVisibleCustomerDetail: false,
    isVisibleInventoryDetail: false,
    isVisibleOrderDetail: false,

    isVisibleInventoryEdit: false,
    isVisibleInventoryAdd: false,

    typeSort_inventory: "",
    directionSort_inventory: "ASC",

    typeSort_orders: "",
    directionSort_orders: "ASC",

    typeSort_customer: "",
    directionSort_customer: "ASC",

    typeSort_customerAppointments: "",
    directionSort_customerAppointments: "ASC",

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

    /* SALES BY SERVICE */
    sales_by_service: [],
    summary_sales_by_service: {},
    typeSort_sales_by_service: "",
    directionSort_sales_by_service: "ASC",

    /* SALES BY CATEGORY */
    sales_by_categoryt: [],
    summary_sales_by_categoryt: {},
    typeSort_sales_by_category: "",
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
    staff_report_pages: 0,
    summary_staff_report: {},
    typeSort_staff_report: "",
    directionSort_staff_report: "ASC",

    /* MARKING EFFICIENCY */
    marketing_efficiency: [],
    summary_marketing_efficiency: {},
    typeSort_marketing_efficiency: "",
    directionSort_marketing_efficiency: "ASC",

    /* PAYMENT METHOD */
    payment_method: [],
    summary_payment_method: {},
    typeSort_payment_method: "",
    directionSort_payment_method: "ASC",

    linkExport: "",
  },
  { type, payload }
) => {
  switch (type) {

    case "SET_SALES_BY_SERVICE_POS":
      console.log({ payload })
      return {
        ...state,
        sales_by_service: payload?.data || [],
        summary_sales_by_service: payload?.summary || {},
      };

    case "SORT_SALES_BY_SERVICE_POS":
      return {
        ...state,
        directionSort_sales_by_service:
          state.directionSort_sales_by_service === "ASC" ? "DESC" : "ASC",
        typeSort_sales_by_service: payload.type,
        sales_by_service: sortTable(
          payload.type,
          state.sales_by_service,
          state.directionSort_sales_by_service === "ASC" ? "DESC" : "ASC"
        ),
      };


    case types.RESET_SORT_STAFF:
      return {
        ...state,
        typeSort_staff_report: "",
        directionSort_staff_report: "ASC",
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
    case "SET_STAFF_REPORT_POS":
      return {
        ...state,
        staff_report: payload?.data || [],
        staff_report_pages: payload?.count,
      };

    case "SORT_STAFF_POS":
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
    case types.SET_MARKETING_EFFICIENCY:
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

    /* PAYMENT METHOD */
    case "SET_PAYMENT_BY_METHOD_POS":
      return {
        ...state,
        payment_method: payload?.data || [],
        summary_payment_method: payload?.summary || {},
      };

    case types.SORT_PAYMENT_BY_METHOD:
      return {
        ...state,
        directionSort_payment_method:
          state.directionSort_payment_method === "ASC" ? "DESC" : "ASC",
        typeSort_payment_method: payload.type,
        payment_method: sortTable(
          payload.type,
          state.payment_method,
          state.directionSort_payment_method === "ASC" ? "DESC" : "ASC"
        ),
      };

    case types.SORT_CUSTOMER_APPOINTMENT:
      return {
        ...state,
        directionSort_customerAppointments:
          state.directionSort_customerAppointments === "ASC" ? "DESC" : "ASC",
        typeSort_customerAppointments: payload.type,
        // customerAppointments: sortTable(
        //   payload.type,
        //   state.customerAppointments,
        //   state.directionSort_customerAppointments === "ASC" ? "DESC" : "ASC"
        // ),
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
