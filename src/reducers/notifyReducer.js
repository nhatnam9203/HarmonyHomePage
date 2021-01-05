import * as types from "../constants/notifyConstants";
import toast from "react-hot-toast";

export const notifyReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case types.NOTIFY_SUCCESS:
      return toast.success(payload);

    case types.NOTIFY_FAILURE:
      return toast.error(payload);

    default:
      return state;
  }
};
