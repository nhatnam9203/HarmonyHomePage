import axios from "axios";

const url = "https://dev.harmonypayment.com/api";

// Login
const loginUrl = `${url}/principal/login`;

export const login = (dataLogin) => axios.post(loginUrl, dataLogin);

// Get My Account
const myAccountUrl = `${url}/principal/myaccount`;

export const getMyAccount = (token) =>
  axios.get(myAccountUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// Update My Account
export const updateMyAccount = (payload, token) =>
  axios.put(
    myAccountUrl,
    { ...payload },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

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
