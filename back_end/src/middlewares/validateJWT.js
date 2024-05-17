const jwt = require('jsonwebtoken');

const ValidateJWT = {
    verifyToken(req,res,next){
        const token = req.headers.token;
        if(token){
            const accessToken = token.split(" ")[1];
            console.log(accessToken);
            jwt.verify(accessToken, process.env.JWT_KEY, (err,user) =>{
                if(err)   res.status(403).json({
                    success: false,
                    message: "Token bị hết hạn"
                })
                req.user = user;
                next()
            })
        }
        else{
            res.status(401).json({message: "Token là chưa được xác thực"})
        }
    }
}


module.exports = ValidateJWT;