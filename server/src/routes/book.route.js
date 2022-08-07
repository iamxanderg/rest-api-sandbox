const express = require('express');
const router = express.Router();
const Author = require('../model/author.model');
const Book = require('../model/book.model');

router.get('/', getBook, (req, res) => {
  res.send(res.book);
});

router.get('/:id', getBook, (req, res) => {
  res.send({ ...res.book });
});

async function getBook(req, res, next) {
  let bookData;

  try {
    if (req.params.id == undefined) {
      bookData = await Book.find();
    } else {
      book = await Book.findById(req.params.id);
      allBooks = await Book.find({ authorId: book.authorId });
      author = await Author.findById(book.authorId);
      bookData = {
        title: book.title,
        genre: book.genre,
        name: author.name,
        age: author.age,
        books: allBooks,
      };
    }

    if (bookData === null) {
      return res.status(404).json({ message: 'Cannot find data' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.book = bookData;
  next();
}

module.exports = router;
