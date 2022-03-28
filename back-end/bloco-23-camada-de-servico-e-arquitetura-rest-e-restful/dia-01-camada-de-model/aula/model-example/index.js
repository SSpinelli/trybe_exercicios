const express = require('express');
const bodyParser = require('')
const app = express();
const PORT = process.env.PORT || 3000;

const Author = require('./models/Author');
const Books = require('./models/Books');

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
})

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.authorById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
})

app.get('/books', async (req, res) => {
  const { id } = req.query;
  const books = await Books.getBooksFromAuthor(id);

  res.status(200).json(books);
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Books.getBookById(id);

  if (!book) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(book);
})

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`)
})
