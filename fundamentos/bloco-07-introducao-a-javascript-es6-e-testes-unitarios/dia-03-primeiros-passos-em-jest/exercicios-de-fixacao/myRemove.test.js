const myRemove = require('./myRemove')

describe('myRemove', () => {
  test('testa se myRemove retira o 3 do array', () => {
    const array = [1, 2, 3, 4,];
    expect(myRemove(array, 3)).not.toContain(3);
  });
  test('testa se myRemove não retorna o array original', () => {
    const array = [1, 2, 3, 4,];
    expect(myRemove(array, 3)).not.toEqual(array);
  });
  test('testa se myRemove retorna o array original quando passando um número que não consta no array original', () => {
    const array = [1, 2, 3, 4,];
    expect(myRemove(array, 5)).toEqual(array);
  })
});