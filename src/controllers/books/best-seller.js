const prisma = require('../../db/connection');

const bestSeller = async (page, limit) => {
    try {
        limit ? (randomNumber = 0) && (offset = (page - 1) * limit) : (randomNumber = Math.ceil(Math.random() * 7));
        const offset = (page - 1) * limit;
        const total_count = await prisma.books.count({
            orderBy: [
                {
                    purchased: 'desc',
                },
            ],
        });
        const books = await prisma.books.findMany({
            skip: randomNumber || offset,
            take: limit ? limit : 10,
            orderBy: [
                {
                    purchased: 'desc',
                },
            ],
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

module.exports = bestSeller;
