//dependencies
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

//config
require('dotenv').config()
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI
const app = express()

//db connection
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log(`Connected to mongo: ${MONGO_URI}`)
    })

//middleware
app.use(express.urlencoded({extended: true}))
app.use(cors())

//import books controller
const booksController = require('./controllers/books_controllers.js')
app.use('/books', booksController)

//routes
app.get('/', (req, res) => {
    res.send('Welcome to the most amazing Books API!')
})

//listen
app.listen(PORT, () => {
    console.log(`CORS-enabled server running on port: ${PORT}`)
})