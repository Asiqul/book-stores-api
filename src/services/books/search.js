const recommendations = require('../../controllers/books/recomendations');
const popularBooks = require('../../controllers/books/populars');
const bestSeller = require('../../controllers/books/best-seller');
const international = require('../../controllers/books/international');
const searchBooks = require('../../controllers/books/search-books');
const searchAuthor = require('../../controllers/books/search-author');

const search = async (req, res) => {
    let { based_on, q, limit } = req.query;
    limit = parseInt(limit);
    try {
        if (!based_on && !q && !limit) {
            return res.status(400).json({
                status: 'Bad Request',
                message: 'Query parameter is missing',
            });
        } else if (based_on === 'recommendations') {
            const recommend = await recommendations(limit);
            recommend
                ? res.status(200).json({
                      status: 'OK',
                      message: 'Books found',
                      recommend,
                  })
                : res.status(404).json({
                      status: 'Not Found',
                      message: 'Book not found',
                  });
        } else if (based_on === 'populars') {
            const populars = await popularBooks(limit);
            populars
                ? res.status(200).json({
                      status: 'OK',
                      message: 'Books found',
                      populars,
                  })
                : res.status(404).json({
                      status: 'Not Found',
                      message: 'Book not found',
                  });
        } else if (based_on === 'best-seller') {
            const bigSales = await bestSeller(limit);
            bigSales
                ? res.status(200).json({
                      status: 'OK',
                      message: 'Books found',
                      bigSales,
                  })
                : res.status(404).json({
                      status: 'Not Found',
                      message: 'Book not found',
                  });
        } else if (based_on === 'international') {
            const intBooks = await international(limit);
            intBooks
                ? res.status(200).json({
                      status: 'OK',
                      message: 'Books found',
                      intBooks,
                  })
                : res.status(404).json({
                      status: 'Not Found',
                      message: 'Book not found',
                  });
        } else if (based_on === 'author') {
            const books = await searchAuthor(q, limit);
            books
                ? res.status(200).json({
                      status: 'OK',
                      message: 'Books found',
                      books,
                  })
                : res.status(404).json({
                      status: 'Not Found',
                      message: 'Book not found',
                  });
        } else if (q || limit) {
            const search = await searchBooks(q, limit);
            search
                ? res.status(200).json({
                      status: 'OK',
                      message: 'Books found',
                      search,
                  })
                : res.status(404).json({
                      status: 'Not Found',
                      message: 'Book not found',
                  });
        } else {
            return res.status(404).json({
                status: 'Not Found',
                message: 'Book not found',
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: 'Internal Server Error',
            message: error,
        });
    }
};

module.exports = search;
