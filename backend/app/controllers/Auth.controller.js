const httpError = require("http-errors");
const UserModel = require("../models/Auth.model");
const { accessToken } = require("../middleware/auth.middleware");
const { SuccessMessage, ErrorMessage } = require("../helpers/response.message");

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    let user = await UserModel.findOne({ username });
    if (!user) throw httpError.NotFound("You are not a valid user");

    const isValid = await user.isValidPassword(password);
    if (!isValid) throw httpError.Unauthorized("Username/Password is Invalid");

    const accesskey = await accessToken(user);
    return SuccessMessage(res, "Login Successfully",200, { accesskey, user });
  } catch (error) {
    return ErrorMessage(res,"Error", error)
  }
};

exports.register = async (req, res, next) => {
  try {
    const {username, password} = req.body
    const user = await UserModel.findOne({ username });
    if (user)
      throw httpError.Conflict(`${user.username} is already has been registered`);

    const newuser = new UserModel({username,password});
    const saveduser = await newuser.save();
    const accessKey = await accessToken(saveduser);
    return SuccessMessage(res,"Registered Sucessfully",201,{accessKey,user:saveduser})

  } catch (error) {
     return ErrorMessage(res,"Error", error)
    }

};
