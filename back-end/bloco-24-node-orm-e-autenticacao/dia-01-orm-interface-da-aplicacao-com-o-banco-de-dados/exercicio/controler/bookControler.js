const { Book } = require('../models');

const getAll = async (_req, res) => {
  const result = await Book.findAll({
    order: [
      ['title'], ['createdAt', 'DESC']
    ]
  });

  return res.status(200).json(result);
}

const getBookById = async (req, res) => {
  const { id } = req.params;

  const result = await Book.findByPk(id)

  return res.status(200).json(result);
}

const getBookByAuthor = async (req, res) => {
  const { author } = req.body;

  console.log(author);
  console.log('author');

  const result = await Book.findAll({ where: { author: author } });

  res.status(200).json(result);
}

const createBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;

  const result = await Book.create({ title, author, pageQuantity });

  return res.status(200).json(result);
}

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;

  const result = await Book.update(
    { title, author, pageQuantity },
    { where: { id } }
  )

  res.status(201).json(result);
}

const deleteBook = async (req, res) => {
  const { id } = req.params;

  const result = await Book.destroy(
    { where: { id } }
  )

  res.status(200).json(result);  
}

module.exports = {
  getAll,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  getBookByAuthor,
}