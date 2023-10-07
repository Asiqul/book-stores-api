const express = require('express');
const getBooks = require('../controllers/books/get-books');
const userRegister = require('../services/auth/register');
const userLogin = require('../services/auth/login');
const verifyAccess = require('../middlewares/verify-access');
const verifyEmail = require('../middlewares/verify-email');
const verifyPassword = require('../middlewares/verify-password');
const verifyToken = require('../middlewares/verify-token');
const getAccess = require('../controllers/auth/get-access');
const logout = require('../controllers/auth/logout');
const router = express.Router();

router.get('/books', verifyAccess, getBooks);
router.post('/register', verifyEmail, verifyPassword, userRegister);
router.post('/login', userLogin);
router.get('/access', verifyToken, getAccess);
router.delete('/logout', verifyToken, logout);

module.exports = router;
