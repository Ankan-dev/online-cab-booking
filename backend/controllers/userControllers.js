const User=require('../models/User.Model.js');
const bcrypt=require('bcrypt');
const asyncHandler=require('../utils/AsyncHandler.js');
const {ApiError}=require('../utils/ApiError.js');
const {ApiResponse}=require('../utils/ApiResponse.js');
const {encryptToken}=require('../utils/EncryptAndDcryptToken.js')



const registerUser=asyncHandler(async(req,res)=>{
    const {email,name,phone,password}=req.body
        const checkUser=await User.findOne({Email:email});
        if(checkUser){
           throw new ApiError(409,"User already exists");
        }

        const hashPassword=await bcrypt.hash(password,10);

        const createUser=new User({
            Email:email,
            FullName:name,
            Phone:phone,
            Password:hashPassword
        })

        await createUser.save();

        return res.status(201)
                .json(new ApiResponse(201,"","user created successfully"))
        
    } )


    const loginUser=asyncHandler(async(req,res)=>{
        const{email,password}=req.body;
        const findUser=await User.findOne({Email:email});
        if(!findUser){
            return res.status(404)
                    .json(new ApiError(404,"User not found"))
        }

        const comparePassword=await bcrypt.compare(password,findUser.Password);

        if(!comparePassword){
            return res.status(401)
                    .json(new ApiError(401,"Incorrect password"))
        }

        const Token=encryptToken(findUser._id);

        findUser.RefreshToken=Token;
        await findUser.save();

        const options={
            httpOnly:true,
            secure:true
        }

        return res.status(200)
                .cookie("AccessToken",Token,options)
                .json(new ApiResponse(200,{
                    Name:findUser.FullName,
                    profile_Image:findUser.ProfileImage
                },"User is loggedin Successfully"))
    })

    
    const profile=asyncHandler(async(req,res)=>{
        const userId=req.user_id;

        if(!userId){
            return res.status(404)
                    .json(new ApiError(404,'UserId is missing'));
        }

        const getProfileData=await User.findById(userId).select('-Password -RefreshToken');

        if(!getProfileData){
            return res.status(500)
                    .json(new ApiResponse(500,"Unable to fetch user data"));
        }

        return res.status(200)
                .json(new ApiResponse(200,getProfileData,"User details fetched successfully"))
    })


    const logout=asyncHandler(async (req,res)=>{
        const userId=req.user_id;
        if(!userId){
            return res.status(404)
                    .json(new ApiError(404,"User id not found"));
        }

        const getUserDetails=await User.findById(userId);
        if(!getUserDetails){
            return res.status(500)
                    .json(new ApiError(500,"User can't be fetched from database due to internal server error"))
        }

        getUserDetails.RefreshToken=null
        await getUserDetails.save();

        const options={
            httpOnly:true,
            secure:true
        }

        return res.status(200)
                .clearCookie("AccessToken",options)
                .json(new ApiResponse(200,"user loggedout successfully"));
    })


module.exports={registerUser,loginUser,profile,logout}