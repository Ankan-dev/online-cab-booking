const {body,validationResult}=require('express-validator');


const OTPValidator=[
    body('email')
    .exists()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please enter valid email"),
    body('otp')
    .exists()
    .withMessage("OTP is required")
    .isString()
    .isLength({min:5})
    .withMessage("The code must be atleast 5 characters"),
    (req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400)
                .json({
                    errors:errors.array()
                })
            
        }
        next();
    }
]

module.exports={OTPValidator}