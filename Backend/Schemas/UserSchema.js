const mongoose = require('mongoose')

const UserSchema =mongoose.Schema({
    signupname:{
        type:String,
        required:true
    },
    signupemail:{
        type:String,
        required:true
        },
        signuppassword:{
            type:String,
            required:true
            }
});

const Users = mongoose.model('Users',UserSchema);
module.exports = Users;