const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const bookRouters = require('./routes/books/route');
const authRouter = require('./routes/auth/route');
const usersRouter = require('./routes/users/route');

const app = express();
dotenv.config();

const port = process.env.APP_PORT;
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);

app.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to Books API!</h1>');
});
app.use('/auth/user', authRouter);
app.use('/api/books', bookRouters);
app.use('/api/user', usersRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
