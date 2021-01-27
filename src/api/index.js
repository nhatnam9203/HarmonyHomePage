import axios from "axios";
import instance from "../helper/axios";

// const url = "https://dev.harmonypayment.com/api";

// Staging
const url = "https://staging.harmonypayment.com/api";

// Prod
// const url = "https://api.harmonypayment.com/api";

// Login
const loginUrl = `${url}/principal/login`;

export const login = (dataLogin) => instance.post(loginUrl, dataLogin);

// Get My Account
const myAccountUrl = `${url}/principal/myaccount`;

export const getMyAccount = (token) =>
  axios.get(myAccountUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// Update My Account
export const updateMyAccount = (payload, token) => {
  console.log("payload", payload);

  const passwords = {
    newPassword: payload?.newPassword,
    oldPassword: payload?.oldPassword,
  };

  return axios.put(
    myAccountUrl,
    { ...payload, passwords },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// Newsletter Subscription
const newsletterSubscriptionUrl = `${url}/principal/newsletter`;

export const newsletterSubscription = (enable, token) =>
  axios.put(
    newsletterSubscriptionUrl,
    { enable },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

// Get Merchant List
const getMerchantListUrl = `${url}/principal/merchants`;

export const getMerchantList = (token) =>
  axios.get(getMerchantListUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// Get Merchant By ID
const getMerchantByIdUrl = `${url}/merchant/`;

export const getMerchantById = (id, token) =>
  axios.get(`${getMerchantByIdUrl}${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// Get My Subscription
const getMySubscriptionUrl = `${url}/subscription`;

export const getMySubscription = (token) =>
  axios.get(getMySubscriptionUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// Get Subscription By Id
export const getSubscriptionById = (id, token) =>
  axios.get(`${getMySubscriptionUrl}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// Cancel Subscription By Id
export const cancelSubscriptionById = (id, token) =>
  axios.put(`${getMySubscriptionUrl}/disable/${id}`, null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// Update Subscription By Id
export const updateSubscriptionById = (value, token) => {
  const { id } = value;

  return axios.put(
    `${getMySubscriptionUrl}/${id}`,
    { ...value },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// Renew Subscription By Id
export const renewSubscriptionById = (value, token) => {
  const { id } = value;
  return axios.put(
    `${getMySubscriptionUrl}/renew/${id}`,
    { ...value },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// Get package
const getPackageUrl = `${url}/package`;
export const getPackage = (token) =>
  axios.get(getPackageUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// Get Refund Money
export const getRefundMoney = (id, token) =>
  axios.get(`${getMySubscriptionUrl}/refundAmount/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
// Request Info
const requestInfoUrl = `${url}/requestinformation`;

export const requestInfo = (dataInfo) => axios.post(requestInfoUrl, dataInfo);

// Subscribe newsletter
const subscribeURL = `${url}/newsletter`;

export const subscribe = (payload) => axios.post(subscribeURL, payload);

// RequestContact
const requestContactURL = `${url}/requestcontact`;

export const requestContact = (payload) =>
  axios.post(requestContactURL, payload);

// Forgot Password
const forgotPasswordUrl = `${url}/principal/forgotpassword?email=`;
export const forgotPassword = (email) =>
  axios.get(`${forgotPasswordUrl}${email}`);

// Get PackagePricing
export const getPackagePricing = () => axios.get(getPackageUrl);

// Reset Password
const resetPasswordUrl = `${url}/principal/savenewpassword`;

export const resetPassword = (id, token, payload) =>
  axios.post(`${resetPasswordUrl}/${id}${token}`, payload);
