const express = require('express');
const bookById = require('../../controllers/books/book-by-id');
const search = require('../../services/books/search');
const bookRouters = express.Router();

bookRouters.get('/:bookId', bookById);
bookRouters.get('/?', search);

module.exports = bookRouters;
