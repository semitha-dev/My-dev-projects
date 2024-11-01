const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required: true,

    },
    password:{
        type:String,
        required:true,
    }
    
})

const userdetail = mongoose.model('userdetail',userSchema)

module.exports = userdetail