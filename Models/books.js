const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookSchema = new Schema({
            googleID: {
                type: String,
                required: true,

            },
            title: {
                type: String,
               
            },
            link: {
                type: String,
            },
            image: {
                type: String,
            },
            description: {
                type: String, 
            },
            });

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;