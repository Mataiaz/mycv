const express = require('express')
const {
    createComment,
    getComments,
    getComment,
    deleteComment,
    updateComment
} = require('../controllers/commentController.js')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//require auth for all comment routes
router.use(requireAuth)

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