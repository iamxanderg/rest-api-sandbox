const express = require('express');
const router = express.Router();
const Author = require('../model/author.model');

router.get('/', getAuthor, (req, res) => {
  res.send(res.author);
});

router.get('/:id', getAuthor, (req, res) => {
  res.send(res.author.name);
});

async function getAuthor(req, res, next) {
  let author;

  try {
    if (req.params.id == undefined) {
      author = await Author.find();
    } else {
      author = await Author.findById(req.params.id);
    }

    if (author == null) {
      return res.status(404).json({ message: 'Cannot find data' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.author = author;
  next();
}

module.exports = router;
