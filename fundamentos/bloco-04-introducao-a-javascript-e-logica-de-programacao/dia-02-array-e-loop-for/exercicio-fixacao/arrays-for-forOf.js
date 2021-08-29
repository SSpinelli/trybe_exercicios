let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
console.log(numbers);
// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let soma = 0;
for (index = 0; index < numbers.length; index += 1) {
  soma += numbers[index]
}
console.log(soma)
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let media = 0;
for (index = 0; index < numbers.length; index += 1) {
  media += (numbers[index] / numbers.length)
}
console.log(media)
// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (media > 20) {
  console.log("valor maior que 20")
} else {
  console.log("valor menor ou igual a 20")
}
// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let higherNumber = [0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}
console.log(higherNumber);
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor impar encontrado";
let numberOfOdds = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2) {
     numberOfOdds += 1;
  }
}

if (numberOfOdds > 0) {
  console.log(numberOfOdds)
} else {
  console.log("nenhum valor ímpar encontrado")
}
// Utilizando for, descubra qual o menor valor contido no array e imprima-o
let lowerNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if(numbers[index] < lowerNumber) {
    lowerNumber = numbers[index]
  }
}
console.log(lowerNumber)
// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let numbers2 = [];

for (let index = 0; index <= 25; index += 1) {
  numbers2.push(index)
}
console.log(numbers2)
// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2;
let numbers2DividedBy2 = [];
for (let index = 0; index < numbers2.length; index += 1) {
  numbers2DividedBy2.push(index / 2)
}
console.log(numbers2DividedBy2);


