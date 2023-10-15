const prisma = require('../../db/connection');

const history = async (req, res) => {
    const userId = req.user.id;
    try {
        const cart = await prisma.cart.findFirst({
            where: {
                userId: userId,
            },
        });

        if (!cart) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'User history not found',
            });
        } else {
            const historyItems = await prisma.historyItems.findMany({
                where: {
                    cartId: cart.id,
                },
                select: {
                    quantity: true,
                    book: {
                        select: {
                            id: true,
                            title: true,
                        },
                    },
                },
            });
            return res.status(200).json({
                status: 'OK',
                message: 'User history',
                data: historyItems,
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: 'Internal Server Error',
            message: error.message,
        });
    }
};

module.exports = history;
