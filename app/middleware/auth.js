const jwt = require('jsonwebtoken')

const userAuth = (req,res,next) =>{
    const userToken = req.headers["authorization"]

    if(userToken){
        try{
                const tokenData = jwt.verify(userToken,process.env.JWT_SECRET)
                next()
            }catch(err){
                res.json({notice:err})
            }

    }else{
        res.status(400).json({notice:"token not found"})
    }

}

module.exports = userAuth