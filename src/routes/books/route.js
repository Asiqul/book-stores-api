const express = require('express');
const bookById = require('../../controllers/books/book-by-id');
const bookRouter = express.Router();

bookRouter.get('/:bookId', bookById);

module.exports = bookRouter;
