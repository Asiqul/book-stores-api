const prisma = require('../../db/connection');

const searchAuthor = async (query, limit) => {
    try {
        limit ? (randomNumber = 0) : (randomNumber = Math.floor(Math.random() * 10));
        const authors = await prisma.author.findMany({
            skip: randomNumber,
            where: {
                name: {
                    contains: query,
                },
            },
            include: {
                books: {
                    take: limit ? limit : 15,
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
                },
            },
        });

        if (authors.length !== 0) {
            const books = authors.map((author) => {
                return author.books.map((book) => {
                    return {
                        id: book.id,
                        title: book.title,
                        author: {
                            name: author.name,
                        },
                        price: book.price,
                        rating: book.rating,
                        cover: book.cover,
                    };
                });
            });
            return books;
        }
        return null;
    } catch (error) {
        throw error;
    }
};

module.exports = searchAuthor;
