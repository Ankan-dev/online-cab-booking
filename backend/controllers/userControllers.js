const User=require('../models/User.Model.js');
const bcrypt=require('bcrypt');
const asyncHandler=require('../utils/AsyncHandler.js');
const {ApiError}=require('../utils/ApiError.js');
const {ApiResponse}=require('../utils/ApiResponse.js');
const {encryptToken}=require('../utils/EncryptAndDcryptToken.js')
const {sendEmail}=require('../utils/sendEmail.js');



const registerUser=asyncHandler(async(req,res)=>{
    const {email,name,phone,password}=req.body
        const checkUser=await User.findOne({Email:email});
        if(checkUser){
           throw new ApiError(409,"User already exists");
        }

        const hashPassword=await bcrypt.hash(password,10);
        const otp=Math.floor(10000 + Math.random() * 90000);
        const expirationTime = Date.now() + 5 * 60 * 1000;

        const createUser=new User({
            Email:email,
            FullName:name,
            Phone:phone,
            Password:hashPassword,
            otp:otp,
            otpExpires:expirationTime
        })

        await createUser.save();

        const subject="Verify your email address";
        const text=`Your OTP is ${otp}. It will expire in 5 minutes. Do not share this OTP with anyone.`;
        
        const emailstatus=sendEmail(email,subject,text);

        if(!emailstatus){
            return res.status(500)
                    .json(new ApiError(500,"Email not sent"))
        }


        return res.status(201)
                .json(new ApiResponse(201,"","OTP has been sent to your email address. Please verify your email address"))
        
    } )

    const verifyUser=asyncHandler(async(req,res)=>{

        const {email,otp}=req.body;

        const findUser=await User.findOne({Email:email});

        if(!findUser){
            return res.status(404)
                    .json(new ApiError(404,"User not found"))
        }

        const currentTime=Date.now();

        if(currentTime>findUser.otpExpires){
            findUser.otp=null;
            findUser.otpExpires=null;
            await findUser.save();
            return res.status(401)
                    .json(new ApiError(401,"OTP has been expired"))
        }
        
        if(findUser.otp!==otp){
            return res.status(401)
                    .json(new ApiError(401,"Invalid OTP"))
        }

        const Token=encryptToken(findUser._id);

        findUser.RefreshToken=Token;
        findUser.otp=null;
        findUser.otpExpires=null;
        findUser.verified=true;
        await findUser.save();

        delete findUser.Password;
        delete findUser.RefreshToken;
        delete findUser.otp;
        delete findUser.otpExpires;

        const options={
            httpOnly:true,
            secure:true
        }


        return res.status(200)
                .cookie("AccessToken",Token,options)
                .json(new ApiResponse(200,findUser,"Email verified and loggedin successfully"))

    })

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

        delete findUser.Password;
        delete findUser.RefreshToken;
        delete findUser.otp;
        delete findUser.otpExpires;

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


module.exports={registerUser,verifyUser,loginUser,profile,logout}