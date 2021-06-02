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
