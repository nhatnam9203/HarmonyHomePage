import * as typeRequest from "../constants/requestInfoConstant";
import * as api from "../api/index";
import * as typeNotify from "../constants/notifyConstants";

// Request Info

export const requestInfo = (dataInfo) => async (dispatch) => {
  try {
    dispatch({ type: typeRequest.REQUEST_INFO_REQUEST });
    const { data } = await api.requestInfo(dataInfo);
    console.log("data :>> ", data);
    dispatch({
      type: typeRequest.REQUEST_INFO_REQUEST_SUCCESS,
      payload: data?.data,
    });
    dispatch({ type: typeNotify.NOTIFY_SUCCESS, payload: data?.message });
    // dispatch({ type: typeRequest.RESET_FORM_REQUEST });
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
    dispatch({
      type: typeRequest.REQUEST_INFO_REQUEST_FAILURE,
      payload: error.message,
    });
  }
};

// Reset Form
export const resetFormRequest = () => async (dispatch) => {
  dispatch({ type: typeRequest.RESET_FORM_REQUEST });
};
