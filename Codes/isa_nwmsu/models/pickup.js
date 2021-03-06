const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const PickupSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cell: {
    type: Number,
    required: true
  },
  luggage:{
    type: Number,
    required:true
  },
  from:{
    type: String,
    required:true
  },
  to:{
    type: String,
    required:true
  },
  airline:{
    type: String,
    required: false
  },
  flightNo:{
    type:String,
    required:false
  },
  status:{
    type:String,
    default:"Pending"
  },
  createdBy:{
    type:String,
    required:true,
  }

});
module.exports = Pickup = mongoose.model("pickup", PickupSchema);

