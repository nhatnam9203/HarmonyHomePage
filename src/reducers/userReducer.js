import { LOGIN } from "../constants/actionTypes";

export const userLogin = (state = {}, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, user: payload };

    default:
      return state;
  }
};
