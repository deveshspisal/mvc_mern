const express = require('express');
const cors = require('cors')
require('dotenv').config()

console.log(process.env.EMAIL)


const app = express()

app.use(cors())
app.use(express.json())



const dbConfig = require('./config/db')
dbConfig()


// Route Category

const categoryCltr = require('./app/controllers/category-controller')

app.get('/get-categories',categoryCltr.list)
app.post('/create-categories',categoryCltr.create)
app.put('/update-category/:id',categoryCltr.update)
app.delete('/delete-category/:id',categoryCltr.delete)



// Route Expense

const expenseCltr = require('./app/controllers/expense-controller')

app.get('/all-expenses', expenseCltr.list)
app.post('/create-expense', expenseCltr.create)
app.delete('/remove-expense/:id', expenseCltr.update)
app.put('/update-expense/:id', expenseCltr.delete)



app.listen(3333,()=>{
    console.log('server running on port 3333');
})