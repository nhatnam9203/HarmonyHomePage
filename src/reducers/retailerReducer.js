import * as types from "../constants/retailerConstant";

export const retailerReducer = (
  state = {
    loading: false,
    orders: [],
    orderPages: 0,
    inventory: [],
    customer: [],
    report: [],
  },
  { type, payload }
) => {
  switch (type) {
    case types.SET_ORDERS:
      return { ...state, orders: payload.data, orderPages: payload.pages };

    case types.SET_INVENTORY:
      return { ...state, inventory: payload };

    default:
      return state;
  }
};
