//dependencies
const mongoose = require('mongoose')

//schema
const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: {type: String, default: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
})

//mongoose model
const Books = mongoose.model('Books', bookSchema)

//export model
module.exports = Books