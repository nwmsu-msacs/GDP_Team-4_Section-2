const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const MembershipSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  Major: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  Gender:{
    type: String,
    required:true
  },
  contactNo:{
    type:Number,
    default: ""
  }
});
module.exports = Membership = mongoose.model("membership", MembershipSchema);

