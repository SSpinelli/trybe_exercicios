// Em seguida veremos, os 3 passos para a resolução de um problema.

// O enunciado diz: Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16";
let fruits = [3, 4, 10, 1, 12];

// 1 passo - interpretação | portanto vamos interpretar o que está sendo pedido.

// Devemos utilizar o array fruits;
// O termo "percorra" indica uma estrutura de repetição, ou loop;
// "somando todos os valores" mostra que devemos ter uma variável que guarda o valor da soma dos valores;
// O termo "caso" indica uma estrutura condicional, ou if;
// "imprima o valor final" indica um console.log

// 2 passo - criação do algoritmo | para isso faremos uso do baby steps, que é um metodo que nos estimula a transformar grandes problemas, em varios pequenos e simples.

// Adicionar o array;
// Criar uma variável com valor 0;
// Criar um loop que percorre o array;
// Incrementar a varável com o valor correspondente a cada loop;
// criar um if com a condição da variável ser maior que 15;
// Caso a variável obedeça a condição - imprimir a variável;
// Caso não obedeça a condição; - imprimir a mensagem "valor menor que 16"

// 3 passo - Codificação do algoritmo | agora é só seguir o passo apasso definido na etapa anterior.

// Adicionar o array;
let fruits2 = [3, 4, 10, 1, 12];
// Criar uma variável com valor 0;
let sum = 0;
// Criar um loop que percorre o array;
for (let index = 0; index < fruits2.length; index += 1) {
// Incrementar a variável com o valor correspondente a cada loop;
  sum += fruits2[index];
}
// Criar um if com a condição da variável se maior que 15;
if (sum > 15) {
// Caso a variável obedeça a condição: imprimir a variável;
  console.log(sum);
} else {
// Caso não obedeça a condição: Imprimir a mensagem "valor menor qu 16"
  console.log("valor menor que 16")
}

// Apos escrever um algoritmo sempre responda as seguintes perguntas:
// Eu resolvi o problema?;
// Havia outras maneiras de resolver o problema;
// A maneira que eu escolhi foi a mais eficiente possível?;
// Seria possível inverter ou retirar algum passo?
// Se eu fosse um computador, conseguiria entender todas as instruções?;
// lembre-se sempre, se travar em algum exercício, recomece seu raciocinio com baby steps;