const createAccess = require('./utils/create-access');

const getAccess = async (req, res) => {
    const user = req.user;
    const accessToken = createAccess(user);
    res.status(202).json({
        status: 'Accepted',
        message: 'New access token created',
        accessToken: accessToken,
    });
};

module.exports = getAccess;
