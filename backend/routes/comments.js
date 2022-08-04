const express = require('express')

const router = express.Router()

//GET all comments
router.get('/', (req, res) => {
    res.json({mssg: 'hello i am ALL'})
})

//GET a single comment
router.get('/:id', (res, req) => {
    res.json({mssg: 'hello i am SINGEL'})
})

//POST a new comment
router.post('/', (req, res) => {
    res.json({mssg: 'hello i am POST'})
})

//DELETE a comment
router.delete('/:id', (req, res) => {
    res.json({mssg: 'hello i am DELETE'})
})

//Update a new comment
router.patch('/_id', (req, res) => {
    res.json({mssg: 'hello i am UPDATE'})
})
module.exports = router