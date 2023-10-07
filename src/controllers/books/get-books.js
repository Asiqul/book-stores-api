const prisma = require('../../db/connection');
const getBooks = async (req, res) => {
    const books = await prisma.books.findMany({
        include: {
            author: true,
            publisher: true,
        },
    });
    res.status(200).json({
        message: 'Get data success',
        data: books,
    });
};

module.exports = getBooks;
