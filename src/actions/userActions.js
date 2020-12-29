import * as typeUser from "../constants/userConstants";
import * as api from "../api/index";
import * as typeNotify from "../constants/notifyConstants";

import { history } from "../History/history";

// User Login
export const userLogin = (dataLogin) => async (dispatch) => {
  try {
    dispatch({ type: typeUser.LOGIN_REQUEST });
    const { data } = await api.login(dataLogin);
    if (Number(data.codeNumber) === 200) {
      localStorage.setItem("user", JSON.stringify(data?.data));
      dispatch({ type: typeUser.LOGIN_REQUEST_SUCCESS, payload: data?.data });
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
      dispatch({ type: typeUser.LOGIN_REQUEST_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
    dispatch({ type: typeUser.LOGIN_REQUEST_FAILURE, payload: error.message });
  }
};

// User logout
export const userLogoutAction = () => async (dispatch) => {
  dispatch({ type: typeUser.USER_LOGOUT });
  history.push("/");
};

// Get My Account
export const getMyAccountAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: typeUser.GET_MY_ACCOUNT_REQUEST,
    });

    const {
      user: { token },
    } = await getState().user;

    const { data } = await api.getMyAccount(token);

    dispatch({
      type: typeUser.GET_MY_ACCOUNT_SUCCESS,
      payload: data?.data,
    });
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
    dispatch({ type: typeUser.GET_MY_ACCOUNT_FAILURE, payload: error.message });
  }
};

// Update My Account
export const updateMyAccountAction = (payload) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: typeUser.UPDATE_MY_ACCOUNT_REQUEST,
    });

    const {
      user: { token },
    } = await getState().user;

    const { data } = await api.updateMyAccount(payload, token);

    dispatch({
      type: typeUser.UPDATE_MY_ACCOUNT_SUCCESS,
      payload: data?.message,
    });

    dispatch({ type: typeNotify.NOTIFY_SUCCESS, payload: data?.message });

    history.goBack();
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
    dispatch({
      type: typeUser.UPDATE_MY_ACCOUNT_FAILURE,
      payload: error.message,
    });
  }
};

// Newsletter Subscriptions
export const newsletterSubscriptionAction = (enable) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: typeUser.NEWSLETTER_SUB_REQUEST,
    });

    const {
      user: { token },
    } = await getState().user;

    const { data } = await api.newsletterSubscription(enable, token);

    dispatch({
      type: typeUser.NEWSLETTER_SUB_SUCCESS,
      payload: data?.message,
    });

    dispatch({ type: typeNotify.NOTIFY_SUCCESS, payload: data?.message });

    history.goBack();
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
    dispatch({
      type: typeUser.NEWSLETTER_SUB_FAILURE,
      payload: error.message,
    });
  }
};

// Get Merchant List Action
export const getMerchantListAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: typeUser.GET_ALL_MERCHANT_REQUEST,
    });

    const {
      user: { token },
    } = await getState().user;

    const { data } = await api.getMerchantList(token);

    dispatch({
      type: typeUser.GET_ALL_MERCHANT_SUCCESS,
      payload: data?.data,
    });
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
    dispatch({
      type: typeUser.GET_ALL_MERCHANT_FAILURE,
      payload: error.message,
    });
  }
};

// Get Merchant By ID
export const getMerchantByIdAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: typeUser.GET_MERCHANT_BY_ID_REQUEST,
    });

    const {
      user: { token },
    } = await getState().user;

    const { data } = await api.getMerchantById(id, token);

    dispatch({
      type: typeUser.GET_MERCHANT_BY_ID_SUCCESS,
      payload: data?.data,
    });
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
    dispatch({
      type: typeUser.GET_MERCHANT_BY_ID_FAILURE,
      payload: error.message,
    });
  }
};
