import * as types from "../constants/retailerConstant";
import sortArray from "sort-array";

export const reportPosReducer = (
  state = {


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
    sales_by_category_product: [],
    summary_sales_by_category_product: {},
    typeSort_sales_by_category_product: "",
    directionSort_sales_by_category_product: "ASC",

    /* SALES BY CUSTOMER */
    sales_by_customer: [],
    summary_sales_by_customer: {},
    typeSort_sales_by_customer: "",
    directionSort_sales_by_customer: "ASC",

    /* CUSTOMER STATISTIC */
    customer_statistic: [],
    summary_customer_statistic: {},
    typeSort_customer_statistic: "",
    directionSort_customer_statistic: "ASC",

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

    /* SALES BY CATEGORY SERVICE */
    sales_by_category_service: [],
    summary_sales_by_category_service: {},
    typeSort_sales_by_category_service: "",
    directionSort_sales_by_category_service: "ASC",


    /* STAFF REPORT */
    staff_report: [],
    staff_report_pages: 0,
    summary_staff_report: {},
    typeSort_staff_report: "",
    directionSort_staff_report: "ASC",

    /* STAFF STATISTIC */
    staff_statistic: [],
    summary_staff_statistic: {},
    typeSort_staff_statistic: "",
    directionSort_staff_statistic: "ASC",

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

    /* SALES BY GIFTCARD */
    sales_by_giftCard: [],
    summary_sales_by_giftCard: {},
    typeSort_sales_by_giftCard: "",
    directionSort_sales_by_giftCard: "ASC",

    /* GIFTCARD STATISTIC */
    giftCard_statistic: [],
    summary_giftCard_statistic: {},
    typeSort_giftCard_statistic: "",
    directionSort_giftCard_statistic: "ASC",

    /* SERVICE STATISTIC */
    service_statistic: [],
    summary_service_statistic: {},
    typeSort_service_statistic: "",
    directionSort_service_statistic: "ASC",

    /* SERVICE STATISTIC */
    service_category_statistic: [],
    summary_service_category_statistic: {},
    typeSort_service_category_statistic: "",
    directionSort_service_category_statistic: "ASC",

    /* PRODUCT CATEGORY STATISTIC */
    product_category_statistic: [],
    summary_product_category_statistic: {},
    typeSort_product_category_statistic: "",
    directionSort_product_category_statistic: "ASC",

    /* PRODUCT STATISTIC */
    product_statistic: [],
    summary_product_statistic: {},
    typeSort_product_statistic: "",
    directionSort_product_statistic: "ASC",

    /* SALES BY CATEGORY */
    service_duration: [],
    summary_service_duration: {},
    typeSort_service_duration: "",
    directionSort_service_duration: "ASC",

    /* MARKETING STATUSTIC */
    marketing_stayistic: [],
    summary_marketing_stayistic: {},
    typeSort_marketing_stayistic: "",
    directionSort_marketing_stayistic: "ASC",

    /* MARKETING STATUSTIC */
    payment_method_statistic: [],
    summary_payment_method_statistic: {},
    typeSort_payment_method_statistic: "",
    directionSort_payment_method_statistic: "ASC",

  },
  { type, payload }
) => {
  switch (type) {

    case "SET_SERVICE_DURATION":
      return {
        ...state,
        service_duration: payload?.data || [],
        summary_service_duration: payload?.summary || {},
      }

    case "SORT_SERVICE_DURATION":
      return {
        ...state,
        directionSort_service_duration:
          state.directionSort_service_duration === "ASC" ? "DESC" : "ASC",
        typeSort_service_duration: payload.type,
        service_duration: sortTable(
          payload.type,
          state.service_duration,
          state.directionSort_service_duration === "ASC" ? "DESC" : "ASC"
        ),
      }

    case "SET_SALES_BY_SERVICE_POS":
      return {
        ...state,
        sales_by_service: payload?.data || [],
        summary_sales_by_service: payload?.summary || {},
      };

    case "SET_SALES_BY_CATEGORY_SERVICE_POS":
      return {
        ...state,
        sales_by_category_service: payload?.data || [],
        summary_sales_by_category_service: payload?.summary || {},
      };

    case "SET_SALES_BY_PRODUCT_POS":
      return {
        ...state,
        sales_by_product: payload?.data || [],
        summary_sales_by_product: payload?.summary || {},
      };

    case "SET_SALES_BY_CATEGORY_PRODUCT_POS":
      return {
        ...state,
        sales_by_category_product: payload?.data || [],
        summary_sales_by_category_product: payload?.summary || {},
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

    case "SORT_SALES_BY_CATEGORY_SERVICE_POS":
      return {
        ...state,
        directionSort_sales_by_category_service:
          state.directionSort_sales_by_category_service === "ASC" ? "DESC" : "ASC",
        typeSort_sales_by_category_service: payload.type,
        sales_by_category_service: sortTable(
          payload.type,
          state.sales_by_category_service,
          state.directionSort_sales_by_category_service === "ASC" ? "DESC" : "ASC"
        ),
      };

    case "SORT_SALES_BY_PRODUCT_POS":
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


    case "SORT_SALES_BY_CATEGORY_PRODUCT_POS":
      return {
        ...state,
        directionSort_sales_by_category_product:
          state.directionSort_sales_by_category_product === "ASC" ? "DESC" : "ASC",
        typeSort_sales_by_category_product: payload.type,
        sales_by_category_product: sortTable(
          payload.type,
          state.sales_by_category_product,
          state.directionSort_sales_by_category_product === "ASC" ? "DESC" : "ASC"
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

    case "SET_STAFF_STATISTIC":
      return {
        ...state,
        staff_statistic: payload?.data || [],
        summary_staff_statistic: payload?.summary || {},
      };


    case "SORT_STAFF_STATISTIC":
      return {
        ...state,
        directionSort_staff_statistic:
          state.directionSort_staff_statistic === "ASC" ? "DESC" : "ASC",
        typeSort_staff_statistic: payload.type,
        staff_statistic: sortTable(
          payload.type,
          state.staff_statistic,
          state.directionSort_staff_statistic === "ASC" ? "DESC" : "ASC"
        ),
      };

    case "SET_SALES_BY_GIFTCARD":
      return {
        ...state,
        sales_by_giftCard: payload?.data || [],
      };

    case "SORT_SALES_BY_GIFTCARD":
      return {
        ...state,
        directionSort_sales_by_giftCard:
          state.directionSort_sales_by_giftCard === "ASC" ? "DESC" : "ASC",
        typeSort_sales_by_giftCard: payload.type,
        sales_by_giftCard: sortTable(
          payload.type,
          state.sales_by_giftCard,
          state.directionSort_sales_by_giftCard === "ASC" ? "DESC" : "ASC"
        ),
      };


    case "SET_GIFTCARD_STATISTIC":
      return {
        ...state,
        giftCard_statistic: payload || [],
      };

    case "SORT_GIFTCARD_STATISTIC":
      return {
        ...state,
        directionSort_giftCard_statistic:
          state.directionSort_giftCard_statistic === "ASC" ? "DESC" : "ASC",
        typeSort_giftCard_statistic: payload.type,
        giftCard_statistic: sortTable(
          payload.type,
          state.giftCard_statistic,
          state.directionSort_giftCard_statistic === "ASC" ? "DESC" : "ASC"
        ),
      };

    case "SET_CUSTOMER_STATISTIC":
      return {
        ...state,
        customer_statistic: payload || [],
      };

    case "SORT_CUSTOMER_STATISTIC":
      return {
        ...state,
        directionSort_customer_statistic:
          state.directionSort_customer_statistic === "ASC" ? "DESC" : "ASC",
        typeSort_customer_statistic: payload.type,
        customer_statistic: sortTable(
          payload.type,
          state.customer_statistic,
          state.directionSort_customer_statistic === "ASC" ? "DESC" : "ASC"
        ),
      };

    case "SET_SERVICE_STATISTIC":
      return {
        ...state,
        service_statistic: payload || [],
      };

    case "SORT_SERVICE_STATISTIC":
      return {
        ...state,
        directionSort_service_statistic:
          state.directionSort_service_statistic === "ASC" ? "DESC" : "ASC",
        typeSort_service_statistic: payload.type,
        service_statistic: sortTable(
          payload.type,
          state.service_statistic,
          state.directionSort_service_statistic === "ASC" ? "DESC" : "ASC"
        ),
      };

    case "SET_CATEGORY_SERVICE_STATISTIC":
      return {
        ...state,
        service_category_statistic: payload || [],
      };

    case "SORT_CATEGORY_SERVICE_STATISTIC":
      return {
        ...state,
        directionSort_service_category_statistic:
          state.directionSort_service_category_statistic === "ASC" ? "DESC" : "ASC",
        typeSort_service_category_statistic: payload.type,
        service_category_statistic: sortTable(
          payload.type,
          state.service_category_statistic,
          state.directionSort_service_category_statistic === "ASC" ? "DESC" : "ASC"
        ),
      };


    case "SET_PRODUCT_STATISTIC":
      return {
        ...state,
        product_statistic: payload || [],
      };

    case "SORT_PRODUCT_STATISTIC":
      return {
        ...state,
        directionSort_product_statistic:
          state.directionSort_product_statistic === "ASC" ? "DESC" : "ASC",
        typeSort_product_statistic: payload.type,
        product_statistic: sortTable(
          payload.type,
          state.product_statistic,
          state.directionSort_product_statistic === "ASC" ? "DESC" : "ASC"
        ),
      };


    case "SET_PRODUCT_CATEGORY_STATISTIC":
      console.log({ payload })
      return {
        ...state,
        product_category_statistic: payload || [],
      };

    case "SORT_PRODUCT_CATEGORY_STATISTIC":
      return {
        ...state,
        directionSort_product_category_statistic:
          state.directionSort_product_category_statistic === "ASC" ? "DESC" : "ASC",
        typeSort_product_category_statistic: payload.type,
        product_category_statistic: sortTable(
          payload.type,
          state.product_category_statistic,
          state.directionSort_product_category_statistic === "ASC" ? "DESC" : "ASC"
        ),
      };



    case "SET_MARKETING_STATISTIC":
      console.log({ payload })
      return {
        ...state,
        marketing_statistic: payload || [],
      };

    case "SORT_MARKETING_STATISTIC":
      return {
        ...state,
        directionSort_marketing_statistic:
          state.directionSort_marketing_statistic === "ASC" ? "DESC" : "ASC",
        typeSort_marketing_statistic: payload.type,
        marketing_statistic: sortTable(
          payload.type,
          state.marketing_statistic,
          state.directionSort_marketing_statistic === "ASC" ? "DESC" : "ASC"
        ),
      };

      case "SET_PAYMENT_METHOD_STATISTIC":
        console.log({ payload })
        return {
          ...state,
          payment_method_statistic: payload || [],
        };
  
      case "SORT_PAYMENT_METHOD_STATISTIC":
        return {
          ...state,
          directionSort_payment_method_statistic:
            state.directionSort_payment_method_statistic === "ASC" ? "DESC" : "ASC",
          typeSort_payment_method_statistic: payload.type,
          payment_method_statistic: sortTable(
            payload.type,
            state.payment_method_statistic,
            state.directionSort_payment_method_statistic === "ASC" ? "DESC" : "ASC"
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
