const bcrypt = require('bcrypt');
const prisma = require('../../db/connection');
const login = require('../../controllers/auth/login');

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.users.findFirst({
        where: {
            email: email,
        },
    });
    if (!user) {
        return res.json({
            status: 'Bad Request',
            message: 'Email tidak terdaftar.',
        });
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
        return res.status(400).json({
            status: 'Bad Request',
            message: 'Password tidak sesuai.',
        });
    }
    const { accessToken, refreshToken } = await login(user);
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        maxAge: 60 * 20,
    });
    res.status(200).json({
        status: 'OK',
        message: 'User logged in',
        accessToken,
    });
};

module.exports = userLogin;
