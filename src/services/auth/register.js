const register = require('../../controllers/auth/register');
const prisma = require('../../db/connection');

const userRegister = async (req, res) => {
  const userData = req.body;
  try {
    const checkEmail = await prisma.users.findFirst({
      where: {
        email: userData.email,
      },
    });
    if (checkEmail) {
      res.json({
        status: 'Bad Request',
        message: 'Email sudah terdaftar.',
      });
    } else if (!(userData.password === userData.confPassword)) {
      res.json({
        status: 'Bad Request',
        message: 'Konfirmasi password tidak sesuai.',
      });
    } else {
      register(userData);
      res.json({
        status: 'OK',
        message: 'User created success.',
      });
    }
  } catch (error) {
    return error;
  }
};

module.exports = userRegister;
