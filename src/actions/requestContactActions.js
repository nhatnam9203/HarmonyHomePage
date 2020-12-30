import * as typeContact from "../constants/requestContactConstants";
import * as api from "../api/index";
import * as typeNotify from "../constants/notifyConstants";

// Request Contact

export const requestContact = (payload) => async (dispatch) => {
  try {
    dispatch({ type: typeContact.REQUEST_CONTACT_REQUEST });
    const { data } = await api.requestContact(payload);
    dispatch({
      type: typeContact.REQUEST_CONTACT_REQUEST_SUCCESS,
      payload: data?.data,
    });
    dispatch({ type: typeNotify.NOTIFY_SUCCESS, payload: data?.message });
  } catch (error) {
    dispatch({ type: typeNotify.NOTIFY_FAILURE, payload: error.message });
    dispatch({
      type: typeContact.REQUEST_CONTACT_REQUEST_FAILURE,
      payload: error.message,
    });
  }
};
