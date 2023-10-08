const prisma = require('../../db/connection');

const international = async () => {
    try {
        const internationalBooks = await prisma.category.findMany({
            take: 10,
            where: {
                name: 'international Books',
            },
            include: {
                books: {
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
        return internationalBooks;
    } catch (error) {
        throw error;
    }
};

module.exports = international;
