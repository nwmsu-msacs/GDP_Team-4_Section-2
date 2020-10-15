const express = require('express');
const router = express.Router();
//const {check, validationresult }=require('express-validator/check');
const Forum =require('../../models/Forum');
const validateEventInput = require("../../validation/createEvent");
const keys = require("../../config/keys");
const Replies = require('../../models/replies');
const Forum = require("../../models/Forum");


//route for creating new forum

router.post('/newForum', async(req,res) => {

    let data = req.body;

    const forum = new Forum({

        title: data.title,
        description: data.description

    });

    forum.save();
    console.log(res.json(forum));
});


//route for replies for single forum item
router.post('/reply/:forumId', async (req,res)=>{

    let data = req.body;

    const newReply = new Replies({
        forumId: req.params.forumId,
        replyBy: data.replyBy,
        replyContent: data.replyContent,

    });

    newReply.save();
    console.log(res.json(newReply))
    
});





module.exports = router;
