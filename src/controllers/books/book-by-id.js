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
        res.status(200).json({ message: 'Book found', book });
    } catch (error) {
        return error;
    }
};

module.exports = bookById;
