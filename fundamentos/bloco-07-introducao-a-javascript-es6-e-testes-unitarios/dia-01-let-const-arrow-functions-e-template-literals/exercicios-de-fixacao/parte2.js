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

// const longestWord = phrase => {
//   const wordsInPhrase = phrase.split(' ');
//   let wordLength = 0;
//   let result = '';

//   for (let index = 0; index < wordsInPhrase.length; index += 1) {
//     if (wordsInPhrase.length > wordLength) {
//       wordLength = wordsInPhrase[index].length;
//       result = wordsInPhrase[index];
//     }
//   }
//   return result
// }

// console.log(longestWord('Eu gosto de nadar'))

// Crie uma página que contenha: Um botão ao qual será associado um event listener; Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão; Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

let clickCount = 0;
const counter = document.getElementById('counter');
const btn = document.getElementById('plusOne');

btn.addEventListener('click', () => counter.innerHTML = clickCount += 1);

// Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
const skillsArray = ['CSS', 'HTML', 'JavaScript', 'Jest', 'BootStrap']

const inputString = (phrase, name) => {
  const phraseArray = phrase.split(' ');
  let newArray = [];
  for (let key of phraseArray) {
   const changeTheX = (key === 'x') ? key = name : key = key;
    newArray.push(changeTheX);
  }
  return newArray.join(' ');
}

const finalPhrase = () => `${inputString('Tryber x aqui', 'João')} Minhas cinco principais habilidades são:
• ${skillsArray[0]}
• ${skillsArray[1]}
• ${skillsArray[2]}
• ${skillsArray[3]}
• ${skillsArray[4]}`;

console.log(finalPhrase())