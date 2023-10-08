const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const bookRouter = require('./routes/books/route');
const userRouter = require('./routes/users/route');

const app = express();
dotenv.config();

const port = process.env.APP_PORT;
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/user', userRouter);
app.use('/books', bookRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
