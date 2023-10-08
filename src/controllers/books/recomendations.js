const prisma = require('../../db/connection');

const recommendations = async () => {
    const randomNumber = Math.floor(Math.random() * 8);
    try {
        const books = await prisma.books.findMany({
            skip: randomNumber,
            take: 10,
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
        return books;
    } catch (error) {
        throw error;
    }
};

module.exports = recommendations;