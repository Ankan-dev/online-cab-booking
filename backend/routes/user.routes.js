const express=require('express')
const {emailValidator}=require('../middleware/validator/registerValidator.js')
const {loginValidator}=require('../middleware/validator/loginValidator.js')
const {registerUser,verifyUser,loginUser,profile,logout}=require("../controllers/userControllers.js")
const authenticate=require('../middleware/auth/UserAuth.js');

const Router=express.Router();

Router.post('/user/register',emailValidator,registerUser);
Router.post('/user/verify',emailValidator,verifyUser);
Router.post('/user/login',loginValidator,loginUser);
Router.get('/user/profile',authenticate,profile);
Router.post('/user/logout',authenticate,logout);

module.exports=Router