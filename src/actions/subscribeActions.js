import * as typesSubs from "../constants/subscribeConstants";
import * as api from "../api/index";
import * as typeNotify from "../constants/notifyConstants";

export const subscibeNewLetter = (email) => async (dispatch) => {
  try {
    dispatch({ type: typesSubs.SUBSCRIBE_REQUEST });
    const { data } = await api.subscribe(email);
    dispatch({
      type: typesSubs.SUBSCRIBE_REQUEST_SUCCESS,
      payload: data?.data,
    });
    dispatch({ type: typeNotify.NOTIFY_SUCCESS, payload: data?.message });
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
    dispatch({
      type: typesSubs.SUBSCRIBE_REQUEST_FAILURE,
      payload: error.message,
    });
  }
};
