const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const VolunteerSchema = new Schema({
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
  carType: {
    type: String,
    required: true
  },
  contactNo:{
    type:Number,
    default: ""
  }
});
module.exports = Volunteer = mongoose.model("volunteer", VolunteerSchema);

