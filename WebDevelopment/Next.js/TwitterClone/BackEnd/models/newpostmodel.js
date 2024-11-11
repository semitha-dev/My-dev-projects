const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,

    },
    content:{
        type: String,
        required: true,
        
        maxlenght: 500,

    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    replies: [
        {
          content: { type: String, required: true },
          username: { type: String, required: true },
          createdAt: { type: Date, default: Date.now },
        },
    ],
})

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;