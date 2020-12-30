import * as types from "../constants/requestInfoConstant";

export const requestInfoReducer = (
  state = { loading: false, info: null },
  { type, payload }
) => {
  switch (type) {
    case types.REQUEST_INFO_REQUEST:
      return { ...state, loading: true };
    case types.REQUEST_INFO_REQUEST_SUCCESS:
      return { ...state, loading: false, info: payload };
    case types.REQUEST_INFO_REQUEST_FAILURE:
      return { ...state, loadding: false };
    case types.RESET_FORM_REQUEST:
      return { ...state, loadding: false, info: null };
    default:
      return state;
  }
};
