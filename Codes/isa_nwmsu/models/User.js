const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  // gender:{
  //   type: String,
  //   required: true,
  // },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  resetPasswordToken:{
    type: String,
    default:""
  },
  resetPasswordExpires:{
    type:String,
    default: ""
  },
  role:{
    type: Number,
    default:50
  }
});
module.exports = User = mongoose.model("users", UserSchema);

