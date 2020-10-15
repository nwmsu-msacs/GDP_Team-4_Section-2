const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema for replies

// const ReplySchema = new Schema({
//     replyContent:{
//         type:String,
//         required:true
//     },
//     replyBy:{
//         type:String,
//         required:true
//     },
//     replyTime:{
//         type: Date,
//         default: Date.now()
//     }
// });

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
});


module.exports = Forum = mongoose.model("forum", ForumSchema);

