const {body,validationResult}=require('express-validator');


const loginValidator=[
    body('email')
    .isEmail()
    .withMessage("Please enter valid email"),
    body('password')
    .isString()
    .isLength({min:5,max:16})
    .withMessage("The password must be atleast 5 characters"),
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

module.exports={loginValidator}