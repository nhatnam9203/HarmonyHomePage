import { LOGIN } from "../constants/actionTypes";
import * as api from "../api/index";
import { history } from "../History/history";

// actions login
export const userLogin = (dataLogin) => async (dispatch) => {
  //   const history = useHistory();
  try {
    const { data } = await api.login(dataLogin);
    console.log("data", data);
    if (Number(data.codeNumber) !== 200) {
      localStorage.setItem("user", JSON.stringify(data?.data));
      dispatch({ type: LOGIN, payload: data.data });
      history.push("/account");
    }
  } catch (error) {
    console.log(error.message);
  }
};
