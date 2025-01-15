const captainModel = require('../models/Captain.Model.js');
const bcrypt = require('bcrypt');
const {ApiError} = require('../utils/ApiError.js');
const {ApiResponse} = require('../utils/ApiResponse.js');
const {encryptToken} = require('../utils/EncryptAndDcryptToken.js');
const asyncHandler=require('../utils/AsyncHandler.js');
const {sendEmail}=require('../utils/sendEmail.js');

const registerCaptain = asyncHandler(async (req, res) => {
    const { email, name, phone, password } = req.body;
    const checkCaptain = await captainModel.findOne({ Email: email });
    if (checkCaptain) {
        throw new ApiError(409, "Captain already exists");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const otp=Math.floor(10000 + Math.random() * 90000);
    const expirationTime = Date.now() + 5 * 60 * 1000;


    const createCaptain = new captainModel({
        Email: email,
        FullName: name,
        Phone: phone,
        Password: hashPassword,
        otp:otp,
        otpExpires:expirationTime,
    })

    await createCaptain.save();

    const subject="Verify your email address";
    const text=`Your OTP is ${otp}. It will expire in 5 minutes. Do not share this OTP with anyone.`;
    
    const emailstatus=sendEmail(email,subject,text);

    if(!emailstatus){
        return res.status(500)
                .json(new ApiError(500,"Email not sent"))
    }

    return res.status(201)
        .json(new ApiResponse(201, "", "Captain created successfully. Please check your email for your code"));

})

const verifyCaptain=asyncHandler(async(req,res)=>{

    const {email,otp}=req.body;

    const findCaptain=await captainModel.findOne({Email:email});

    if(!findCaptain){
        return res.status(404)
                .json(new ApiError(404,"User not found"))
    }

    const currentTime=Date.now();

    if(currentTime>findCaptain.otpExpires){
        findCaptain.otp=null;
        findCaptain.otpExpires=null;
        await findCaptain.save();
        return res.status(401)
                .json(new ApiError(401,"OTP has been expired"))
    }
    
    if(findCaptain.otp!=otp){
        return res.status(401)
                .json(new ApiError(401,"Invalid OTP"))
    }

    const Token = encryptToken(findCaptain._id);
    
    findCaptain.RefreshToken = Token;
    findCaptain.otp=null;
    findCaptain.otpExpires=null;
    findCaptain.verified=true;
    await findCaptain.save();

    const options = {
        httpOnly: true,
        secure: true
    }
    
    

    const captainData = findCaptain.toObject();
    delete captainData.Password;
    delete captainData.RefreshToken;
    delete captainData.otp;
    delete captainData.otpExpires;

    return res.status(200)
            .cookie("AccessToken", Token, options)
            .json(new ApiResponse(200,captainData,"Email verified and loggedin successfully"))

})

const loginCaptain = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const findCaptain = await captainModel.findOne({ Email:email });
    if (!findCaptain) {
        return res.status(404)
            .json(new ApiError(404, "Captain not found"));
    }

    const comparePassword = await bcrypt.compare(password, findCaptain.Password);

    if (!comparePassword) {
        return res.status(401)
            .json(new ApiError(401, "Incorrect password"));
    }

    const Token = encryptToken(findCaptain._id);

    findCaptain.RefreshToken = Token;

    await findCaptain.save();

    const options = {
        httpOnly: true,
        secure: true
    }

    

    const captainData = findCaptain.toObject();
    delete captainData.Password;
    delete captainData.RefreshToken;
    delete captainData.otp;
    delete captainData.otpExpires;

    return res.status(200)
        .cookie("AccessToken", Token, options)
        .json(new ApiResponse(200, captainData, "Login successful"));
})

const getCaptainProfile = asyncHandler( async (req, res) => {
    const captainId = req.captain_id;
    const findCaptain = await captainModel.findById(captainId).select("-Password -RefreshToken -otp -otpExpires");
    if (!findCaptain) {
        return res.status(404)
            .json(new ApiError(404, "Captain not found"));
    }

    return res.status(200)
        .json(new ApiResponse(200, findCaptain, "Captain profile fetched successfully"));

})

const logoutCaptain = asyncHandler(async (req, res) => {
    const captainId=req.captain_id;
    const findCaptain=await captainModel.findById(captainId);

    if(!findCaptain){
        return res.status(404)
                .json(new ApiError(404,"Captain not found"));
    }

    findCaptain.RefreshToken=null;
    await findCaptain.save();

    const options={
        httpOnly:true,
        secure:true
    }

    return res.status(200)
            .clearCookie("AccessToken",options)
            .json(new ApiResponse(200,"","Captain logged out successfully"));

})
module.exports = { registerCaptain, loginCaptain ,getCaptainProfile,logoutCaptain,verifyCaptain};