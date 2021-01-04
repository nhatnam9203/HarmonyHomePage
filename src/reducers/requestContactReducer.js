import * as types from "../constants/requestContactConstants";

export const requestContactReducer = (
  state = { loading: false, contact: null },
  { type, payload }
) => {
  switch (type) {
    case types.REQUEST_CONTACT_REQUEST:
      return { ...state, loading: true };
    case types.REQUEST_CONTACT_REQUEST_SUCCESS:
      return { ...state, loading: false, contact: payload };
    case types.REQUEST_CONTACT_REQUEST_FAILURE:
      return { ...state, loadding: false };
    default:
      return state;
  }
};
