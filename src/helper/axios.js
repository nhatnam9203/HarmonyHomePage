import axios from "axios";
import { login } from '../api/index';

const instance = axios.create();

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

const refreshToken = async() =>{
  const dataLogin = JSON.parse(localStorage.getItem("dataLogin"));
  const { data = null } = await login(dataLogin);
  localStorage.setItem("user", JSON.stringify(data?.data));
  localStorage.setItem("dataLogin", JSON.stringify(dataLogin));
  return data;
}

// Add a response interceptor
instance.interceptors.response.use(
  async function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.data.codeNumber === 401) {
      const rs = await refreshToken();
      const config = response.config;
      config.headers.Authorization = `Bearer ${rs?.data?.token}`;

      return instance(config);
    }

    return response;
  },
  function (error) {
    console.log("ERROR", error);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
