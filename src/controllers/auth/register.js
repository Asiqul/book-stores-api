const bcrypt = require('bcrypt');
const prisma = require('../../db/connection');

const register = async (userData) => {
    const { name, email, password } = userData;
    const saltRounds = 5;
    bcrypt.genSalt(saltRounds, (error, salt) => {
        bcrypt.hash(password, salt, async (error, hash) => {
            const user = await prisma.users.create({
                data: {
                    name,
                    email,
                    password: hash,
                },
            });
            return user;
        });
    });
};

module.exports = register;
