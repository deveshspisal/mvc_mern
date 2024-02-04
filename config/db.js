const mongoose = require('mongoose');

const dbConnect = ()    =>{
    mongoose.connect('mongodb://127.0.0.1:27017/expense-app')
                    .then(()=>{
                        console.log('connected to database')
                    })
                    .catch((err) =>{
                        console.log(err);
                        console.log('error connecting to db');
                    })
}

module.exports = dbConnect
