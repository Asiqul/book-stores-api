const prisma = require('../../db/connection');

const international = async (limit) => {
    try {
        const internationalBooks = await prisma.category.findMany({
            where: {
                name: 'international Books',
            },
            include: {
                books: {
                    take: limit ? limit : 10,
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
        if (internationalBooks.length !== 0) {
            return internationalBooks;
        }
        return null;
    } catch (error) {
        throw error;
    }
};

module.exports = international;
