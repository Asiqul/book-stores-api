const prisma = require('../db/connection');
const getBooks = async (req, res) => {
    const books = await prisma.books.findMany();
    res.status(200).json({
        message: 'Get data success',
        data: books,
    });
};

module.exports = getBooks;
