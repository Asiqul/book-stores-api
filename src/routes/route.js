const express = require('express');
const getBooks = require('../controllers/get-books');
const userRegister = require('../services/auth/register');
const userLogin = require('../services/auth/login');
const verifyAccess = require('../middleware/verify-access');
const verifyEmail = require('../middleware/verify-email');
const verifyPassword = require('../middleware/verify-password');
const verifyToken = require('../middleware/verify-token');
const getAccess = require('../controllers/auth/get-access');
const logout = require('../controllers/auth/logout');
const router = express.Router();

router.get('/books', verifyAccess, getBooks);
router.post('/register', verifyEmail, verifyPassword, userRegister);
router.post('/login', userLogin);
router.get('/access', verifyToken, getAccess);
router.delete('/logout', verifyToken, logout);

module.exports = router;
