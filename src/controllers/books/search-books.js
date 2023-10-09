const prisma = require('../../db/connection');
const searchBooks = async (query, limit) => {
    try {
        limit ? (randomNumber = 0) : (randomNumber = Math.floor(Math.random() * 10));
        const books = await prisma.books.findMany({
            skip: randomNumber,
            take: limit ? limit : 15,
            where: {
                OR: [
                    {
                        title: {
                            contains: query,
                        },
                    },
                ],
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
        if (books.length !== 0) {
            return books;
        }
        return null;
    } catch (error) {
        throw error;
    }
};

module.exports = searchBooks;
