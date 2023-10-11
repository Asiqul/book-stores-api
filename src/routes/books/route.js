const express = require('express');
const bookRouters = express.Router();
const bookById = require('../../controllers/books/book-by-id');
const search = require('../../services/books/search');
const recommendBooks = require('../../services/books/recommendations');
const populars = require('../../services/books/populars');
const bestSale = require('../../services/books/best-sale');
const intBooks = require('../../services/books/inter-books');

bookRouters.get('/recommendations?', recommendBooks);
bookRouters.get('/populars?', populars);
bookRouters.get('/best-seller?', bestSale);
bookRouters.get('/international?', intBooks);
bookRouters.get('/search?', search);
bookRouters.get('/:bookId', bookById);

module.exports = bookRouters;
