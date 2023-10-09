const prisma = require('../../db/connection');

const bestSeller = async (limit) => {
    try {
        const books = await prisma.books.findMany({
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
                purchased: true,
                cover: {
                    take: 1,
                    select: {
                        cover: true,
                    },
                },
            },
        });
        if (books.length !== 0) {
            return books;
        }
        return null;
    } catch (error) {
        throw error;
    }
};

module.exports = bestSeller;
