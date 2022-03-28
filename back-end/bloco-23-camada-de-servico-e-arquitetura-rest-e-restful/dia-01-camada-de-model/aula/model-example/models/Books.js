const connection = require('./connection');

const serialize = (({ id, title, author_id }) => {
  return {
    id,
    title,
    authorId: author_id,
  }
})

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books'
  )
  return books.map(serialize);
}

const getNewAuthor = ({ title, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');
  return { title, fullName }
}

const getBooksFromAuthor = async (id) => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books AS B INNER JOIN model_example.authors AS A ON A.id = B.author_id WHERE A.id=?', [id]
  )

  return books.map(({ title, first_name, middle_name, last_name }) => ({
    title,
    firstName: first_name,
    middleName: middle_name,
    lastName: last_name,
  })).map(getNewAuthor);
};

const getBookById = async (id) => {
  const [book] = await connection.execute(
    'SELECT * FROM model_example.books WHERE id=?', [id]
  );

  if (!book.length) return null;

  const { id, title, authorId } = book.map(serialize)[0];

  return getNewAuthor({ id, title, authorId });
}

module.exports = {
  getAll,
  getBooksFromAuthor,
  getBookById,
};
