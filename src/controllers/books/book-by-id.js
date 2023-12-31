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
                cover: true,
            },
        });

        if (!book) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'Book not found',
            });
        }

        await prisma.books.update({
            where: {
                id: bookId,
            },
            data: {
                views: {
                    increment: 1,
                },
            },
        });

        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).json({
            status: 'Internal Server Error',
            message: error.message,
        });
    }
};

module.exports = bookById;
