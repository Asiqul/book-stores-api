const recommendations = require('../../controllers/books/recomendations');
const populars = require('../../controllers/books/populars');
const bestSeller = require('../../controllers/books/best-seller');
const international = require('../../controllers/books/international');

const searchBooks = async (req, res) => {
    const { search } = req.query;
    try {
        if (!search) {
            return res.status(400).json({
                status: 'Bad Request',
                message: 'Query parameter is missing',
            });
        } else if (search === 'recommendations') {
            const recommend = await recommendations();
            return res.status(200).json({
                status: 'OK',
                message: 'Books found',
                recommend,
            });
        } else if (search === 'populars') {
            const popular = await populars();
            return res.status(200).json({
                status: 'OK',
                message: 'Books found',
                popular,
            });
        } else if (search === 'best-seller') {
            const bigSales = await bestSeller();
            return res.status(200).json({
                status: 'OK',
                message: 'Books found',
                bigSales,
            });
        } else if (search === 'international') {
            const intBooks = await international();
            return res.status(200).json({
                status: 'OK',
                message: 'Books found',
                intBooks,
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

module.exports = searchBooks;
