const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number},
    gender: {type: String},
    password: {type: String, required: true},
    admin: {type: Boolean, default: false},
  },
  {timestamps: true}
);

const User = mongoose.model("User", userSchema);

module.exports = User;
