const prisma = require('../db/connection');
const getBooks = async (req, res) => {
  const books = await prisma.books.findMany();
  res.json({
    status: 200,
    message: 'Get data success',
    data: books,
  });
};

module.exports = getBooks;
