import * as api from "../api/index";
import * as typeRetailer from "../constants/retailerConstant";
import * as typeNotify from "../constants/notifyConstants";
import {
  summary,
  summary_sales_by_order,
  summary_sales_by_product,
  summary_sales_by_customer,
  summary_payment_by_method,
  summary_staff_report,
  summary_marketing_efficiency,
} from "@/util";

import { isEmpty } from "lodash";

export const getOrders = (requestUrl = "", token = "") => async (dispatch) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    const { data } = await api.getByPage(requestUrl, token);
    if (parseInt(data.codeNumber) === 200) {
      dispatch({
        type: typeRetailer.SET_ORDERS,
        payload: { data: data.data, count: data.count },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};

export const getInventory = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    const { data } = await api.getByPage(requestUrl, token);
    if (parseInt(data.codeNumber) === 200) {
      dispatch({
        type: typeRetailer.SET_INVENTORY,
        payload: { data: data.data, count: data.count },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};

export const getCustomer = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    const { data } = await api.getByPage(requestUrl, token);
    if (parseInt(data.codeNumber) === 200) {
      dispatch({
        type: typeRetailer.SET_CUSTOMER,
        payload: { data: data.data, count: data.count },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};

export const getOverall = (requestUrl = "", token = "") => async (dispatch) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    let { data } = await api.getByPage(requestUrl, token);

    if (parseInt(data.codeNumber) === 200) {
      let result = [];
      if (data.data.length > 0) result = [...data.data, summary(data.summary)];

      dispatch({
        type: typeRetailer.SET_OVERALL,
        payload: { data: result, summary: data.summary },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};

export const getSalesByOrder = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    let { data } = await api.getByPage(requestUrl, token);

    if (parseInt(data.codeNumber) === 200) {
      let result = [];
      if (data.data.length > 0)
        result = [...data.data, summary_sales_by_order(data.summary)];

      dispatch({
        type: "SET_SALES_BY_ORDER",
        payload: { data: result, summary: data.summary },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};

export const getSalesByProduct = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    let { data } = await api.getByPage(requestUrl, token);

    if (parseInt(data.codeNumber) === 200) {
      let result = [];
      if (data.data.length > 0)
        result = [...data.data, summary_sales_by_product(data.summary)];

      dispatch({
        type: "SET_SALES_BY_PRODUCT",
        payload: { data: result, summary: data.summary },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};

export const getSalesByCategory = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    let { data } = await api.getByPage(requestUrl, token);

    if (parseInt(data.codeNumber) === 200) {
      let result = [];
      if (data.data.length > 0)
        result = [...data.data, summary_sales_by_product(data.summary)];

      dispatch({
        type: "SET_SALES_BY_CATEGORY",
        payload: { data: result, summary: data.summary },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};

export const getSalesByCustomer = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    let { data } = await api.getByPage(requestUrl, token);

    console.log({ data, requestUrl });

    if (parseInt(data.codeNumber) === 200) {
      let result = [];
      if (data.data.length > 0)
        result = [...data.data, summary_sales_by_customer(data.summary)];

      dispatch({
        type: "SET_SALES_BY_CUSTOMER",
        payload: { data: result, summary: data.summary },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};

export const getTopProduct = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    let { data } = await api.getByPage(requestUrl, token);

    if (parseInt(data.codeNumber) === 200) {
      let result = [];
      if (data.data.length > 0)
        result = [...data.data, summary_sales_by_product(data.summary)];

      dispatch({
        type: "SET_TOP_PRODUCT",
        payload: { data: result, summary: data.summary },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};

export const getTopCategory = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    let { data } = await api.getByPage(requestUrl, token);

    if (parseInt(data.codeNumber) === 200) {
      let result = [];
      if (data.data.length > 0)
        result = [...data.data, summary_sales_by_product(data.summary)];

      dispatch({
        type: "SET_TOP_CATEGORY",
        payload: { data: result, summary: data.summary },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};

export const getPaymentByMethod = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    let { data } = await api.getByPage(requestUrl, token);

    console.log({
      data,
      requestUrl,
    });

    if (parseInt(data.codeNumber) === 200) {
      let result = [];
      if (data.data.length > 0)
        result = [...data.data, summary_payment_by_method(data.summary)];

      dispatch({
        type: "SET_PAYMENT_BY_METHOD",
        payload: { data: result, summary: data.summary },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};

export const getStaffReport = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    let { data } = await api.getByPage(requestUrl, token);

    if (parseInt(data.codeNumber) === 200) {
      let result = [];
      if (data.data.length > 0)
        result = [...data.data, summary_staff_report(data.summary)];

      dispatch({
        type: "SET_STAFF_REPORT",
        payload: { data: result, summary: data.summary },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};

export const getMarketingEfficiency = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_REQUEST });
    let { data } = await api.getByPage(requestUrl, token);

    if (parseInt(data.codeNumber) === 200) {
      let result = [];
      if (data.data.length > 0)
        result = [...data.data, summary_marketing_efficiency(data.summary)];

      dispatch({
        type: "SET_MARKETING_EFFICIENCY",
        payload: { data: result, summary: data.summary },
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};

export const exportRetailer = (requestUrl = "", token = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: typeRetailer.RETAILER_EXPORT_REQUEST });
    let { data } = await api.getByPage(requestUrl, token);

    let path = typeof data.data === "object" ? data.data.path : data.data;

    if (parseInt(data.codeNumber) === 200) {
      dispatch({
        type: typeRetailer.EXPORT_SUCCESS,
        payload: path,
      });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
  } finally {
    dispatch({ type: typeRetailer.STOP_RETAILER_REQUEST });
  }
};

export const sortOverAll = (payload) => {
  return {
    type: typeRetailer.SORT_OVRERALL,
    payload,
  };
};

export const sort_sales_by_order = (payload) => {
  return {
    type: typeRetailer.SORT_SALES_BY_ORDER,
    payload,
  };
};

export const sort_sales_by_product = (payload) => {
  return {
    type: typeRetailer.SORT_SALES_BY_PRODUCT,
    payload,
  };
};

export const sort_sales_by_customer = (payload) => {
  return {
    type: typeRetailer.SORT_SALES_BY_CUSTOMER,
    payload,
  };
};

export const sort_sales_by_category = (payload) => {
  return {
    type: typeRetailer.SORT_SALES_BY_CATEGORY,
    payload,
  };
};

export const sort_top_category = (payload) => {
  return {
    type: typeRetailer.SORT_TOP_CATEGORY,
    payload,
  };
};

export const sort_top_product = (payload) => {
  return {
    type: typeRetailer.SORT_TOP_PRODUCT,
    payload,
  };
};

export const sort_staff_report = (payload) => {
  return {
    type: typeRetailer.SORT_STAFF_REPORT,
    payload,
  };
};

export const sort_payment_method = (payload) => {
  return {
    type: typeRetailer.SORT_PAYMENT_BY_METHOD,
    payload,
  };
};

export const sort_marketing_efficiency = (payload) => {
  return {
    type: typeRetailer.SORT_MARKETING_EFFICIENCY,
    payload,
  };
};

export const closeExport = () => {
  return {
    type: typeRetailer.CLOSE_EXPORT,
  };
};
