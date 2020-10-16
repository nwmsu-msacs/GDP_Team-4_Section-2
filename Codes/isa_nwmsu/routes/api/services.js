const express = require("express");
const router = express.Router();

const Pickup = require("../../models/Pickup");
const Membership = require("../../models/Membership");
const Accommodation = require("../../models/Accommodation");
const Volunteer = require("../../models/Volunteer");
const validatePickupInput = require("../../validation/pickup");

//Nodemailer for sending emails
const nodemailer = require('nodemailer');

// post the data of pickup 
router.post("/pickup", async (req, res) => {
    const { errors, isValid } = validatePickupInput(req.body)

    if (!isValid) {
        return res.status(400).json({ errors });
    }
    else {

        const pickupData = new Pickup({
            name: req.body.name,
            email: req.body.email,
            cell: req.body.cell,
            luggage: req.body.luggage,
            from: req.body.from,
            to: req.body.to,
            date: req.body.date,
            airline: req.body.airline,
            flightNo: req.body.flightNo,
        });
        // method to save data in database
        pickupData.save();

        res.status(200).json({ response: "Pickup data saved" });
    }
});

router.post("/accommodation", (req, res) => {

    const accommodationData = new Accommodation({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        non: req.body.non,
        daysRequired: req.body.daysRequired,
        gender: req.body.gender,
        contactNo: req.body.contactNo,
        email: req.body.email,
    });

    accommodationData.save();

    res.status(200).json({ response: "Accommodation data saved" });
});

router.post("/membership", (req, res) => {

    const membershipData = new Membership({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        major: req.body.major,
        email: req.body.email,
        gender: req.body.gender,
        contactNo: req.body.contactNo,
    });

    membershipData.save();

    res.status(200).json({ response: "Membership data saved" });
});

router.post("/volunteer", (req, res) => {

    const volunteerData = new Volunteer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        non: req.body.non,
        carType: req.body.carType,
        contactNo: req.body.contactNo,
        email: req.body.email
    });

    volunteerData.save();

    res.status(200).json({ response: "Volunteer data saved" });
});


//Accommodation status update accept

router.post("/accommodationaccept", (req, res) => {

    let data = req.body;

    console.log("-----------data in service", data);

    Accommodation.findOneAndUpdate({ _id: data._id },
        { $set: { status: "Accepted" } },
        { useFindAndModify: false })
        .then(res.status(200).json({ response: "accommodation accepted" }));


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
            subject: 'Your accommodation request has been accepted',
            text:
              'You are receiving this email because you (or someone else) have requested temporary accommodation for '+`${data.daysRequired}`+' days.\n\n'
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
              res.status(200).json('recovery email sent');
            }
          });
    
});


//Accommodation status update reject

router.post("/accommodationreject", (req, res) => {

    let data = req.body;

    console.log("-----------data in service", data);

    Accommodation.findOneAndUpdate({ _id: data._id },
        { $set: { status: "Rejected" } },
        { useFindAndModify: false })
        .then(res.status(200).json({ response: "accommodation Rejected " }));


        //send mail for reject

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
            subject: 'Your accommodation request has been Rejected',
            text:
              'You are receiving this email because you (or someone else) have requested temporary accommodation for '+`${data.daysRequired}`+' days and it has been rejected.\n\n'
              + 'Accommodation Details --> \n\n'
              + 'Name: '+`${data.firstName}`+' '+`${data.lastName}`+'\n'
              +'919#: '+`${data.non}`+'\n'
              +'Days Required: '+`${data.daysRequired}`+'\n'
              +'Gender: '+`${data.gender}`+'\n'
              +'Contact No: '+`${data.contactNo}`+'\n\n'
              + 'Contact ISA team for any other information or queries\n'
              +'\n\nRegards,\nTeam ISA.',
          

              name: req.body.name,
            email: req.body.email,
            cell: req.body.cell,
            luggage: req.body.luggage,
            from: req.body.from,
            to: req.body.to,
            date: req.body.date,
            airline: req.body.airline,
            flightNo: req.body.flightNo,
            pickupId: req.body.pickupId
          };
    
          console.log('sending mail');
    
          transporter.sendMail(mailOptions, (err, response) => {
            if (err) {
              console.error('there was an error: ', err);
            } else {
              console.log('here is the res: ', response);
              res.status(200).json('recovery email sent');
            }
          });
    
});



// ending membership status 
router.post("/endmembership", (req, res) => {

    let data = req.body;

    console.log("-----------data in service", data);

    Membership.findOneAndUpdate({ _id: data._id },
        { $set: { status: "Inactive" } },
        { useFindAndModify: false })
        .then(res.status(200).json({ response: "Membership ended " }));


        //send mail for end membership

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
            subject: 'Your membership with ISA has come to an end..!!',
            text:
              'You are receiving this email because your membership has ended .\n\n'
              + 'Menmership Details --> \n\n'
              + 'Name: '+`${data.firstName}`+' '+`${data.lastName}`+'\n'
              +'Major: '+`${data.major}`+'\n'
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
              res.status(200).json('recovery email sent');
            }
          });
    
});


//Pickup status update accept

router.post("/pickupaccept", (req, res) => {

    let data = req.body;

    console.log("-----------data in service", data);

    Pickup.findOneAndUpdate({ _id: data._id },
        { $set: { status: "Accepted" } },
        { useFindAndModify: false })
        .then(res.status(200).json({ response: "pickup accepted" }));


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
            subject: 'Your pickup request has been accepted',
            text:
              'You are receiving this email because you (or someone else) have requested pickup service provide by ISA.\n\n'
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
              res.status(200).json('recovery email sent');
            }
          });
    
});


//Pickup status update reject

router.post("/pickupreject", (req, res) => {

    let data = req.body;

    console.log("-----------data in service", data);

    Pickup.findOneAndUpdate({ _id: data._id },
        { $set: { status: "Rejected" } },
        { useFindAndModify: false })
        .then(res.status(200).json({ response: "Pickup Rejected " }));


        //send mail for reject

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
            subject: 'Your pickup request has been Rejected',
            text:
              'You are receiving this email because you (or someone else) have have requested pickup service provide by ISA and it has been rejected.\n\n'
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
              res.status(200).json('recovery email sent');
            }
          });
    
});


//Volunteer status update accept

router.post("/volunteeraccept", (req, res) => {

    let data = req.body;

    console.log("-----------data in service", data);

    Volunteer.findOneAndUpdate({ _id: data._id },
        { $set: { status: "Accepted" } },
        { useFindAndModify: false })
        .then(res.status(200).json({ response: "volunteer accepted" }));


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
            subject: 'Thanks for being a volunteer for Team ISA ',
            text:
              'You are receiving this email because you (or someone else) have requested to become a volunteer for team ISA and the request is accepted\n\n'
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
              res.status(200).json('recovery email sent');
            }
          });
    
});


//Volunteer status update reject

router.post("/volunteerreject", (req, res) => {

    let data = req.body;

    console.log("-----------data in service", data);

    Volunteer.findOneAndUpdate({ _id: data._id },
        { $set: { status: "Rejected" } },
        { useFindAndModify: false })
        .then(res.status(200).json({ response: "Volunteer Rejected " }));


        //send mail for reject

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
            subject: 'Volunteer request rejected',
            text:
              'Thanks for your request to volunteer for Team ISA, but we are unable to accept your request at this time .\n\n'
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
              res.status(200).json('recovery email sent');
            }
          });
    
});



module.exports = router;
