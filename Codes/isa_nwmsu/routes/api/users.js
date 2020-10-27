

const crypto = require("crypto");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/User");




// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email.toLowerCase() }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email.toLowerCase(),
        // gender: req.body.gender,
        password: req.body.password,
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation
  
  const { errors, isValid } = validateLoginInput(req.body);
  console.log(isValid)
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email.toLowerCase();
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      console.log("Email not found")
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
          role: user.role,
          email: user.email
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
              name: user.name,
              role: user.role,
              email: user.email
            });
          }
        );
      } else {
        console.log("password incorrect")
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});




//forgotpassword new



require('dotenv').config();


const nodemailer = require('nodemailer');

// module.exports = (app) => {
router.post('/forgotPassword', (req, res) => {

  const reqBody = req.body;

  if (!reqBody.email || reqBody.email === '') {
    return res.status(400).send('email required');
  }

  User.findOne({ email: reqBody.email }).then((user) => {
    if (user === null) {
      console.error('email not in database');
      res.status(403).send('email not in database');
    } else {
      const token = crypto.randomBytes(20).toString('hex');
      //old update
      // user.update({email: reqBody.email,$set:{
      //   resetPasswordToken: token,
      //   resetPasswordExpires: Date.now() + 3600000}
      //   });
      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 3600000;
      user.save();

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: `${process.env.EMAIL_ADDRESS}`,
          pass: `${process.env.EMAIL_PASSWORD}`,
        },
      });

      const mailOptions = {
        from: 'teamisa.nwmsu@gmail.com',
        to: `${user.email}`,
        subject: 'Link To Reset Password',
        text:
          'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n'
          + 'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n'
          + `http://localhost:3000/reset/${token}\n\n`
          + 'If you did not request this, please ignore this email and your password will remain unchanged.\n'
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
    }
  });
});


//reset with token
router.get('/reset/:resetPasswordToken', (req, res) => {
  User.findOne({
    resetPasswordToken: req.params.resetPasswordToken,
    resetPasswordExpires: {
      $gt: Date.now(),
    },
  }).then((user) => {
    if (user == null) {
      console.error('password reset link is invalid or has expired');
      res.status(403).send('password reset link is invalid or has expired');
    } else {
      res.status(200).send({
        email: user.email,
        message: 'password reset link a-ok',
      });
    }
  });
});


//update password through email

const BCRYPT_SALT_ROUNDS = 10;

router.put('/updatePasswordViaEmail', (req, res) => {
  User.findOne({
    email: req.body.email,
    resetPasswordToken: req.body.resetPasswordToken,
    resetPasswordExpires: {
      $gt: Date.now(),
    },
  }).then(user => {
    if (user == null) {
      console.error('password reset link is invalid or has expired');
      res.status(403).send('password reset link is invalid or has expired');
    } else if (user != null) {
      console.log('user exists in db');

      //new hash

      bcrypt
        .hash(req.body.password, BCRYPT_SALT_ROUNDS)
        .then(hashedPassword => {
          user.password = hashedPassword;
          user.resetPasswordToken = "";
          user.resetPasswordExpires = "";
          user.save();
          // user.update({
          //   password: hashedPassword,
          //   resetPasswordToken: null,
          //   resetPasswordExpires: null,
          // });
        })
        .then(() => {
          console.log('password updated');
          res.status(200).send({ message: 'password updated' });
        });
    } else {
      console.error('no user exists in db to update');
      res.status(401).json('no user exists in db to update');
    }
  });
});

module.exports = router;
