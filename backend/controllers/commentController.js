const Comment = require('../models/commentModel.js')
const mongoose = require('mongoose')

//get all comments
const getComments = async (req, res) => {
    const comments = await Comment.find({}).sort({createdAt: -1})

    res.status(200).json(comments)
}

//get a single comment
const getComment = async (req, res) => {
    const {id} = req.params

    //Error handling for wrong id
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such comment'})
    }

    const comment = await Comment.findById(id)

    //Error handling for no comment
    if(!comment) {
        return res.status(404).json({error: 'No such comment'})
    }

    res.status(200).json(comment)
}


//create a new comment
const createComment = async (req, res) => {
    const {text} = req.body

    //add doc to db
    try {
        const comment = await Comment.create({text})
        res.status(200).json(comment)
    } catch (error) {
        res.status(400).json({error: error.message})
        console.log(error)
    }
}

//delete a comment
const deleteComment = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such comment'})
    }
    //Will delete comment that has the same id equal to the id stored in db
    const comment = await Comment.findOneAndDelete({_id: id})

    //Error handling for no comment
    if(!comment) {
        return res.status(404).json({error: 'No such comment'})
    }

    res.status(200).json(comment)
}

//update a comment
const updateComment = async (req, res) => {
    const {id} = req.params

    //Error handling for wrong id
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such comment'})
    }

    const comment = await Comment.findByIdAndUpdate({_id: id}, {...req.body})

    //Error handling for no comment
    if(!comment) {
        return res.status(404).json({error: 'No such comment'})
    }

    res.status(200).json(comment)
}

module.exports = {
    getComments,
    getComment,
    createComment,
    deleteComment,
    updateComment
}