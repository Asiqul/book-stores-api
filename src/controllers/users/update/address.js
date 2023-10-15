const prisma = require('../../../db/connection');

const updateAddress = async (req, res) => {
    const { recipient, province, city, district, postal_code, full_address } = req.body;
    const userId = req.user.id;
    try {
        const user = await prisma.users.findUnique({
            where: {
                id: userId,
            },
        });

        if (!user) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'User not found',
            });
        }

        await prisma.address.create({
            data: {
                recipient,
                province,
                city,
                district,
                postal_code,
                full_address,
                user: {
                    connect: {
                        id: userId,
                    },
                },
            },
        });
        res.status(200).json({
            status: 'OK',
            message: 'Address updated',
        });
    } catch (error) {
        return res.status(500).json({
            status: 'Internal Server Error',
            message: error.message,
        });
    }
};

module.exports = updateAddress;
