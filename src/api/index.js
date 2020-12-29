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
