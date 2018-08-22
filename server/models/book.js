const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {        
        type: String,
        required: true
    },
    review: {
        type: String,
        default: 'n/a'       
    },
    pages: {
        type: String,
        default: 'n/a'       
    },
    rating: {
        type: String,
        required: true,
        min: 1,
        max: 5      
    },
    price: {
        type: String,
        default: 'n/a'          
    },
    ownerId: {
        type: String,
        required: true
    }
},{timestamps: true})

const book = mongoose.model('book', bookSchema)

module.exports = { Book }