const jwt = require('jsonwebtoken')

const userCltr = {}

userCltr.login = (req,res) =>{
    const body = req.body

    if(body.email == process.env.EMAIL  && body.password == process.env.PASSWORD){
        const token = jwt.sign({id:process.env.EMPLOYEE_ID},process.env.JWT_SECRET,{expiresIn:'14d'})
        res.json({token:token})
    }else{
        res.status(404).json({
            notice : 'Failed to login'
        })
    }
}

module.exports = userCltr