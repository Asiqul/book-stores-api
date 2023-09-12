// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// const data = [
//   {
//     title: 'Eloquent JavaScript, Third Edition',
//     subtitle: 'A Modern Introduction to Programming',
//     author: 'Marijn Haverbeke',
//     published: '2018-12-04T00:00:00.000Z',
//     publisher: 'No Starch Press',
//     pages: 472,
//     price: 340000,
//     rating: 3.3,
//     description:
//       'JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
//     cover:
//       'https://books.google.com.sg/books/publisher/content?id=FSVTDwAAQBAJ&hl=id&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U2pB7WWvKNb7hUAz7IcoXQ3vc4yCw&w=1280',
//   },
//   {
//     title: 'Practical Modern JavaScript',
//     subtitle: 'Dive into ES6 and the Future of JavaScript',
//     author: 'Nicolás Bevacqua',
//     published: '2017-07-16T00:00:00.000Z',
//     publisher: "O'Reilly Media",
//     pages: 334,
//     price: 340000,
//     rating: 3.2,
//     description:
//       'To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.',
//     cover:
//       'https://images-na.ssl-images-amazon.com/images/I/813hbklwWBL._AC_UL600_SR600,600_.jpg',
//   },
//   {
//     title: 'Understanding ECMAScript 6',
//     subtitle: 'The Definitive Guide for JavaScript Developers',
//     author: 'Nicholas C. Zakas',
//     published: '2016-09-03T00:00:00.000Z',
//     publisher: 'No Starch Press',
//     pages: 352,
//     price: 340000,
//     rating: 3.6,
//     description:
//       'ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.',
//     cover:
//       'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcROcev67v2O6oeO61lN0dOoqIms7YtI1Moe2n-tmKNv98Bf0xkR',
//   },
//   {
//     title: 'Speaking JavaScript',
//     subtitle: 'An In-Depth Guide for Programmers',
//     author: 'Axel Rauschmayer',
//     published: '2014-04-08T00:00:00.000Z',
//     publisher: "O'Reilly Media",
//     pages: 460,
//     price: 340000,
//     rating: 3.1,
//     description:
//       'Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.',
//     cover:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9YDfwbDW7i3D9zZ3Y847GBmaMzD2eVr7logbcAwNXidCf96lj',
//   },
//   {
//     title: 'Learning JavaScript Design Patterns',
//     subtitle: "A JavaScript and jQuery Developer's Guide",
//     author: 'Addy Osmani',
//     published: '2012-08-30T00:00:00.000Z',
//     publisher: "O'Reilly Media",
//     pages: 254,
//     price: 340000,
//     rating: 3.5,
//     description:
//       "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
//     cover:
//       'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSvhM_AaivQtWvcl0KrfrK9E9g4VNb6ENYlX5hgy9L8ryWMGzNY',
//   },
//   {
//     title: "You Don't Know JS Yet",
//     subtitle: 'Get Started',
//     author: 'Kyle Simpson',
//     published: '2020-01-28T00:00:00.000Z',
//     publisher: 'Independently published',
//     pages: 143,
//     price: 340000,
//     rating: 3.9,
//     description:
//       "The worldwide best selling You Don't Know JS book series is back for a 2nd edition: You Don't Know JS Yet. All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond.",
//     cover:
//       'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2iuCu7_-mrCEW-DO718Mb4Dj_efEw4D_5mq96-fpz-g9Q92YV',
//   },
//   {
//     title: 'Pro Git',
//     subtitle: 'Everything you neeed to know about Git',
//     author: 'Scott Chacon and Ben Straub',
//     published: '2014-11-18T00:00:00.000Z',
//     publisher: 'Apress; 2nd edition',
//     pages: 458,
//     price: 340000,
//     rating: 3.7,
//     description:
//       'Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.',
//     cover:
//       'https://images-fe.ssl-images-amazon.com/images/I/517gWfd01xL._AC_UL600_SR600,600_.jpg',
//   },
//   {
//     title: 'Rethinking Productivity in Software Engineering',
//     subtitle: '',
//     author: 'Caitlin Sadowski, Thomas Zimmermann',
//     published: '2019-05-11T00:00:00.000Z',
//     publisher: 'Apress',
//     pages: 310,
//     price: 340000,
//     rating: 4,
//     description:
//       'Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 "Dagstuhl" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.',
//     cover:
//       'https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-4221-6',
//   },
// ];

// const insert = async () => {
//   data.map(async (item) => {
//     await prisma.books.create({ data: item });
//   });
// };

// insert();
