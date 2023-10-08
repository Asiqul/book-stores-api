const prisma = require('../../db/connection');

const bestSeller = async () => {
    try {
        const books = await prisma.books.findMany({
            take: 10,
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
                purchased: true,
                cover: {
                    take: 1,
                    select: {
                        cover: true,
                    },
                },
            },
        });
        return books;
    } catch (error) {
        throw error;
    }
};

module.exports = bestSeller;
