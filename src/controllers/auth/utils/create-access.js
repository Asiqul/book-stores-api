const jwt = require('jsonwebtoken');

const createAccess = (user) => {
    const { id, name, email } = user;
    const accessKey = process.env.ACCESS_TOKEN_KEY;

    const accessToken = jwt.sign(
        {
            id,
            name,
            email,
        },
        accessKey,
        {
            expiresIn: '2m',
        }
    );

    return accessToken;
};

module.exports = createAccess;
