const express=require('express')
const {registerCaptain, loginCaptain ,getCaptainProfile,logoutCaptain,verifyCaptain}=require("../controllers/captainController.js");
const {emailValidator}=require('../middleware/validator/registerValidator.js');
const {loginValidator}=require('../middleware/validator/loginValidator.js');
const authenticate=require('../middleware/auth/CaptainAuth.js');
const {OTPValidator}=require('../middleware/validator/OTPValidator.js');

const Router=express.Router();

Router.post('/captain/register',emailValidator,registerCaptain);
Router.post('/captain/verify',OTPValidator,verifyCaptain);
Router.post('/captain/login',loginValidator,loginCaptain);
Router.get('/captain/profile',authenticate,getCaptainProfile);
Router.post('/captain/logout',authenticate,logoutCaptain);

module.exports=Router

