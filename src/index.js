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

app.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to Books API!</h1>');
});
app.use('/auth/user', userRouter);
app.use('/api/books', bookRouters);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
