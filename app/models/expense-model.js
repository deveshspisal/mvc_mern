const mongoose = require('mongoose');

const {Schema,model} = mongoose

const expenseSchema = new Schema({
    expenseDate:{
        type: Date,
        required:[true, 'Expense date is required']
    },
    amount:{
        type : Number,
        required: [true, 'Amount is required'],
        min:1
    },
    category:{
        type : Schema.Types.ObjectId,
        required : [true, 'Please select the category'],
        ref: 'Category'
    },
    description:{
        type: String,
        required : false
    }
},{ timestamps : true} )

const Expense = model('Expense', expenseSchema);

module.exports = Expense