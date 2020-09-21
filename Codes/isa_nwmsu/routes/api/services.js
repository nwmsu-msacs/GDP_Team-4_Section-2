const express = require("express");
const router = express.Router();

const Pickup = require("../../models/Pickup");
const Membership = require("../../models/Membership");
const Accommodation = require("../../models/Accommodation");
const Volunteer = require("../../models/Volunteer");

// post the data of pickup 
router.post("/pickup", (req,res) => {

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
});

router.post("/accommodation", (req,res) => {

    const accommodationData = new Accommodation({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        non: req.body.non,
        daysRequired: req.body.daysRequired,
        gender: req.body.gender,
        contactNo: req.body.contactNo,
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

module.exports = router;