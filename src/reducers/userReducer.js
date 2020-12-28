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
