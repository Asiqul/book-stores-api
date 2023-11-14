const prisma = require('../../db/connection');

const category = async (req, res) => {
    const category = await prisma.category.findMany();
    return res.status(200).json({
        status: 'OK',
        message: 'Category found',
        category,
    });
};

module.exports = category;
