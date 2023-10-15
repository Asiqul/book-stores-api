const prisma = require('../../db/connection');

const profile = async (req, res) => {
    const userId = req.user.id;
    try {
        const user = await prisma.users.findUnique({
            where: {
                id: userId,
            },
            select: {
                firstname: true,
                lastname: true,
                email: true,
                phone: true,
                address: {
                    select: {
                        recipient: true,
                        province: true,
                        city: true,
                        district: true,
                        postal_code: true,
                        full_address: true,
                    },
                },
            },
        });
        return res.status(200).json({
            status: 'OK',
            message: 'User profile',
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            status: 'Internal Server Error',
            message: error.message,
        });
    }
};

module.exports = profile;
