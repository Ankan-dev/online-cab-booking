const express=require('express')
const {registerCaptain, loginCaptain ,getCaptainProfile,logoutCaptain,verifyCaptain,captainDocumentsUploads}=require("../controllers/captainController.js");
const {emailValidator}=require('../middleware/validator/registerValidator.js');
const {loginValidator}=require('../middleware/validator/loginValidator.js');
const authenticate=require('../middleware/auth/CaptainAuth.js');
const {OTPValidator}=require('../middleware/validator/OTPValidator.js');
const upload=require('../middleware/multer/multer.js')

const Router=express.Router();

Router.post('/captain/register',emailValidator,registerCaptain);
Router.post('/captain/verify',OTPValidator,verifyCaptain);
Router.post('/captain/login',loginValidator,loginCaptain);
Router.get('/captain/profile',authenticate,getCaptainProfile);
Router.post('/captain/logout',authenticate,logoutCaptain);
Router.post('/captain/captain-documents',authenticate,upload.fields(
    [
        {name:'avatar',maxCount:1},
        {name:'license',maxCount:1},
        {name:'documents',maxCount:1}
    ]
),captainDocumentsUploads);

module.exports=Router

