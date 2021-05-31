import * as types from "../constants/retailerConstant";

export const retailerReducer = (
  state = {
    loading: false,
    orders: [],
    orderPages: 0,
    inventory: [],
    inventoryPages: 0,
    customer: [],
    customerPages: 0,
    report: [],
  },
  { type, payload }
) => {
  switch (type) {
    case types.RETAILER_REQUEST:
      return { ...state, loading: true };

    case types.STOP_RETAILER_REQUEST:
      return { ...state, loading: false };

    case types.SET_ORDERS:
      return { ...state, orders: payload.data, orderPages: payload.count };

    case types.SET_INVENTORY:
      return {
        ...state,
        inventory: payload.data,
        inventoryPages: payload.count,
      };

    case types.SET_CUSTOMER:
      return {
        ...state,
        customer: payload.data,
        customerPages: payload.count,
      };

    default:
      return state;
  }
};
