const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const bookRouters = require('./routes/books/route');
const userRouter = require('./routes/users/route');

const app = express();
dotenv.config();

const port = process.env.APP_PORT;
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', (req, res) => {
    res.status(200).send('Welcome to Books API!');
});
app.use('/auth/user', userRouter);
app.use('/api/books', bookRouters);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
