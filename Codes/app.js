const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
app.use(cookieParser());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/registration',{useNewUrlParser: true, useUnifiedTopology: true },() => {
    console.log('Successfully connected to database');
});

app.listen(5000,() =>{
    console.log('Express server started');
})

