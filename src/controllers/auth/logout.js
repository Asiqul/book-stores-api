const prisma = require('../../db/connection');

const logout = async (req, res) => {
    const userId = req.user.id;
    await prisma.users.update({
        where: {
            id: userId,
        },
        data: {
            refresh_token: null,
        },
    });
    res.status(200).clearCookie('refreshToken').json({
        status: 'OK',
        message: 'User has logged out',
    });
};

module.exports = logout;
