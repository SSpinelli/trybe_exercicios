// Crie uma função que receba um número e retorne o seu fatorial;

// const numberFactor = number => {
//   let result = 1;

//   for (let index = 1; index <= number; index += 1) {
//     result *= index;
//   }

//   return result;
// }

// console.log(numberFactor(0));

// const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(5));

// Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = phrase => {
  const wordsInPhrase = phrase.split(' ');
  let wordLength = 0;
  let result = '';

  for (let index = 0; index < wordsInPhrase.length; index += 1) {
    if (wordsInPhrase.length > wordLength) {
      wordLength = wordsInPhrase[index].length;
      result = wordsInPhrase[index];
    }
  }
  return result
}

console.log(longestWord('piroca louca na tua cara'))