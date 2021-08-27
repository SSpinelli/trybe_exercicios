// Cada item do array recebe um número de indice que começa a partir do 0.

let pizzas = ["4 Queijos", "Frango com Catupiry", "Marguerita", "Calabresa", "Peperone"];

// Para colocar um novo item no array, deve se colocar o indice em que esse novo imput vai ficar. Cuidado para não colocar em um indice que já contem um valor pois este será substituído.

pizzas[5] = "Portuguesa";

// Para evitar o problema acima, existe o comando .push, que vai colocar o novo imput sempre na última posição do array.

pizzas.push("Mussarela");

// O comando .length nos informa qual o tamanho total do nosso array, nesse exemplo [7], as 5 inicias e as 2 que foram incrementadas logo acima.

console.log(pizzas.length);

// O comando .sort vai nos passar os elementos do array em ordem alfabética (em caso de strings) ou crescente (em caso de números).

console.log(pizzas.sort());

// Colocando a variavel + [Indice do elemnto que você quer], você consegue visualizar isoladamente qual valor está relacionado a aquele indice.

console.log(pizzas[2]);

// As variáveis compostas nos dão a possibilidade de vinculalas a laços de repetição, o que possibilita automatizar algumas atividades que ficariam muito repetitivas. no caso da função abaixo, ela vai imprimir todos os sabores de pizzas em uma coluna.

for (let index = 0; index < pizzas.length; index += 1) {
  console.log(pizzas[index]);
}

let taskList = ["tomar café", "Reunião", "Brincar com o cachorro"];
console.log(taskList.length);

let searchForFirstTask = taskList[0];
console.log(searchForFirstTask);

// Array.lenght - 1 é utilizado para descobrir o úlitmo elemento do array.

let searchFotLastTask = taskList[taskList.length - 1];
console.log(searchFotLastTask);

// Como vimos acima utilizamos o .push para inserir um novo elemento no fim do array.

taskList.push("Fazer exercícios da Trybe");
console.log(taskList);

// Já o comando .unshift faz igual ao push, só que coloca no ínicio do array.

taskList.unshift("Arrumar a cama");
console.log(taskList);

// O comando .pop() exclui o último elemento de um array, se quiser excluir o primeiro o comando a ser utilizado é o .shift()

taskList.shift();
taskList.pop();
console.log(taskList)

// O .indexOf("nome do elemento") é utilizado para procurar o índice de um item específico em um array.

let indexOfTask = taskList.indexOf("Reunião");
console.log(indexOfTask)
