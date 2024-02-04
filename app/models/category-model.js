const mongoose = require('mongoose');

const {Schema,model} = mongoose


// category MC
const categorySchema = new Schema({
    name : {
        type : String,
        required : true
    }
},{timestamps:true})

const Category = model('Category', categorySchema);

module.exports = Category