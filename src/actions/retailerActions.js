import * as api from "../api/index";
import * as typeRetailer from "../constants/retailerConstant";
import * as typeNotify from "../constants/notifyConstants";

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
    console.log({ data, requestUrl });

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

export const sortOverAll = (payload) => {
  return {
    type: typeRetailer.SORT_OVRERALL,
    payload,
  };
};

const summary = (value) => {
  return {
    total_averageOrder: value.averageOrder,
    total_date: value.date,
    total_tax: value.tax,
    total_revenue: value.revenue,
    total_totalOrder: value.totalOrder,
    total_cost: value.cost,
    total_profit: value.profit,
  };
};
