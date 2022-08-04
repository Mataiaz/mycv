const mongoose = require('mongoose')

const Schema = mongoose.Schema

//This is where we decide the structure and model of a comment
const commentSchema = new Schema({
    text: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Comment', commentSchema)
