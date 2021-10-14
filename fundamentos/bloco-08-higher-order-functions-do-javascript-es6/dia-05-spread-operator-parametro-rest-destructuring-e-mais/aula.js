// Spread Operator

// Faça uma lista com as suas frutas favoritas;
const specialFruit = ['Banana', 'abacaxi', 'Morango'];
// Faça uma lista de complementos que você gostaria de adicionar;
const additionalItens = ['Granola', 'Leite Moça', 'Nutella'];
const fruitSalad = (fruit, additional) =>  [...fruit, ...additional];
console.log(fruitSalad(specialFruit, additionalItens));

// Array Destructuring;

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
saudacoes[1](saudacoes[0]); // Olá;
// Produza o mesmo resultado acima, porém utilizando array destructuring;
const [greeting, greetingFunction] = saudacoes;

greetingFunction(greeting); // Olá

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo;

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[animal, bebida, comida] = [comida, animal, bebida];

console.log(comida, animal, bebida); // arroz gato água

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo;

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];

// Default destructuring;

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
}; 

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

// ShortHand

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));

// Default parameter

const multiply = (number, value = 1) => {
  return number * value
};

console.log(multiply(8));