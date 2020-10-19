const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema for replies

const ReplySchema = new Schema({

    forumId: {
        type: String,
        required:true,
    },
    replyContent:{
        type:String,
        required:true
    },
    replyBy:{
        type:String,
        required:true
    },
    replyTime:{
        type: Date,
        default: Date.now()
    },
    userEmail:{
        type:String,
        required:true
    }
});

module.exports = Replies = mongoose.model("replies", ReplySchema);
