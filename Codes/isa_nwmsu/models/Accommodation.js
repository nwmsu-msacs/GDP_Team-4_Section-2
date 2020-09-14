const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const AccommodationSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  non: {
    type: Number,
    required: true
  },
  daysRequired: {
    type: Number,
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
module.exports = Accommodation = mongoose.model("accommodation", AccommodationSchema);

