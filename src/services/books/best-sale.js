const bestSeller = require('../../controllers/books/best-seller');

const bestSale = async (req, res) => {
    const { page, limit } = req.query;
    try {
        if (!page && !limit) {
            const { books } = await bestSeller();
            books
                ? res.status(200).json({
                      status: 'OK',
                      message: 'Books found',
                      take_by: 'best-seller',
                      books,
                  })
                : res.status(404).json({
                      status: 'Not Found',
                      message: 'Book not found',
                  });
        } else {
            const { books, total_count, page_count } = await bestSeller(page, parseInt(limit));
            books
                ? res.status(200).json({
                      status: 'OK',
                      message: 'Books found',
                      take_by: 'best-seller',
                      page: parseInt(page),
                      per_page: parseInt(limit),
                      page_count,
                      total_count,
                      books,
                  })
                : res.status(404).json({
                      status: 'Not Found',
                      message: 'Book not found',
                  });
        }
    } catch (error) {
        return res.status(500).json({
            status: 'Internal Server Error',
            message: error.message,
        });
    }
};

module.exports = bestSale;
