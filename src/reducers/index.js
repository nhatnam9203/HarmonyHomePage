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
} from "./userReducer";
import { requestInfoReducer } from "./requestInfoReducer";
import { notifyReducer } from "./notifyReducer";
import { subscribeReducer } from "./subscribeReducer";
import { requestContactReducer } from "./requestContactReducer";

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
  // Request
  request: requestInfoReducer,
  // Notify
  notify: notifyReducer,
  // Subscribe
  subscribe: subscribeReducer,
  // Contact us
  contactUs: requestContactReducer,
});
