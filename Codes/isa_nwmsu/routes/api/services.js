const express = require("express");
const router = express.Router();

const Pickup = require("../../models/Pickup");
const Membership = require("../../models/Membership");
const Accommodation = require("../../models/Accommodation");
const Volunteer = require("../../models/Volunteer");
const validatePickupInput = require("../../validation/pickup");
// post the data of pickup 
router.post("/pickup", async (req,res) => {
    const {errors, isValid } = validatePickupInput(req.body)

    if(!isValid){
        return res.status(400).json({errors});
    }
    else{

    const pickupData = new Pickup({
        name: req.body.name,
        email: req.body.email,
        cell: req.body.cell,
        luggage: req.body.luggage,
        from: req.body.from,
        to: req.body.to,
        date: req.body.date,
        airline: req.body.airline,
        flightNo: req.body.flightNo
    });
// method to save data in database
    pickupData.save();

    res.status(200).json({response: "Pickup data saved"});
}
});

router.post("/accommodation", (req,res) => {

    const accommodationData = new Accommodation({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        non: req.body.non,
        daysRequired: req.body.daysRequired,
        gender: req.body.gender,
        contactNo: req.body.contactNo,
        email: req.body.email
    });

    accommodationData.save();

    res.status(200).json({response: "Accommodation data saved"});
});

router.post("/membership", (req,res) => {

    const membershipData = new Membership({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        major: req.body.major,
        email: req.body.email,
        gender: req.body.gender,
        contactNo: req.body.contactNo,
    });

    membershipData.save();

    res.status(200).json({response: "Membership data saved"});
});

router.post("/volunteer", (req,res) => {
    
    const volunteerData = new Volunteer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        non: req.body.non,
        carType: req.body.carType,
        contactNo: req.body.contactNo,
    });

    volunteerData.save();

    res.status(200).json({response: "Volunteer data saved"});
});


//Status update accept & reject

router.post("/accommodationaccept", (req, res) =>{

    Accommodation.findOne({email: data.email})
    .then(Accommodation.update({status: "Accepted"}))
    .then(console.log("--Accepted--")).then(res.status(200).json({response: "accommodation accepted"}))
});
module.exports = router;