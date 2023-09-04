import axios from "axios";
const url = process.env.REACT_APP_API_URL;


export const loginService = async (payload) => {
  const result = await axios.post(`${url}/auth/login`, payload);
  return result.data;
};

export const signupService = async (payload) => {
  const result = await axios.post(`${url}/auth/signup`, payload);
  return result.data;
};
