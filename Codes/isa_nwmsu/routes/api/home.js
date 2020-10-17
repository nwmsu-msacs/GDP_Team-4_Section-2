const express = require("express");
const router = express.Router();

const Pickup = require("../../models/Pickup");
const Accommodation = require("../../models/Accommodation");
const Volunteer = require("../../models/Volunteer");

router.get("/userPickups/:email", async (req,res) => {

    Pickup.find({email:req.params.email}).then((userpickupdata) => {
        if(userpickupdata == null){
            console.error('No pickup data retrieved');
            res.status(403).send('No pickup data retrieved');
        }else{
            console.log("--> inside pickup")
            res.status(200).json({userpickupdata})
        }
    })
});


router.get("/userAccommodation/:email", async (req,res) => {

    Accommodation.find({email:req.params.email}).then((useraccommodationdata) => {
        if(useraccommodationdata == null){
            console.error('No accommodation data retrieved');
            res.status(403).send('No accommodation data retrieved');
        }else{
            res.status(200).json({useraccommodationdata})
        }
    })
});

router.get("/userVolunteer/:email", async (req,res) => {

    Volunteer.find({email:req.params.email}).then((uservolunteerdata) => {
        if(uservolunteerdata == null){
            console.error('No volunteer data retrieved');
            res.status(403).send('No volunteer data retrieved');
        }else{
            res.status(200).json({uservolunteerdata})
        }
    })
});



module.exports = router;
