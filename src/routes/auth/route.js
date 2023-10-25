const express = require('express');
const userRegister = require('../../services/auth/register');
const userLogin = require('../../services/auth/login');
const logout = require('../../controllers/auth/logout');
const verifyEmail = require('../../middlewares/verify-email');
const verifyPassword = require('../../middlewares/verify-password');
const verifyToken = require('../../middlewares/verify-token');
const getAccess = require('../../controllers/auth/get-access');
const verifyAccess = require('../../middlewares/verify-access');
const authRouter = express.Router();

authRouter.get('/access', verifyToken, getAccess);

authRouter.post('/register', verifyEmail, verifyPassword, userRegister);
authRouter.post('/login', verifyEmail, userLogin);

authRouter.delete('/logout', verifyAccess, verifyToken, logout);

module.exports = authRouter;
