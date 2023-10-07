const bcrypt = require('bcrypt');
const prisma = require('../../db/connection');

const register = async (userData) => {
    let { firstname, lastname, email, phone, password } = userData;
    firstname = firstname.charAt(0).toUpperCase() + firstname.slice(1);
    lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1);
    const saltRounds = 5;
    bcrypt.genSalt(saltRounds, (error, salt) => {
        bcrypt.hash(password, salt, async (error, hash) => {
            const user = await prisma.users.create({
                data: {
                    firstname,
                    lastname,
                    email,
                    phone,
                    password: hash,
                },
            });
            return user;
        });
    });
};

module.exports = register;
