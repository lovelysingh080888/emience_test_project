const JWT = require("jsonwebtoken");
const httpError = require("http-errors");
const { ErrorMessage } = require("../helpers/response.message");

const accessToken = (user) => {
  return new Promise((resolve, reject) => {
    const payload = {
      id: user.id,
      email: user.email,
      fullName: user.full_name,
    };
    const secret = process.env.ACCESS_KEY_SECRET;
    const options = { expiresIn: "7d", issuer: "hiddenbrains.com" };
    JWT.sign(payload, secret, options, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};

const verifyAcessToken = (req, res, next) => {
  if (!req.headers.authorization) return ErrorMessage(res,'Error',httpError.Unauthorized());
  var token = req.headers.authorization.split(" ")[1];
  JWT.verify(token, process.env.ACCESS_KEY_SECRET, (err, payload) => {
    if (err) return ErrorMessage(res,'Error',httpError.Unauthorized());
    req.user = payload;
    next();
  });
};
module.exports = {
  accessToken,
  verifyAcessToken,
};
