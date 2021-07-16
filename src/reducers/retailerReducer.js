import * as types from "../constants/retailerConstant";
import sortArray from "sort-array";

export const retailerReducer = (
  state = {
    loading: false,
    loadingExport: false,
    loadingDetail: false,
    loadingUpfile: false,
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

    isVisibleCustomerDetail: false,
    isVisibleInventoryDetail: false,
    isVisibleOrderDetail: false,

    isVisibleInventoryEdit: false,

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
    case types.LOADING_NEW_CATEGORY:
      return { ...state, loadingNewCategory: true };

    case types.STOP_LOADING_NEW_CATEGORY:
      return { ...state, loadingNewCategory: false };

    case types.RETAILER_REQUEST:
      return { ...state, loading: true };

    case types.STOP_RETAILER_REQUEST:
      return { ...state, loading: false };

    case types.RETAILER_DETAIL_REQUEST:
      return { ...state, loadingDetail: true };

    case types.STOP_RETAILER_DETAIL_REQUEST:
      return { ...state, loadingDetail: false };

    case types.RETAILER_EXPORT_REQUEST:
      return { ...state, loadingExport: true };

    case types.STOP_RETAILER_EXPORT_REQUEST:
      return { ...state, loadingExport: false };

    case types.UPLOAD_FILE_REQUEST:
      return { ...state, loadingUpfile: true };

    case types.STOP_UPLOAD_FILE_REQUEST:
      return { ...state, loadingUpfile: false };

    case types.EXPORT_SUCCESS:
      return { ...state, loadingExport: false, linkExport: payload };

    case types.CLOSE_EXPORT:
      return { ...state, loadingExport: false, linkExport: "" };

    case types.CHANGE_IMAGE_PRODUCT_SUCCESS:
      let inventoryDetail = {
        ...state.inventoryDetail,
        fileId: payload.fileId,
        imageUrl: payload.url,
      };

      let inventory = state.inventory;
      let _productIndex = inventory.findIndex(
        (i) => parseInt(i.productId) === parseInt(payload.productId)
      );
      if (_productIndex !== -1) {
        inventory[_productIndex].fileId = payload.fileId;
        inventory[_productIndex].imageUrl = payload.url;
      }
      return {
        ...state,
        inventoryDetail,
        inventory,
      };

    case types.SET_VISIBLE_ORDER_DETAIL:
      return {
        ...state,
        isVisibleOrderDetail: payload,
      };

    case types.SET_VISIBLE_INVENTORY_DETAIL:
      return {
        ...state,
        isVisibleInventoryDetail: payload,
      };

    case types.SET_VISIBLE_INVENTORY_EDIT:
      return {
        ...state,
        isVisibleInventoryEdit: payload,
      };

    case types.SET_VISIBLE_CUSTOMER_DETAIL:
      return {
        ...state,
        isVisibleCustomerDetail: payload,
      };

    case types.SET_ORDERS:
      return {
        ...state,
        orders: sortTable(
          state.typeSort_orders,
          payload.data,
          state.directionSort_orders
        ),
        orderPages: payload.count,
      };

    case types.SET_ORDER_DETAIL:
      return {
        ...state,
        orderDetail: payload,
      };

    case types.SET_APPOINTMENT_CUSTOMER_DETAIL:
      return {
        ...state,
        customerAppointments: payload.data,
        countCustomerAppointments: payload.count,
      };

    case types.SET_INVENTORY_DETAIL:
      return {
        ...state,
        inventoryDetail: payload,
      };

    case types.SET_SUB_CATEGORY:
      return {
        ...state,
        subCategory: payload ? payload : [],
      };

    case types.SET_INVENTORY:
      return {
        ...state,
        inventory: sortTable(
          state.typeSort_inventory,
          payload.data,
          state.directionSort_inventory
        ),
        inventoryPages: payload.count,
      };

    case types.SET_CUSTOMER:
      return {
        ...state,
        customer: sortTable(
          state.typeSort_customer,
          payload.data,
          state.directionSort_customer
        ),
        customerPages: payload.count,
      };

    case types.SET_CUSTOMER_DETAIL:
      return {
        ...state,
        customerDetail: payload,
      };

    case types.SORT_INVENTORY:
      return {
        ...state,
        directionSort_inventory:
          state.directionSort_inventory === "ASC" ? "DESC" : "ASC",
        typeSort_inventory: payload.type,
      };

    case types.SORT_ORDERS:
      return {
        ...state,
        directionSort_orders:
          state.directionSort_orders === "ASC" ? "DESC" : "ASC",
        typeSort_orders: payload.type,
      };

    case types.SORT_CUSTOMER:
      return {
        ...state,
        directionSort_customer:
          state.directionSort_customer === "ASC" ? "DESC" : "ASC",
        typeSort_customer: payload.type,
      };

    case types.RESET_SORT_ORDERS:
      return {
        ...state,
        directionSort_orders: "ASC",
        typeSort_orders: "",
      };

    case types.RESET_SORT_INVENTORY:
      return {
        ...state,
        directionSort_inventory: "ASC",
        typeSort_inventory: "",
      };

    case types.RESET_SORT_CUSTOMER:
      return {
        ...state,
        directionSort_customer: "ASC",
        typeSort_customer: "",
      };

    case types.RESET_SORT_STAFF:
      return {
        ...state,
        typeSort_staff_report: "",
        directionSort_staff_report: "ASC",
      };

    case types.RESET_SORT_CUSTOMER_APPOINTMENT:
      return {
        ...state,
        typeSort_customerAppointments: "",
        directionSort_customerAppointments: "ASC",
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
        staff_report_pages: payload?.count,
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
    case types.SET_PAYMENT_BY_METHOD:
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
