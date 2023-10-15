const express = require('express');
const verifyAccess = require('../../middlewares/verify-access');
const updateAddress = require('../../controllers/users/update/address');
const profile = require('../../controllers/users/profile');
const checkout = require('../../controllers/users/checkout');
const history = require('../../controllers/users/history');
const address = require('../../controllers/users/address');
const usersRouter = express.Router();

usersRouter.get('/profile', verifyAccess, profile);
usersRouter.get('/history', verifyAccess, history);
usersRouter.get('/address', verifyAccess, address);

usersRouter.post('/checkout', verifyAccess, checkout);

usersRouter.put('/address', verifyAccess, updateAddress);

module.exports = usersRouter;
