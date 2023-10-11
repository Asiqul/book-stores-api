const prisma = require('../../db/connection');

const recommendations = async (page, limit) => {
    try {
        limit ? (randomNumber = 0) && (offset = (page - 1) * limit) : (randomNumber = Math.ceil(Math.random() * 7));
        const offset = (page - 1) * limit;
        const total_count = await prisma.books.count({
            where: {
                category: {
                    some: {
                        name: {
                            contains: 'International',
                        },
                    },
                },
            },
        });
        const books = await prisma.books.findMany({
            skip: randomNumber || offset,
            take: limit ? limit : 10,
            where: {
                category: {
                    some: {
                        name: {
                            contains: 'International',
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
            return null;
        }
        const page_count = Math.ceil(total_count / limit);
        return { books, total_count, page_count };
    } catch (error) {
        throw error;
    }
};

module.exports = recommendations;
