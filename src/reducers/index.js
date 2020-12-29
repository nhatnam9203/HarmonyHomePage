import { combineReducers } from "redux";
import {
  userLoginReducer,
  myAccountReducer,
  updateMyAccountReducer,
} from "./userReducer";
import { notifyReducer } from "./notifyReducer";

export default combineReducers({
  // User
  user: userLoginReducer,
  myAccount: myAccountReducer,
  updateMyAccount: updateMyAccountReducer,

  // Notify
  notify: notifyReducer,
});
