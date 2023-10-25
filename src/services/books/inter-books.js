const international = require('../../controllers/books/international');

const intBooks = async (req, res) => {
    const { page, limit } = req.query;
    try {
        if (!page && !limit) {
            const { books } = await international();
            console.log(books);
            books
                ? res.status(200).json({
                      status: 'OK',
                      message: 'Books found',
                      take_by: 'International Books',
                      books,
                  })
                : res.status(404).json({
                      status: 'Not Found',
                      message: 'Book not found',
                  });
        } else {
            const { books, total_count, page_count } = await international(page, parseInt(limit));
            books
                ? res.status(200).json({
                      status: 'OK',
                      message: 'Books found',
                      take_by: 'International Books',
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

module.exports = intBooks;
