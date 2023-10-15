const prisma = require('../../db/connection');

const address = async (req, res) => {
    const userId = req.user.id;
    try {
        const user = await prisma.users.findUnique({
            where: {
                id: userId,
            },
            select: {
                address: true,
            },
        });
        return res.status(200).json({
            status: 'OK',
            message: 'User address',
            data: user.address,
        });
    } catch (error) {
        return res.status(500).json({
            status: 'Internal Server Error',
            message: error.message,
        });
    }
};

module.exports = address;
