const express = require("express");
const router = express.Router();

const Pickup = require("../../models/Pickup");


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

    pickupData.save();

    res.status(200).json({response: "Pickup data saved"});
});

module.exports = router;