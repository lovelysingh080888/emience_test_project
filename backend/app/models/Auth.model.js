const mongoose = require('mongoose');
const bcrypt = require("bcrypt")
const validator = require("validator");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,'Username required'],
        unique:true,

      },
    password:{
        type: String,
        required: [true,"Password required"],
        validate(value) {
            if (!validator.isLength(value, { min: 6, max: 30 })) {
              throw Error("Password length should be between 6-30");
            }
          },
        },
      
}, {
    timestamps: true,
  });
userSchema.pre("save", async function (next) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      next();
    } catch (error) {
      console.log(error);
    }
  });
  
userSchema.methods.isValidPassword = async function (password) {
    try {
      return await bcrypt.compare(password, this.password);
    } catch (error) {
      throw error;
    }
  };
const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel