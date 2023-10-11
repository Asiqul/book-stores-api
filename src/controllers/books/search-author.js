const prisma = require('../../db/connection');

const searchAuthor = async (query, limit, page) => {
    try {
        const offset = (page - 1) * limit;
        const total_count = await prisma.books.count({
            where: {
                author: {
                    some: {
                        name: {
                            contains: query,
                        },
                    },
                },
            },
        });

        const books = await prisma.books.findMany({
            skip: offset,
            take: limit,
            where: {
                author: {
                    some: {
                        name: {
                            contains: query,
                        },
                    },
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
            return books === null;
        }
        const page_count = Math.ceil(total_count / limit);
        return { books, total_count, page_count };
    } catch (error) {
        throw error;
    }
};

module.exports = searchAuthor;
