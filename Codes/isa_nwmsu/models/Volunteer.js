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
  },
  status:{
    type:String,
    default:"Pending"
  },
  email:{
    type:String,
    required:true
  },
  createdBy:{
    type:String,
    required:true
  }
});
module.exports = Volunteer = mongoose.model("volunteer", VolunteerSchema);

