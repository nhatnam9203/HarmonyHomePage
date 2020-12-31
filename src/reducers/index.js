import { combineReducers } from "redux";
import {
  userLoginReducer,
  myAccountReducer,
  updateMyAccountReducer,
  newsletterSubscriptionReducer,
  merchantListReducer,
  merchantByIdReducer,
  mySubscriptionReducer,
  cancelSubscriptionReducer,
  getPackageReducer,
  getRefundMoneyReducer,
  updateSubscriptionReducer,
} from "./userReducer";
import { notifyReducer } from "./notifyReducer";

export default combineReducers({
  // User
  user: userLoginReducer,
  myAccount: myAccountReducer,
  updateMyAccount: updateMyAccountReducer,
  newsletterSub: newsletterSubscriptionReducer,
  merchantList: merchantListReducer,
  merchantDetail: merchantByIdReducer,
  mySubscription: mySubscriptionReducer,
  cancelSubscription: cancelSubscriptionReducer,
  package: getPackageReducer,
  refund: getRefundMoneyReducer,
  updateSubscription: updateSubscriptionReducer,
  // Notify
  notify: notifyReducer,
});
