import * as types from "../constants/userConstants";

const initialState = {
  loading: false,
  user: "",
};

export const userLoginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_REQUEST:
      return { ...state, loading: true };

    case types.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case types.LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case types.USER_LOGOUT:
      return {
        loading: false,
        user: "",
      };

    default:
      return state;
  }
};

export const myAccountReducer = (
  state = { loading: false, account: "" },
  { type, payload }
) => {
  switch (type) {
    case types.GET_MY_ACCOUNT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_MY_ACCOUNT_SUCCESS:
      return {
        loading: false,
        account: payload,
      };
    case types.GET_MY_ACCOUNT_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export const updateMyAccountReducer = (
  state = { updateStatus: false },
  { type, payload }
) => {
  switch (type) {
    case types.UPDATE_MY_ACCOUNT_REQUEST:
      return {
        updateStatus: true,
      };

    case types.UPDATE_MY_ACCOUNT_SUCCESS:
      return {
        updateStatus: false,
      };

    case types.UPDATE_MY_ACCOUNT_FAILURE:
      return {
        updateStatus: false,
      };
    default:
      return state;
  }
};

export const newsletterSubscriptionReducer = (
  state = { newsletterSubStatus: false },
  { type, payload }
) => {
  switch (type) {
    case types.NEWSLETTER_SUB_REQUEST:
      return {
        newsletterSubStatus: true,
      };

    case types.NEWSLETTER_SUB_SUCCESS:
      return {
        newsletterSubStatus: false,
      };

    case types.NEWSLETTER_SUB_FAILURE:
      return {
        newsletterSubStatus: false,
      };
    default:
      return state;
  }
};

export const merchantListReducer = (
  state = { loading: false, list: [] },
  { type, payload }
) => {
  switch (type) {
    case types.GET_ALL_MERCHANT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_ALL_MERCHANT_SUCCESS:
      return {
        loading: false,
        list: payload,
      };

    case types.GET_ALL_MERCHANT_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export const merchantByIdReducer = (
  state = { loading: false, detail: "" },
  { type, payload }
) => {
  switch (type) {
    case types.GET_MERCHANT_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_MERCHANT_BY_ID_SUCCESS:
      return {
        loading: false,
        detail: payload,
      };

    case types.GET_MERCHANT_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export const mySubscriptionReducer = (
  state = { loading: false, subscriptionList: [], subscription: "" },
  { type, payload }
) => {
  switch (type) {
    case types.GET_SUBSCRIPTION_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        loading: false,
        subscriptionList: payload,
      };

    case types.GET_SUBSCRIPTION_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case types.GET_SUBSCRIPTION_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_SUBSCRIPTION_BY_ID_SUCCESS:
      return {
        ...state,
        subscription: payload,
        loading: false,
      };

    case types.GET_SUBSCRIPTION_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export const cancelSubscriptionReducer = (
  state = { loading: false, message: "" },
  { type, payload }
) => {
  switch (type) {
    case types.CANCEL_SUBSCRIPTION_REQUEST:
      return {
        ...state,
        loading: true,
        message: "",
      };

    case types.CANCEL_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload,
      };
    case types.CANCEL_SUBSCRIPTION_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export const getPackageReducer = (
  state = { loading: false, packageList: [] },
  { type, payload }
) => {
  switch (type) {
    case types.GET_PACKAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PACKAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        packageList: payload,
      };
    case types.GET_PACKAGE_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export const getRefundMoneyReducer = (
  state = { loading: false, refundAmount: "" },
  { type, payload }
) => {
  switch (type) {
    case types.GET_REFUND_MONEY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_REFUND_MONEY_SUCCESS:
      return {
        ...state,
        loading: false,
        refundAmount: payload,
      };
    case types.GET_REFUND_MONEY_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export const updateSubscriptionReducer = (
  state = { loading: false, message: "" },
  { type, payload }
) => {
  switch (type) {
    case types.UPDATE_SUBSCRIPTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload,
      };
    case types.UPDATE_SUBSCRIPTION_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

// ForgotPassword

export const forgotPasswordReducer = (
  state = { loading: false, message: "" },
  { type, payload }
) => {
  switch (type) {
    case types.GET_FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload,
      };
    case types.GET_FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export const getPackagePricingReducer = (
  state = { loading: false, packageList: [] },
  { type, payload }
) => {
  switch (type) {
    case types.GET_PACKAGE_PRICING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PACKAGE_PRICING_SUCCESS:
      return {
        ...state,
        loading: false,
        packageList: payload,
      };
    case types.GET_PACKAGE_PRICING_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
