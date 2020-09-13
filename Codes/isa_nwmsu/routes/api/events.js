const express = require('express');
const router = express.Router();
//const {check, validationresult }=require('express-validator/check');
const Event=require('../../models/Event');
const validateEventInput = require("../../validation/createEvent");
const keys = require("../../config/keys");


// @route GET api/events/
// @desc  Get all events
// @access public
router.get('/',async (req,res)=> {
    
try {
    const events=await Event.find();
    res.json(events);
    
} catch (err) {

    conole.error(err.message);
    res.status(500).send('Server error');
    
}
    
   
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
        timings: req.body.timings,
        description: req.body.description

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

router.post('/updateEvent/:eventname',  async (req,res) =>
{
  
        const { errors, isValid } = validateEventInput(req.body);
        if(!isValid){
            return res.status(400).json({errors});
        }
        else{
            
            try{
                //console.log();
       
                await Event.findOne({eventname: req.params.eventname }).then(
                    (event)=> {
                        //const updatedEvent=new Event({
                            event.eventname=req.body.eventname;
                            event.eventdate=req.body.eventdate;
                            event.eventvenue= req.body.eventvenue;
                            event.timings= req.body.timings;
                            event.description= req.body.description;
                    
                           //});
                        event.save().then(event=>res.json(event));
                        res.status(201).json({
                            message: 'Event updated Successfully'
                        });
                    }
                )
                }
                catch(err){
                    //console.error(`{req.params.eventname}`);
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