const prisma = require('../../db/connection');
const bookById = async (req, res) => {
    const { bookId } = req.params;

    try {
        const book = await prisma.books.findUnique({
            where: {
                id: bookId,
            },
            include: {
                author: true,
                publisher: true,
            },
        });
    } catch (error) {
        return error;
    }
};

module.exports = bookById;
