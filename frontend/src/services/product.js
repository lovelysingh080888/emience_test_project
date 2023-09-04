import axios from "axios";
const url = process.env.REACT_APP_API_URL;
const AUTH_TOKEN = localStorage.getItem('accessKey')

export const getProductService = async () => {
  console.log(AUTH_TOKEN)
  const result = await axios.get(`${url}/api/product`,{headers:{'Authorization':`Bearer ${AUTH_TOKEN}`}});
  return result.data;
};
