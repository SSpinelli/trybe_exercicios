const { encode } = require('./encodeDecode');
const { decode } = require('./encodeDecode');

describe('testa as funções encode e decode', () => {
  it ('testa se enconde e decode são funções', () => {
    expect(typeof encode && typeof decode).toBe('function');
  })
  it ('testa se a funçao encode transforma as vogais a, e, i, o, u em 1, 2, 3, 4, 5, respectivamente', () => {
    expect(encode('aeiou')).toBe('12345');
  })
  it ('testa se a funçao decode transforma as vogais 1, 2, 3, 4, 5 em a, e, i, o, u, respectivamente', () => {
    expect(decode('12345')).toBe('aeiou');
  })
  it ('testa se as demais letras e números não são convertidas para cada caso', () => {
    expect(encode('qwrtypsdfghjklzxcvbnm')).toBe('qwrtypsdfghjklzxcvbnm');
    expect(decode('6789')).toBe('6789');
  })
  it ('testa se a string retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('La La Land').length === 'La La Land'.length).toBe(true);
    expect(decode('L1 L1 L1nd').length === 'L1 L1 L1nd'.length).toBe(true);
  })
})