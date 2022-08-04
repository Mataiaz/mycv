const express = require('express')
const {
    createComment,
    getComments,
    getComment,
    deleteComment,
    updateComment
} = require('../controllers/commentController.js')

const router = express.Router()

//GET all comments
router.get('/', getComments)

//GET a single comment
router.get('/:id', getComment)

//POST a new comment
router.post('/', createComment)

//DELETE a comment
router.delete('/:id', deleteComment)

//Update a new comment
router.patch('/:id', updateComment)

module.exports = router