const express = require('express');
const router = express.Router();
//const {check, validationresult }=require('express-validator/check');
const Event=require('../../models/Event');
const validateEventInput = require("../../validation/createEvent");
const keys = require("../../config/keys");


// @route GET api/events/all
// @desc  Get all events
// @access public
router.get('/',async (req,res)=> {
    
return res.send('events route');
    
   
});



// @route POST api/events/all
// @desc  create or update an event
// @access private

router.post('/createEvent',

 (req,res)=>{
    const { errors, isValid } = validateEventInput(req.body);
   
   if(!isValid){
       return res.status(400).json({errors});
   }
   else{
       const newEvent=new Event({
        eventname: req.body.eventname,
        eventdate: req.body.eventdate,
        eventvenue: req.body.eventvenue,
        timings: req.body.timings,
        description: req.body.description

       });
       
       newEvent.save().then(newEvent=>res.json(newEvent));
       console.log(newEvent);
       
   }

});




module.exports = router;