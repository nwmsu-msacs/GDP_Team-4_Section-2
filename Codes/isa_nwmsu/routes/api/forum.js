const express = require('express');
const router = express.Router();
const Forum =require('../../models/Forum');
const validateEventInput = require("../../validation/createEvent");
const keys = require("../../config/keys");
const Replies = require('../../models/replies');


//route for creating new forum

router.post('/newForum', async(req,res) => {

    let data = req.body;

    const forum = new Forum({

        title: data.title,
        description: data.description,
        createdBy: data.createdBy,
        userEmail: data.userEmail
    });

    forum.save();
    console.log(res.json(forum));
});


//route for replies for single forum item
router.post('/reply', async (req,res)=>{

    let data = req.body;

    const newReply = new Replies({
        forumId: data.forumId,
        replyBy: data.replyBy,
        replyContent: data.replyContent,
        userEmail: data.userEmail

    });

    newReply.save();
    console.log(res.json(newReply))
    
});


//delete forum

router.post("/deleteForum",(req,res) => {

    let data= req.body;
    console.log("-----------data in delete forum", data);
    
    Forum.findOneAndDelete({_id: data._id})
    .then(res.status(200).json({ response: "forum discussion deleted" }));
});

//delete replies associated with fourm when forum is deleted 
router.post("/deleteReplies",(req,res) => {

    let data= req.body;
    console.log("-----------data in delete replies", data);

    Replies.deleteMany({forumId: data._id})
    .then(res.status(200).json({ response: "forum discussion replies deleted" }));
});

//delete single reply

router.post("/deleteSingleReply",(req,res) => {

    let data= req.body;
    console.log("-----------data in delete single reply", data);

    Replies.findOneAndDelete({_id: data._id})
    
    .then(res.status(200).json({ response: "reply deleted" }));
});


//get forum discussions

router.get("/forumDiscussions",(req,res) => {

    Forum.find({}).then((forumData) => {
        if(forumData == null){
            console.error('No forum data retrieved');
            res.status(403).send('No forum data retrieved');
        }else{
            res.status(200).json({forumData})
        }
    })
});


router.get("/replies/:discussionId" ,async(req,res) => {
    Replies.find({forumId:req.params.discussionId}).then((replyData) => {
        if(replyData == null){
            console.error('No replies found');
            res.status(403).send('No replies found');
        }else{
            res.status(200).json({replyData})
        }
    })
});

router.get("/singleForum/:discussionId" ,async(req,res) => {
    Forum.find({_id:req.params.discussionId}).then((individualForum) => {
        if(individualForum == null){
            console.error('No forum found');
            res.status(403).send('No forum found');
        }else{
            res.status(200).json({individualForum})
            console.log(individualForum)
        }
    })
});


module.exports = router;
