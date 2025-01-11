const jwt=require('jsonwebtoken');

const encryptToken=(id)=>{
    if(!id){
        return false;
    }
    const token=jwt.sign({
        user_id:id
    },process.env.JWTSECRET);

    return token;
}

const decryptToken=(token)=>{
    if(!token){
        return false;
    }
    const decrypted=jwt.verify(token,process.env.JWTSECRET);
    return decrypted.user_id;
}

module.exports={encryptToken,decryptToken};