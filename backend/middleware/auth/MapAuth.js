const AsyncHandler=require('../../utils/AsyncHandler.js')
const {ApiError}=require('../../utils/ApiError.js')

const authenticate=AsyncHandler(async(req,res,next)=>{

    const token=req.cookies?.AccessToken;


    if(!token){
        throw new ApiError(404,"Token not found");
    }

    next();

})

module.exports=authenticate;