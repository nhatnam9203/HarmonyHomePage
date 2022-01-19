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
  forgotPasswordReducer,
  getPackagePricingReducer,
  renewSubscriptionReducer,
  resetPasswordReducer,
} from "./userReducer";
import { requestInfoReducer } from "./requestInfoReducer";
import { notifyReducer } from "./notifyReducer";
import { subscribeReducer } from "./subscribeReducer";
import { requestContactReducer } from "./requestContactReducer";
import { retailerReducer } from "./retailerReducer";
import { reportPosReducer } from "./reportPosReducer";

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
  forgotPassword: forgotPasswordReducer,
  renewSubscription: renewSubscriptionReducer,
  // Request
  request: requestInfoReducer,
  // Notify
  notify: notifyReducer,
  // Subscribe
  subscribe: subscribeReducer,
  // Contact us
  contactUs: requestContactReducer,
  // Get Package Pricing
  pricing: getPackagePricingReducer,
  // Reset Password
  resetPassword: resetPasswordReducer,
  retailer: retailerReducer,
  reportPos : reportPosReducer,
});
