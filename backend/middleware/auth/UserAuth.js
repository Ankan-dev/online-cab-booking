const {decryptToken}=require('../../utils/EncryptAndDcryptToken.js');
const AsyncHandler=require('../../utils/AsyncHandler.js')
const {ApiError}=require('../../utils/ApiError.js')

const authenticate=AsyncHandler(async(req,res,next)=>{

    const token=req.cookies?.AccessToken;


    if(!token){
        throw new ApiError(404,"Token not found");
    }

    const decrypttoken=decryptToken(token);

    req.user_id=decrypttoken;

    next();

})

module.exports=authenticate;