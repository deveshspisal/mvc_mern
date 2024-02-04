const Expense = require('../models/expense-model')

const expenseCltr = {}

expenseCltr.list = (req, res)=>{
    Expense.find()
        .then((expense) =>{
            res.json(expense);
        })
        .catch((err) =>{
            res.json(err)
        })
}


expenseCltr.create = (req,res) =>{
    const expenseBody = req.body
    const setExpense = new Expense(expenseBody)
    setExpense.save()
        .then((expense) =>{
            res.json(expense)
        })
        .catch((err) =>{
            res.json(err)
        })
}

expenseCltr.update = (req,res) =>{
    const expenseId = req.params.id
    Expense.findByIdAndDelete(expenseId)
        .then((data) =>{
            res.json(data)
        })
        .catch((err) =>{
            res.json(err)
        })
}

expenseCltr.delete = (req,res) =>{
    const id = req.params.id;
    const body = req.body;
    Expense.findByIdAndUpdate(id, body, {new:true, runValidators:true})
        .then((updatedExpense)=>{
            res.json(updatedExpense)
        })
        .catch((err) =>{
            res.json(err)
        })
}

module.exports = expenseCltr