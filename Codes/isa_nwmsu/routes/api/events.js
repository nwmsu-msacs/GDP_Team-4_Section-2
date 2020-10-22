const express = require('express');
const router = express.Router();
//const {check, validationresult }=require('express-validator/check');
const Event=require('../../models/Event');
const validateEventInput = require("../../validation/createEvent");
const keys = require("../../config/keys");
const { NativeDate } = require('mongoose');


// @route GET api/events/
// @desc  Get all events
// @access public

//get upcoming events
router.get("/upcomingEventsData",(req,res) => {

    Event.find({eventdate :{$gte:Date.now()}}).then((eventdata) => {
        if(eventdata == null){
            console.error('No event data retrieved');
            res.status(403).send('No event data retrieved');
        }else{
            res.status(200).json({eventdata})
        }
    })
});

//get past events

router.get("/pastEventsData",(req,res) => {

    Event.find({eventdate :{$lt:Date.now()}}).then((eventdata) => {
        if(eventdata == null){
            console.error('No event data retrieved');
            res.status(403).send('No event data retrieved');
        }else{
            res.status(200).json({eventdata})
        }
    })
});

//get single event for modify

router.get("/getEvent/:eventId",(req,res) => {

    Event.find({_id: req.params.eventId}).then((event) => {
        if(event == null){
            console.error('No event data retrieved');
            res.status(403).send('No event data retrieved');
        }else{
            res.status(200).json({event})
        }
    })
});
//delete event

router.post("/deleteEvent", (req, res) => {

    let data = req.body;

    console.log("-----------data in service", data);


          Event.findOneAndDelete({ _id: data._id })
            .then(res.status(200).json({ response: "event cancelled" }));
    
    
    
});







// @route POST api/events/createEvent
// @desc  create an event
// @access private

router.post('/createEvent',

 async (req,res)=>{
    const { errors, isValid } = validateEventInput(req.body);
   
   if(!isValid){
       return res.status(400).json({errors});
   }
   else{
       
       const newEvent=new Event({
        eventname: req.body.eventname,
        eventdate: req.body.eventdate,
        eventvenue: req.body.eventvenue,
        description: req.body.description,
        sponsor: req.body.sponsor

       });
       try{
       
       await newEvent.save().then(newEvent=>res.json(newEvent));
       console.log(newEvent);
       }catch(err){
           console.error(err.message);
           res.status(500).send('Server Error');
       }
       
   }

});

// @route Post api/events//updateEvent/:eventname
// @desc  update an event
// @access private



router.put('/modify/:eventId',  async (req,res) =>
{
  
        const { errors, isValid } = validateEventInput(req.body);
        if(!isValid){
            return res.status(400).json({errors});
        }
        else{

            try{
                //console.log();
       
                Event.findByIdAndUpdate({ _id: req.params.eventId },
                    { $set: { eventname: req.body.eventname,
                                eventdate: req.body.eventdate,
                                eventvenue: req.body.eventvenue,
                                description:req.body.description,
                                sponsor:req.body.sponsor} },
                                { useFindAndModify: false })
                    .then(res.status(200).json({ response: "event modified" }));
            
                
                }
                catch(err){
                    console.error(err);
                   res.status(500).send('Server Error');
                }
                
            
        }
    });

// @route delete api/events/deleteEvent
// @desc  delete an event
// @access private
router.delete('/deleteEvent/:eventname',async (req,res)=> {
    
    try {
        // Remove an event by eventname
        await Event.findOneAndRemove({eventname: req.params.eventname });
        res.json({message: 'User deleted successfully'});
        
    } catch (err) {
    
        conole.error(err.message);
        res.status(500).send('Server error');
        
    }
        
       
    });













module.exports = router;
