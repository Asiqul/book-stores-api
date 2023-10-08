const express = require('express');
const bookById = require('../../controllers/books/book-by-id');
const searchBooks = require('../../services/books/search');
const bookRouter = express.Router();

bookRouter.get('/:bookId', bookById);
bookRouter.get('/?', searchBooks);

module.exports = bookRouter;
