const express = require('express');
const router = express.Router();
const Book = require('../model/book.model');

router.get('/', getBook, (req, res) => {
  res.send(res.book);
});

router.get('/:id', getBook, (req, res) => {
  res.send(res.book.title);
});

async function getBook(req, res, next) {
  let book;

  try {
    if (req.params.id == undefined) {
      book = await Book.find();
    } else {
      book = await Book.findById(req.params.id);
    }

    if (book == null) {
      return res.status(404).json({ message: 'Cannot find data' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.book = book;
  next();
}

module.exports = router;
