const mongoose=require('mongoose')

const vehicle =mongoose.Schema({
    DriversLicense:{
        type:String,
    },
    OtherDocuments:{
        type:String,
    },
    VehicleColor:{
        type:String,
        required:true
    },
    VehicleType:{
        type:String,
        required:true,
        enum:['Car','Bike','Autorickshaw']
    },
    NumberPlate:{
        type:String,
        required:true
    },
})

const captainSchema=mongoose.Schema({
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
    phone:{
        type:String,
        required:true
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
    socketId:{
        type:String
    },
   status:{
        type:String,
        required:true,
        default:'inactive'
   },
    Vehicle:{vehicle},
    location:{
        latutude:{
            type:Number
        },
        longitude:{
            type:Number
        }
    },
    RefreshToken:{
        type:String
    },
})

module.exports = mongoose.model("Captain",captainSchema);