import * as typeUser from "../constants/userConstants";
import * as api from "../api/index";
import * as typeNotify from "../constants/notifyConstants";

import { history } from "../History/history";

// User Login
export const userLogin = (dataLogin) => async (dispatch) => {
  try {
    dispatch({ type: typeUser.LOGIN_REQUEST });
    const { data = null } = await api.login(dataLogin);
    if (data && Number(data.codeNumber) === 200) {
      localStorage.setItem("user", JSON.stringify(data?.data));
      localStorage.setItem("dataLogin", JSON.stringify(dataLogin));
      dispatch({ type: typeUser.LOGIN_REQUEST_SUCCESS, payload: data?.data });

      const x = window.location.href;
      const url = new URL(x).origin;
      setTimeout(() => {
        window.location.href = `${url}/account/my-account`;
      }, 300);
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
      dispatch({ type: typeUser.LOGIN_REQUEST_FAILURE, payload: data.message });
    }
  } catch (error) {
    console.log({ error })
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
    dispatch({ type: typeUser.LOGIN_REQUEST_FAILURE, payload: error.message });
  }
};

// User logout
export const userLogoutAction = () => async (dispatch) => {
  dispatch({ type: typeUser.USER_LOGOUT });
  // history.push("/home");
  const x = window.location.href;
  const url = new URL(x).origin;
  setTimeout(() => {
    window.location.href = `${url}/home`;
  }, 300);
};

// Get My Account
export const getMyAccountAction = () => async (dispatch, getState) => {
  try {

    dispatch({
      type: typeUser.GET_MY_ACCOUNT_REQUEST,
    });

    const token = JSON.parse(localStorage.getItem("user"))?.token || "";

    const { data = null } = await api.getMyAccount(token);

    dispatch({
      type: typeUser.GET_MY_ACCOUNT_SUCCESS,
      payload: data?.data,
    });
  } catch (error) {
    // if (error.message.includes("401")) {
    //   dispatch(userLogoutAction());
    // }
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

    const token = JSON.parse(localStorage.getItem("user"))?.token || "";

    const { data = null } = await api.updateMyAccount(payload, token);

    if (data && Number(data?.codeNumber) === 200) {
      dispatch({
        type: typeUser.UPDATE_MY_ACCOUNT_SUCCESS,
        payload: data?.message,
      });
      dispatch({ type: typeNotify.NOTIFY_SUCCESS, payload: data?.message });

      const { IsChangePassword, email, newPassword } = payload;

      const dataLogin = { email, password: newPassword };
      if (IsChangePassword) {
        localStorage.setItem("dataLogin", JSON.stringify(dataLogin));
      }

      setTimeout(() => {
        history.goBack();
      }, 1000);
    } else {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
      dispatch({
        type: typeUser.UPDATE_MY_ACCOUNT_FAILURE,
        payload: data.message,
      });
    }
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

    const token = JSON.parse(localStorage.getItem("user"))?.token || "";

    const { data = null } = await api.newsletterSubscription(enable, token);

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

    const token = JSON.parse(localStorage.getItem("user"))?.token || "";

    const { data = null } = await api.getMerchantList(token);

    console.log('get merchant lis : ', { data });

    dispatch({
      type: typeUser.GET_ALL_MERCHANT_SUCCESS,
      payload: data?.data,
    });
  } catch (error) {
    console.log({ error })
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
    dispatch({
      type: typeUser.GET_ALL_MERCHANT_FAILURE,
      payload: error.message,
    });
  }
};

// Get Merchant By ID Action
export const getMerchantByIdAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: typeUser.GET_MERCHANT_BY_ID_REQUEST,
    });

    const token = JSON.parse(localStorage.getItem("user"))?.token || "";

    const { data = null } = await api.getMerchantById(id, token);

    if (!data) return;

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

// Get My Subscriptions Action
export const getMySubscriptionAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: typeUser.GET_SUBSCRIPTION_REQUEST,
    });

    const token = JSON.parse(localStorage.getItem("user"))?.token || "";

    const { data = null } = await api.getMySubscription(token);

    if (!data) return;

    dispatch({
      type: typeUser.GET_SUBSCRIPTION_SUCCESS,
      payload: data?.data,
    });
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
    dispatch({
      type: typeUser.GET_SUBSCRIPTION_FAILURE,
      payload: error.message,
    });
  }
};

// Get Subscription By Id Action
export const getMySubscriptionByIdAction = (id) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: typeUser.GET_SUBSCRIPTION_BY_ID_REQUEST,
    });

    const token = JSON.parse(localStorage.getItem("user"))?.token || "";

    const { data = null } = await api.getSubscriptionById(id, token);

    if (!data) return;

    dispatch({
      type: typeUser.GET_SUBSCRIPTION_BY_ID_SUCCESS,
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

// Cancel Subscription Action
export const cancelSubscriptionByIdAction = (id) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: typeUser.CANCEL_SUBSCRIPTION_REQUEST,
    });

    const token = JSON.parse(localStorage.getItem("user"))?.token || "";

    const { data = null } = await api.cancelSubscriptionById(id, token);

    if (!data) return;

    dispatch({
      type: typeUser.CANCEL_SUBSCRIPTION_SUCCESS,
      payload: data?.message,
    });

    dispatch({ type: typeNotify.NOTIFY_SUCCESS, payload: data?.message });
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
    dispatch({
      type: typeUser.CANCEL_SUBSCRIPTION_FAILURE,
      payload: error.message,
    });
  }
};

// Get Package Action
export const getPackageAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: typeUser.GET_PACKAGE_REQUEST,
    });

    const token = JSON.parse(localStorage.getItem("user"))?.token || "";

    const { data = null } = await api.getPackage(token);

    if (!data) return;

    dispatch({
      type: typeUser.GET_PACKAGE_SUCCESS,
      payload: data?.data,
    });
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
    dispatch({
      type: typeUser.GET_PACKAGE_FAILURE,
      payload: error.message,
    });
  }
};

// Get Refund Money Action
export const getRefundMoneyAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: typeUser.GET_REFUND_MONEY_REQUEST,
    });

    const token = JSON.parse(localStorage.getItem("user"))?.token || "";

    const { data = null } = await api.getRefundMoney(id, token);

    if (!data) return;


    if (data.codeNumber === 401) {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
      dispatch(userLogoutAction());
      return;
    }

    dispatch({
      type: typeUser.GET_REFUND_MONEY_SUCCESS,
      payload: data?.data,
    });
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
    dispatch({
      type: typeUser.GET_REFUND_MONEY_FAILURE,
      payload: error.message,
    });
  }
};

// Update Subscription Action
export const updateSubscriptionAction = (value) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: typeUser.UPDATE_SUBSCRIPTION_REQUEST,
    });

    const token = JSON.parse(localStorage.getItem("user"))?.token || "";

    const { data = null } = await api.updateSubscriptionById(value, token);

    if (!data) return;

    if (data.codeNumber === 401) {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
      dispatch(userLogoutAction());
      return;
    }

    dispatch({
      type: typeUser.UPDATE_SUBSCRIPTION_SUCCESS,
      payload: data?.data,
    });

    dispatch({ type: typeNotify.NOTIFY_SUCCESS, payload: data?.message });

    history.goBack();
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
    dispatch({
      type: typeUser.UPDATE_SUBSCRIPTION_FAILURE,
      payload: error.message,
    });
  }
};

// Renew Subscription
export const renewSubscriptionAction = (value) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: typeUser.RENEW_SUBSCRIPTION_REQUEST,
    });

    const token = JSON.parse(localStorage.getItem("user"))?.token || "";

    const { data = null } = await api.renewSubscriptionById(value, token);

    if (!data) return;

    dispatch({
      type: typeUser.RENEW_SUBSCRIPTION_SUCCESS,
      payload: data?.data,
    });

    dispatch({ type: typeNotify.NOTIFY_SUCCESS, payload: data?.message });

    history.goBack();
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
    dispatch({
      type: typeUser.RENEW_SUBSCRIPTION_FAILURE,
      payload: error.message,
    });
  }
};

// ForgotPassword
export const forgotPasswordAction = (value) => async (dispatch) => {
  try {
    dispatch({
      type: typeUser.GET_FORGOT_PASSWORD_REQUEST,
    });

    const { data = null } = await api.forgotPassword(value.email);
    if (!data) return;

    if (data.codeNumber !== 200) {
      dispatch({
        type: typeNotify.NOTIFY_FAILURE,
        payload: "Your email doesnt not exist.",
      });
      dispatch({
        type: typeUser.GET_FORGOT_PASSWORD_FAILURE,
        payload: data.message,
      });
    } else {
      dispatch({
        type: typeUser.GET_FORGOT_PASSWORD_SUCCESS,
        payload: data?.data,
      });
      dispatch({ type: typeNotify.NOTIFY_SUCCESS, payload: data?.message });
    }
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
    dispatch({
      type: typeUser.GET_FORGOT_PASSWORD_FAILURE,
      payload: error.message,
    });
  }
};

// Get Package Pricing Action
export const getPackagePricingAction = () => async (dispatch) => {
  try {
    dispatch({
      type: typeUser.GET_PACKAGE_PRICING_REQUEST,
    });
    const { data = null } = await api.getPackagePricing();
    if (!data) return;

    if (data && data.codeNumber === 401) {
      dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: data.message });
      dispatch(userLogoutAction());
      return;
    }

    dispatch({
      type: typeUser.GET_PACKAGE_PRICING_SUCCESS,
      payload: data?.data,
    });
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
    dispatch({
      type: typeUser.GET_PACKAGE_PRICING_FAILURE,
      payload: error.message,
    });
  }
};

// Post Reset Password
export const resetPasswordAction = (id, tokenid, payload) => async (
  dispatch
) => {
  try {
    dispatch({
      type: typeUser.RESET_PASSWORD_REQUEST,
    });
    const { data = null } = await api.resetPassword(id, tokenid, payload);

    if (!data) return;

    dispatch({
      type: typeUser.RESET_PASSWORD_SUCCESS,
      payload: data?.data,
    });
    dispatch({ type: typeNotify.NOTIFY_SUCCESS, payload: data?.message });
    const x = window.location.href;
    const url = new URL(x).origin;
    setTimeout(() => {
      window.location.href = `${url}/home`;
    }, 200);
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
    dispatch({
      type: typeUser.RESET_PASSWORD_FAILURE,
      payload: error.message,
    });
  }
};
