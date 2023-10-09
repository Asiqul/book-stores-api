const prisma = require('../../db/connection');

const recommendations = async (limit) => {
    try {
        limit ? (randomNumber = 0) : (randomNumber = Math.floor(Math.random() * 10));
        const books = await prisma.books.findMany({
            skip: randomNumber,
            take: limit ? limit : 10,
            orderBy: [
                {
                    rating: 'desc',
                },
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
        if (books.length !== 0) {
            return books;
        }
        return null;
    } catch (error) {
        throw error;
    }
};

module.exports = recommendations;
