const Ride=require('../models/Ride.Model.js');
const calculateFare=require('../utils/CalculateFare.js');
const asyncHandler=require('../utils/AsyncHandler.js')
const {ApiError}=require('../utils/ApiError.js')
const {ApiResponse}=require('../utils/ApiResponse.js')

const createRide=asyncHandler(async(req,res)=>{
    const {user,pickup,destination,vehicleType}=req.body;

  

    const fare = await calculateFare(pickup, destination);
    const otp=Math.floor(10000 + Math.random() * 90000);

    
    const ride = await Ride.create({
        user,
        pickup,
        destination,
        otp,
        fare: fare[ vehicleType ]
    })

    console.log(ride)

    if(!ride){
        throw new ApiError(500,"Error in creation of ride");
    }

    return res.status(201)
            .json(new ApiResponse(201,{otp:otp},"Ride is created"));
})


const getPrices=asyncHandler(async(req,res)=>{
    const {pickup,destination}=req.query;


    const prices=await calculateFare(pickup,destination);

    if(!prices){
        return ApiError(500,"Internal Server Error in calculation of fare");
    }

    return res.status(200)
            .json(new ApiResponse(200,prices,"Prices fetched successfully"));
})

module.exports={createRide,getPrices}