const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const router = require('./routes/route');
const app = express();
dotenv.config();

const port = process.env.APP_PORT;
app.use(express.json());
app.use(cookieParser());
app.use('/', router);
app.use(cors());
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
