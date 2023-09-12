const createAccess = require('./utils/create-access');

const getAccess = async (req, res) => {
  const user = req.user;
  const accessToken = createAccess(user);
  res.json({
    status: 'OK',
    message: 'New access token created',
    accessToken: accessToken,
  });
};

module.exports = getAccess;
