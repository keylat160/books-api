//dependencies
const express = require('express')
const router = express.Router()

//import books model
const Books = require('../models/books.js')

//index route
router.get('/', async (req, res) => {
    try {
        const books = await Books.find()
        res.json(books)
    } catch (err) {
        res.status(404).json({msg: 'Books not found! :('})
    }
})

//create route POST
router.post('/', (req, res) => {
    if (!req.body.imageURL) {
        req.body.imageURL = undefined
    }
    try {
        Books.create(req.body)
        res.status(201).json('Book successfully created! :D')
    } catch (err) {
        res.status(400).send('400: BAD REQUEST' + err)
    }
})

//details/show route
router.get('/:id', async (req, res) => {
    try {
        const foundBook = await Books.findById(req.params.id)

        if (!foundBook) {
            res.status(404).json({msg: 'That book is not found! :('})
        }
        res.json(foundBook)
    } catch (err) {
        res.status(404).send('404 NOT FOUND!' + err)
    }
})

//update route PUT
router.put('/:id', async (req, res) => {
    if (!req.body.imageURL) {
        req.body.imageURL = undefined
    }
    try {
        const updatedBook = await Books.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(updatedBook)
        res.status(200).json('Book successfully updated! :D')
    } catch (err) {
        res.status(400).send('400: BAD REQUEST' + err)
    }
})

//delete route DELETE
router.delete('/:id', async (req, res) => {
    try {
        const deletedBook = await Books.findByIdAndDelete(req.params.id)
        res.status(200).json('Book successfully deleted! :D')
    } catch (err) {
        res.status(400).send('400: BAD REQUEST' + err)
    }
})

//export router
module.exports = router