const express = require("express");
const router = express.Router();

const Pickup = require("../../models/Pickup");
const Membership = require("../../models/Membership");
const Accommodation = require("../../models/Accommodation");
const Volunteer = require("../../models/Volunteer");
const FAQ = require("../../models/FAQ");
const { json } = require("body-parser");


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


router.post("/addFaq", (req,res) =>{

    const faqData = new FAQ({
        question: req.body.question,
        answer: req.body.answer
    })

    faqData.save();

    res.status(200).json({response:"FAQ Saved"});
});


router.post("/deleteFaq", (req,res) =>{

    let data = req.body;

    console.log("-----------data in delete faq", data);

    FAQ.findOneAndDelete({ _id: data._id })
            .then(res.status(200).json({ response: "FAQ deleted" }));
});

router.put('/modifyFaq/:faqId',  async (req,res) =>
{
                FAQ.findByIdAndUpdate({ _id: req.params.faqId },
                    { $set: { question:req.body.question,
                              answer: req.body.answer} },
                                { useFindAndModify: false })
                    .then(res.status(200).json({ response: "FAQ modified" }));
                    
                    localStorage.removeItem("faqId");

    });


    router.get("/getFAQ/:faqId",(req,res) => {

        FAQ.find({_id: req.params.faqId}).then((faq) => {
            if(faq == null){
                console.error('No faq data retrieved');
                res.status(403).send('No faq data retrieved');
            }else{
                res.status(200).json({faq})
            }
        })
    });   



router.get("/getFaq",(req,res) => {

    FAQ.find({}).then((allFaq) => {
        if(allFaq == null){
            console.error('No faq data retrieved');
            res.status(403).send('No faq data retrieved');
        }else{
            res.status(200).json({allFaq})
        }
    })
});



module.exports = router;
