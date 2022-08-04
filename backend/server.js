require('dotenv').config()

const express = require('express')
const commentRoutes = require('./routes/comments')

//express app
const app = express()

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/comments', commentRoutes)

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port' , process.env.PORT)
})

process.env