const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Schema for single forum
const ForumSchema = new Schema({
  title: {
    type:String,
    required:true
  },
  description:{
      type:String,
      required:true
  },
  createdBy: {
      type: String,
      required:true,
  }
});


module.exports = Forum = mongoose.model("forum", ForumSchema);

