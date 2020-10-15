const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const helmet = require('helmet');
const cors = require('cors');

const passport = require("passport");
const users = require("./routes/api/users");
const events = require('./routes/api/events');
const services = require('./routes/api/services');
const chat = require('./routes/api/chat');
const admin = require('./routes/api/admin');
const forum = require("./routes/api/forum");
const app = express();

// use Helmet middleware to automatically set secure HTTP headers
app.use(helmet());
// Use this after the variable declaration
app.use(cors());

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  //cometChat 

// const appID = require("./config/keys").appID;
// const apiKey = require("./config/keys").apiKey;
// const agentUID = require("./config/keys").agentUID;

const appID = '240050f8a85710c';
const apiKey = '18d853100a77e50aed9fb3d75b4940ef552a4f18';
const agentUID = 'admin'



const headers = {
  'Content-Type': 'application/json',
  appid: appID,
  apikey: apiKey,
};

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/events", events);
app.use("/api/services", services);
app.use("/api/chat", chat);
app.use("/api/admin", admin);
app.use("/api/forum",forum);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));