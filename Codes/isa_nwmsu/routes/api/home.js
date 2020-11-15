const express = require("express");
const router = express.Router();

//Nodemailer for sending emails
const nodemailer = require('nodemailer');


const Pickup = require("../../models/Pickup");
const Accommodation = require("../../models/Accommodation");
const Volunteer = require("../../models/Volunteer");

router.get("/userPickups/:email", async (req,res) => {

    Pickup.find({createdBy:req.params.email}).then((userpickupdata) => {
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

    Accommodation.find({createdBy:req.params.email}).then((useraccommodationdata) => {
        if(useraccommodationdata == null){
            console.error('No accommodation data retrieved');
            res.status(403).send('No accommodation data retrieved');
        }else{
            res.status(200).json({useraccommodationdata})
        }
    })
});

router.get("/userVolunteer/:email", async (req,res) => {

    Volunteer.find({createdBy:req.params.email}).then((uservolunteerdata) => {
        if(uservolunteerdata == null){
            console.error('No volunteer data retrieved');
            res.status(403).send('No volunteer data retrieved');
        }else{
            res.status(200).json({uservolunteerdata})
        }
    })
});

// Accommodation cancel by user

router.post("/cancelAccommodation", (req, res) => {

    let data = req.body;

    console.log("-----------data in service", data);

    
        //send mail for cancel

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: `${process.env.EMAIL_ADDRESS}`,
              pass: `${process.env.EMAIL_PASSWORD}`,
            },
          });
    
          const mailOptions = {
            from: 'teamisa.nwmsu@gmail.com',
            to: `${data.email}`,
            subject: 'Your accommodation request has been cancelled',
            text:
              'You are receiving this email because you (or someone else) have cancelled temporary accommodation for '+`${data.daysRequired}`+' days.\n\n'
              + 'Accommodation Details --> \n\n'
              + 'Name: '+`${data.firstName}`+' '+`${data.lastName}`+'\n'
              +'919#: '+`${data.non}`+'\n'
              +'Days Required: '+`${data.daysRequired}`+'\n'
              +'Gender: '+`${data.gender}`+'\n'
              +'Contact No: '+`${data.contactNo}`+'\n\n'
              + 'Contact ISA team for any other information or queries\n'
              +'\n\nRegards,\nTeam ISA.',
          
          };
    
          console.log('sending mail');
    
          transporter.sendMail(mailOptions, (err, response) => {
            if (err) {
              console.error('there was an error: ', err);
            } else {
              console.log('here is the res: ', response);
              res.status(200).json('email sent');
            }
          });

          Accommodation.findOneAndDelete({ _id: data._id })
            .then(res.status(200).json({ response: "accommodation cancelled" }));
    
    
    
});


//Pickup cancel

router.post("/cancelPickup", (req, res) => {

    let data = req.body;

    console.log("-----------data in pickup", data);


        //send mail for cancel

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: `${process.env.EMAIL_ADDRESS}`,
              pass: `${process.env.EMAIL_PASSWORD}`,
            },
          });
    
          const mailOptions = {
            from: 'teamisa.nwmsu@gmail.com',
            to: `${data.email}`,
            subject: 'Your pickup request has been cancelled',
            text:
              'You are receiving this email because you (or someone else) have cancelled pickup service provide by ISA.\n\n'
              + 'Pickup Details --> \n\n'
              + 'Name: '+`${data.name}`+'\n'
              +'Cell: '+`${data.cell}`+'\n'
              +'Pickup From: '+`${data.from}`+'\n'
              +'Drop To: '+`${data.to}`+'\n'
              +'Date : '+`${data.date.substring(0,10)}`+'\n'
              +'Time : '+`${data.date.substring(11,19)}`+'\n'
              +'Flight No: '+`${data.flightNo}`+'\n'
              +'Airlines: '+`${data.airline}`+'\n\n'
              + 'Contact ISA team for any other information or queries\n'
              +'\n\nRegards,\nTeam ISA.',
          
          };
    
          console.log('sending mail');
    
          transporter.sendMail(mailOptions, (err, response) => {
            if (err) {
              console.error('there was an error: ', err);
            } else {
              console.log('here is the res: ', response);
              res.status(200).json('email sent');
            }
          });

          Pickup.findOneAndDelete({ _id: data._id })
        .then(res.status(200).json({ response: "pickup cancelled" }));
    
});

//Volunteer status update accept

router.post("/cancelVolunteer", (req, res) => {

    let data = req.body;

    console.log("-----------data in service", data);

        //send mail for accept

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: `${process.env.EMAIL_ADDRESS}`,
              pass: `${process.env.EMAIL_PASSWORD}`,
            },
          });
    
          const mailOptions = {
            from: 'teamisa.nwmsu@gmail.com',
            to: `${data.email}`,
            subject: 'Volunteer request cancelled',
            text:
              'You are receiving this email because you (or someone else) have cancelled a request to become volunteer for team ISA.\n\n'
              + 'Volunteer Details --> \n\n'
              + 'Name: '+`${data.firstName}`+' '+`${data.lastName}`+'\n'
              +'919#: '+`${data.non}`+'\n'
              +'Car type: '+`${data.carType}`+'\n'
              +'Contact No: '+`${data.contactNo}`+'\n\n'
              + 'Contact ISA team for any other information or queries\n'
              +'\n\nRegards,\nTeam ISA.',

          };
    
          console.log('sending mail');
    
          transporter.sendMail(mailOptions, (err, response) => {
            if (err) {
              console.error('there was an error: ', err);
            } else {
              console.log('here is the res: ', response);
              res.status(200).json('email sent');
            }
          });

          Volunteer.findOneAndDelete({ _id: data._id })
            .then(res.status(200).json({ response: "volunteer cancelled" }));
    
});


module.exports = router;
