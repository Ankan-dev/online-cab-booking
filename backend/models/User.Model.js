const mongoose=require('mongoose');


const userSchema=mongoose.Schema({
    Email:{
        type:String,
        required:true,
        unique:true
    },
    FullName:{
        type:String,
        required:true,
        min:3,
        max:30
    },
    Phone:{
        type:String,
        required:true,
        min:10,
        max:10
    },
    Password:{
        type:String,
        required:true,
        min:5,
        max:16
    },
    ProfileImage:{
        type:String
    },
    RefreshToken:{
        type:String
    },
})



module.exports = mongoose.model("User",userSchema);
