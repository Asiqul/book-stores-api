const prisma = require('../../db/connection');
const jwt = require('jsonwebtoken');
const createAccess = require('./utils/create-access');
const createToken = require('./utils/create-token');

const login = async (user) => {
  const accessToken = createAccess(user);
  const refreshToken = createToken(user);
  await prisma.users.update({
    where: {
      id: user.id,
    },
    data: {
      refresh_token: refreshToken,
    },
  });
  return { accessToken, refreshToken };
};

module.exports = login;
