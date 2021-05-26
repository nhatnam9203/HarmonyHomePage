import * as types from "../constants/retailerConstant";

export const retailerReducer = (
  state = {
    loading: false,
    orders: [],
    orderPages: 0,
    inventory: [],
    inventoryPages: 0,
    customer: [],
    report: [],
  },
  { type, payload }
) => {
  switch (type) {
    case types.SET_ORDERS:
      return { ...state, orders: payload.data, orderPages: payload.count };

    case types.SET_INVENTORY:
      return {
        ...state,
        inventory: payload.data,
        inventoryPages: payload.count,
      };

    default:
      return state;
  }
};
