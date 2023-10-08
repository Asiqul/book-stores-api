const express = require('express');
const userRegister = require('../../services/auth/register');
const userLogin = require('../../services/auth/login');
const logout = require('../../controllers/auth/logout');
const verifyEmail = require('../../middlewares/verify-email');
const verifyPassword = require('../../middlewares/verify-password');
const verifyToken = require('../../middlewares/verify-token');
const getAccess = require('../../controllers/auth/get-access');
const userRouter = express.Router();

userRouter.get('/access', verifyToken, getAccess);

userRouter.post('/register', verifyEmail, verifyPassword, userRegister);
userRouter.post('/login', userLogin);

userRouter.delete('/logout', verifyToken, logout);

module.exports = userRouter;
