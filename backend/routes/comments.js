const express = require('express')
const Comment = require('..models/commentModel')

const router = express.Router()

//GET all comments
router.get('/', (req, res) => {
    res.json({mssg: 'hello i am ALL'})
})

//GET a single comment
router.get('/:id', (req, res) => {
    res.json({mssg: 'hello i am SINGEL'})
})

//POST a new comment
router.post('/', async (req, res) => {
    const {text} = req.body

    try {
        const comment = await Comment.create({text})
        res.status(200).json(comment)
    } catch (error) {
        console.log(error)
    }
    res.json({mssg: 'hello i am POST'})
})

//DELETE a comment
router.delete('/:id', (req, res) => {
    res.json({mssg: 'hello i am DELETE'})
})

//Update a new comment
router.patch('/:id', (req, res) => {
    res.json({mssg: 'hello i am UPDATE'})
})
module.exports = router