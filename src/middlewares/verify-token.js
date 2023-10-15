const jwt = require('jsonwebtoken');
const prisma = require('../db/connection');

const verifyToken = async (req, res, next) => {
    const refreshKey = process.env.REFRESH_TOKEN_KEY;
    try {
        const token = req.cookies.refreshToken;
        if (!token) {
            return res.status(401).json({
                status: 'Unauthorized',
                message: 'Invalid token.',
            });
        }
        const user = await prisma.users.findFirst({
            where: {
                refresh_token: token,
            },
        });
        if (!user) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'Invalid user token.',
            });
        }
        jwt.verify(token, refreshKey, (error) => {
            if (error) {
                return res.status(403);
            }
            req.user = user;
        });
        next();
    } catch (error) {
        return res.status(500).json({
            status: 'Internal Server Error',
            message: error.message,
        });
    }
};

module.exports = verifyToken;
