const express = require('express');
const Controler = require('./controler/bookControler');

const app = express();

app.use(express.json());

app.get('/', Controler.getAll);
app.get('/author', Controler.getBookByAuthor);
app.get('/:id', Controler.getBookById)
app.post('/', Controler.createBook)
app.put('/:id', Controler.updateBook)
app.delete('/:id', Controler.deleteBook)


app.listen(3005, () => {
  console.log('Aplicação escutando na porta 3005');
})