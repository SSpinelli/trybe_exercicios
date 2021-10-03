// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const joaoSpinelli = {
  fullName: 'João Gabriel Soriano Spinelli',
  idade: 29,
  cidade: 'Recife',
}

const x = (object, key, value) => object[key] = value;
x(joaoSpinelli, 'Sabe falar inglês?', true);

