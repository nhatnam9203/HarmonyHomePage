import * as types from "../constants/notifyConstants";
import { toast } from "react-toastify";

import { MdErrorOutline } from "react-icons/md";

export const notifyReducer = (state = {}, { type, payload }) => {
  const errorText = () => (
    <div>
      <MdErrorOutline size={26} /> &nbsp;
      {payload}
    </div>
  );

  switch (type) {
    case types.NOTIFY_SUCCESS:
      return toast.success(errorText, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    case types.NOTIFY_FAILURE:
      return toast.error(errorText, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    case types.NOTIFY_INFO:
      return toast.info(payload, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    case types.NOTIFY_WARNING:
      return toast.warn(payload, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    default:
      return state;
  }
};
