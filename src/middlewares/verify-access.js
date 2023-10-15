const jwt = require('jsonwebtoken');

const verifyAccess = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    const accessKey = process.env.ACCESS_TOKEN_KEY;

    if (!token) {
        res.status(401).json({
            status: 'Unauthorized',
            message: 'Access token null.',
        });
    }

    try {
        jwt.verify(token, accessKey, (error, decoded) => {
            if (error) {
                return res.status(401).json({
                    status: 'Unauthorized',
                    message: 'Invalid access token.',
                });
            }
            req.user = decoded;
            next();
        });
    } catch (error) {
        return res.status(500).json({
            status: 'Internal Server Error',
            message: error.message,
        });
    }
};

module.exports = verifyAccess;
