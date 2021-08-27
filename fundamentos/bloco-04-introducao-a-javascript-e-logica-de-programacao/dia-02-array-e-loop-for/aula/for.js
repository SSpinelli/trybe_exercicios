// a estrutura do for é feita da seguinte forma, primeiro indicamos o ponto inicial da função, depois indicamos em que momento nós queremos que a repetição se acabe e depois o incremento ou decremento que o nosso indice vai receber para saber se o laço continua ou não. Depois dessa estrutura escrevemos o que nós queremos que a função faça no caso da repetição ser verdadeira, nesse primeiro caso imprimir o resultado da variavel numero * variavel contador.

let numero = 7;
for (let contador = 1; contador <= 9; contador += 1) {
  console.log(numero * contador)
}

// No caso de uma array, utilizamos o index = 0, poís o primeiro item de um array sempre começa por zero.

let listaDeNomes = ["João", "Rafael", "Thiago", "Luís Eduardo", "Ney"]
for (let index = 0; index < listaDeNomes.length; index += 1) {
  console.log("Bom dia " + listaDeNomes[index] + ", o senhor vai querer café?")
}


