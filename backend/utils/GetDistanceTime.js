const { ApiError } = require("./ApiError");
const axios=require('axios')

const getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new ApiError(404, "Origin or destination is missing");
    }

    try {
        const url = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${encodeURIComponent(destination)}&origins=${encodeURIComponent(origin)}&units=metric&key=${process.env.GOOGLE_MAPS}`

        const response = await axios.get(url);
        const data = response.data;
        if (data.status === 'OK') {
            return data.rows[0].elements[0]
        }  
    } catch (error) {
        throw error;
    }

    
}

module.exports = getDistanceTime