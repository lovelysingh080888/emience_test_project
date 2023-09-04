const { SuccessMessage } = require("../helpers/response.message");
const axios = require("axios");
exports.getProduct = async (req, res) => {
  let config = {
    method: "get",
    url: "https://dummyjson.com/products",
  };
  const product = await axios.request(config);
  const data = product.data;

  const result = data.products.reduce((f, t) => {
    f[t.category] = f[t.category] || [];
    f[t.category].push(t);
    return f;
  }, Object.create(null));
  return SuccessMessage(res, "Success", 200, result);
};
