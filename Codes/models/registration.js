const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const RegistrationSchema = new mongoose.Schema({
    User_Name :{
        type : String,
        required : true,
        min : 22,
        max : 22
    },
    First_Name :{
        type : String,
        required : true,
        min : 1,
        max : 200
    },
    Last_Name :{
        type : String,
        required : true,
        min : 1,
        max : 200
    },

    Gender :{
        type: String,
        enum: ['Male', 'Female'],
        required : true
    },
    Password :{
        type : String,
        required: true,
        min: 8,
        max:20
    }

});

UserSchema.pre('save',function(next){
    if(!this.isModified('password'))
        return next();
    bcrypt.hash(this.password,10,(err,passwordHash)=>{
        if(err)
            return next(err)
        this.password = passwordHash;
        next();
    });
});

UserSchema.methods.comparePassword = function(password,cb){
    bcrypt.compare(password,this.password,(err,isMatch)=>{
        if(err)
            return cb(err)
            else{
                if(!isMatch)
                    return cb(null, isMatch);
                return cb(null,this);
            }
    });
}

module.exports = mongoose.model('registration',RegistrationSchema);