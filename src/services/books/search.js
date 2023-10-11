const searchBooks = require('../../controllers/books/search-books');
const searchAuthor = require('../../controllers/books/search-author');

const search = async (req, res) => {
    let { based_on, q, limit, page } = req.query;
    limit = parseInt(limit);
    limit ? (limit = limit) : (limit = 15);
    page = parseInt(page);
    page ? (page = page) : (page = 1);
    try {
        if (!q && !limit && !page) {
            return res.status(400).json({
                status: 'Bad Request',
                message: 'Query parameter is missing',
            });
        } else if (based_on === 'author') {
            const { books, total_count, page_count } = await searchAuthor(q, limit, page);
            books
                ? res.status(200).json({
                      status: 'OK',
                      message: 'Books found',
                      take_by: 'Author',
                      page: page,
                      per_page: limit,
                      page_count,
                      total_count,
                      books,
                  })
                : res.status(404).json({
                      status: 'Not Found',
                      message: 'Book not found',
                  });
        } else {
            const { search, total_count, page_count } = await searchBooks(q, limit, page);
            search
                ? res.status(200).json({
                      status: 'OK',
                      message: 'Books found',
                      take_by: 'Title',
                      page: page,
                      per_page: limit,
                      page_count,
                      total_count,
                      search,
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

module.exports = search;
