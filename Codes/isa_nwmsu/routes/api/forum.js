const express = require('express');
const router = express.Router();
//const {check, validationresult }=require('express-validator/check');
const Forum =require('../../models/Forum');
const validateEventInput = require("../../validation/createEvent");
const keys = require("../../config/keys");
const Replies = require('../../models/replies');
// const Forum = require("../../models/Forum");


//route for creating new forum

router.post('/newForum', async(req,res) => {

    let data = req.body;

    const forum = new Forum({

        title: data.title,
        description: data.description,
        createdBy: data.createdBy
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

    });

    newReply.save();
    console.log(res.json(newReply))
    
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
