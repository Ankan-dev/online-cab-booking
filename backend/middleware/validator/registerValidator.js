const {body,validationResult}=require('express-validator')

const emailValidator=[
    body('email')
    .isEmail()
    .withMessage("Please enter valid email id"),
    body('name')
    .isString()
    .isLength({min:3,max:26})
    .withMessage("Please enter proper name"),
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

module.exports={emailValidator};