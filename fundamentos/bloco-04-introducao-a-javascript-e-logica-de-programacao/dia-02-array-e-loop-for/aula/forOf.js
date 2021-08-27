// O for/of nos permite criar loops em objetos iteráveis como strings, arrays, entre outros.

let numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
  console.log(numero);
}

//Neste exemplo o for/of transforma cada letra de uma string em um elemento.

let word = "Hello";
for (let letter of word) {
  console.log(letter);
}

// Nós conseguimos somar um valor a cada elemento do array e retorná-los. É importante ressaltar, que o for/of não muda o array.

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum)
}
console.log(arrOfNumbers)