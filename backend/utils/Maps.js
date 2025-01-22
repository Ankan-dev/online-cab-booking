const asyncHandler =require('./AsyncHandler.js');
const axios = require('axios');

const getAddressCoordinates=asyncHandler(async(address)=>{
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.GOOGLE_MAPS}`;

    const response = await axios.get(url);
    const data = response.data;

    if (data.status === 'OK') {
        const location = data.results[0].geometry.location;
        return {
            lat: location.lat,
            lng: location.lng
        };
    } else {
        throw new Error('Unable to fetch coordinates');
    }

})

module.exports={getAddressCoordinates}