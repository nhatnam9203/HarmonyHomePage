import axios from "axios";

const url = "https://dev.harmonypayment.com/api";
// login
const loginUrl = `${url}/principal/login`;

export const login = (dataLogin) => axios.post(loginUrl, dataLogin);
