const myFizzBuzz = require('./fizzBuzz');

describe('Testes para a função FizzBuzz', () => {
  it ('testa se ao passar como parâmetro um número divisivel por 3 e 5 se o retorno é fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
  it ('Teste se ao passar como parâmetro um número divisivel apenas por 3 o retorno é fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  })
  it ('Teste se ao passar como parâmetro um número divisivel apenas por 5 o retorno é buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  })
  it ('Teste se ao passar como parâmetro um número que não é divisivel por 3 nem por 5 se retorna o parâmetro', () => {
    expect(myFizzBuzz(8)).toBe(8);
  })
  it ('Teste se ao passar um tipo que não é number como parâmetro se o retorno é false', () => {
    expect(myFizzBuzz('29')).toBe(false)
  })
})