import { combineReducers } from "redux";
import { userLogin } from "./userReducer";

export default combineReducers({
  user: userLogin,
});
