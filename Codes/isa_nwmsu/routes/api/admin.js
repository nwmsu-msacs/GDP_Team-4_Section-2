const express = require("express");
const router = express.Router();

const Pickup = require("../../models/Pickup");
const Membership = require("../../models/Membership");
const Accommodation = require("../../models/Accommodation");
const Volunteer = require("../../models/Volunteer");

router.get("/pickupManagement",(req,res) => {

    Pickup.find({date :{$gte:Date.now()}}).then((pickupdata) => {
        if(pickupdata == null){
            console.error('No pickup data retrieved');
            res.status(403).send('No pickup data retrieved');
        }else{
            res.status(200).json({pickupdata})
        }
    })
});

router.get("/membershipManagement",(req,res) => {

    Membership.find({}).then((membershipdata) => {
        if(membershipdata == null){
            console.error('No membership data retrieved');
            res.status(403).send('No Membership data retrieved');
        }else{
            res.status(200).json({membershipdata})
        }
    })
});

router.get("/accommodationManagement",(req,res) => {

    Accommodation.find({toDate :{$gte:Date.now()}}).then((accommodationdata) => {
        if(accommodationdata == null){
            console.error('No accommodation data retrieved');
            res.status(403).send('No accommodation data retrieved');
        }else{
            res.status(200).json({accommodationdata})
        }
    })
});

router.get("/volunteerManagement",(req,res) => {

    Volunteer.find({}).then((volunteerdata) => {
        if(volunteerdata == null){
            console.error('No volunteer data retrieved');
            res.status(403).send('No volunteer data retrieved');
        }else{
            res.status(200).json({volunteerdata})
        }
    })
});



module.exports = router;
