const Category = require('../models/category-model')

const categoryCltr = {}


// List function
categoryCltr.list =  (req, res) =>{
    Category.find()
        .then((categories) =>{
            res.json(categories)
        })
        .catch((err) =>{
            res.json(err)
        })
}

// Create Function
categoryCltr.create = (req,res) =>{
    const c1 = new Category()
    const body = req.body
    c1.name = body.name
    c1.save()
        .then((category) =>{
            res.json(category)
        })
        .catch((err) =>{
            res.json(err)
        })
    
}

// Update Function
categoryCltr.update = (req,res) =>{
    const body = req.body;
    const id   = req.params.id
    Category.findByIdAndUpdate(id, body, {new: true})
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{
            res.json(err)
        })
}

// Delete Function

categoryCltr.delete = (req,res) =>{
    const catId = req.params.id
    Category.findByIdAndDelete(catId)
        .then((data)=>{
            res.json(data)
        })
        .catch((err) =>{
            res.json(err)
        })
}

module.exports = categoryCltr