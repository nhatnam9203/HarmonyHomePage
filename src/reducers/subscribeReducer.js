import * as types from "../constants/subscribeConstants";

export const subscribeReducer = (
  state = { loading: false, email: null },
  { type, payload }
) => {
  switch (type) {
    case types.SUBSCRIBE_REQUEST:
      return { ...state, loading: true };
    case types.SUBSCRIBE_REQUEST_SUCCESS:
      return { ...state, loading: false, email: payload };
    case types.SUBSCRIBE_REQUEST_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
