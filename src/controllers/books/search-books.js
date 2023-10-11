const prisma = require('../../db/connection');
const searchBooks = async (q, limit, page) => {
    try {
        const offset = (page - 1) * limit;
        const total_count = await prisma.books.count({
            where: {
                title: {
                    contains: q,
                },
            },
        });

        const search = await prisma.books.findMany({
            skip: offset,
            take: limit,
            where: {
                title: {
                    contains: q,
                },
            },
            select: {
                id: true,
                title: true,
                author: {
                    select: {
                        name: true,
                    },
                },
                price: true,
                rating: true,
                cover: {
                    take: 1,
                    select: {
                        cover: true,
                    },
                },
            },
        });
        if (total_count === 0) {
            return search === null;
        }
        const page_count = Math.ceil(total_count / limit);
        return { search, total_count, page_count };
    } catch (error) {
        throw error;
    }
};

module.exports = searchBooks;
