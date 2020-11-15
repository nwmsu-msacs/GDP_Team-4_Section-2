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
  gender:{
    type: String,
    required:false
  },
  contactNo:{
    type:Number,
    default: ""
  },
  status:{
    type: String,
    default:"Pending"
  },
  email:{
    type:String,
    required:true
  },
  fromDate:{
    type:Date,
    required:true
  },
  toDate:{
    type:Date,
    required:true
  },
  createdBy:{
    type:String,
    required:true
  }
});
module.exports = Accommodation = mongoose.model("accommodation", AccommodationSchema);

