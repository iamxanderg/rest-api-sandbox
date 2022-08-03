const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const port = process.env.PORT;
const host = process.env.HOST;
const dbUri = process.env.DB_URI;

mongoose.connect(dbUri, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => {
  console.error(error);
});
db.once('open', () => console.error('Connected to Database'));

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const authorRouter = require('./routes/author.route');
app.use('/authors', authorRouter);

const bookRouter = require('./routes/book.route');
app.use('/books', bookRouter);

app.listen(port, host, () => {
  console.log(`Server listening at http://${host}:${port}`);
});
