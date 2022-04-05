import axios from "../helper/axios";

const url = process.env.REACT_APP_API_ENDPOINT;
const url_report = process.env.REPORT_ENDPOINT;

const loginUrl = `${url}/principal/login`;

export const login = (dataLogin) => axios.post(loginUrl, dataLogin);

const myAccountUrl = `${url}/principal/myaccount`;

export const getMyAccount = (token) =>
  axios.get(myAccountUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// Update My Account
export const updateMyAccount = (payload, token) => {
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

const getStateUrl = `${url}/state`;
export const getState = () =>
  axios.get(getStateUrl);

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

export const getByPage = (requestUrl, token) =>
  axios.get(`${url}/${requestUrl}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


export const getReportByPage = (requestUrl, token) => {
  return axios.get(`${url}/${requestUrl}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}


export const uploadFile = (requestUrl, formData) => {
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };
  return axios.post(`${url}/${requestUrl}`, formData, config);
};

export const uploadImportProduct = (requestUrl, formData, token) => {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.post(`${url}/${requestUrl}`, formData, config);
};

export const updateImageProduct = (requestUrl, payload, token) => {
  return axios.put(`${url}/${requestUrl}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const postApi = (requestUrl, body, token) => {
  return axios.post(`${url}/${requestUrl}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const putApi = (requestUrl, body, token) => {
  return axios.put(`${url}/${requestUrl}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getApi = (requestUrl, token) =>
  axios.get(`${url}/${requestUrl}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const deleteApi = (requestUrl, token) => {
  return axios.delete(`${url}/${requestUrl}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};