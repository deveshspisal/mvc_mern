const userCltr = {}

userCltr.login = (req,res) =>{
    const body = req.body

    if(body.email == process.env.EMAIL  && body.password == process.env.PASSWORD){
        res.json({
            notice : 'Succesfully Logged in'
        })
    }else{
        res.status(404).json({
            notice : 'Failed to login'
        })
    }
}

module.exports = userCltr