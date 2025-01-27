const asyncHandler =require('../utils/AsyncHandler');
const {ApiResponse}=require('../utils/ApiResponse');
const {ApiError}=require('../utils/ApiError');
const axios = require('axios');

const getAddressCoordinates=asyncHandler(async(req,res)=>{

    const {address}=req.query

    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.GOOGLE_MAPS}`;

    const response = await axios.get(url);
    const data = response.data;

    if (data.status === 'OK') {
        const location = data.results[0].geometry.location;
        return res.status(200)
                .json(new ApiResponse(200,{
                    lat: location.lat,
                    lng: location.lng
                },"Latitude and Longitude fetched successfully"))
    } else {
        throw new ApiError(500,"Internal Server Error");
    }

})

const getDistanceTime=asyncHandler(async(req,res)=>{
    const {origin,destination}=req.query

    const url=`https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${encodeURIComponent(destination)}&origins=${encodeURIComponent(origin)}&units=metric&key=${process.env.GOOGLE_MAPS}`

  const response=await axios.get(url);
  const data=response.data;

  if(data.status==='OK'){
    return res.status(200)
            .json(new ApiResponse(200,data.rows[0].elements[0],"distance and time fetched successfully"))
  }else{
    throw new ApiError(500,"Internal server error");
  }
})

const getSuggestions=asyncHandler(async(req,res)=>{
    const {input}=req.query;

    const uri=`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${process.env.GOOGLE_MAPS}`

    const response=await axios.get(uri);
    const data=response.data;

    if(data.status==='OK'){
        return res.status(200)
                .json(new ApiResponse(200,data.predictions,"autocomplete options fetched successfullt"));
    }else{
        throw new ApiError(500,"Internal Server Error");
    }
})

module.exports={getAddressCoordinates,getDistanceTime,getSuggestions}