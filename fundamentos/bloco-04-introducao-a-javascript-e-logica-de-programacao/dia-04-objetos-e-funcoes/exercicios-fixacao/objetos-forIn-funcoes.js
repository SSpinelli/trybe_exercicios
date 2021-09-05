// Usando o objeto abaixo, faça os exercícios a seguir;
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
// imprima no console uma mensagem de boas-vindas para a personamgem acima, incluindo seu nome;
console.log("Bem-vinda, " + info.personagem)
// Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console;
info["recorrente"] = "Sim";
console.table(info)
// Faça um for/in que mostre todas as chaves do objeto;
for (let key in info) {
  console.log(key)
}
// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto;
for (let key in info) {
  console.log(info[key])
}
// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
}

for (let key in info) {
  if (
    key === "recorrente" && info[key] === "Sim" && info2[key] === "Sim"
  ) {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[key] + " e " + info2[key]);
  }
}
// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for;
function verifyIfPalindrome(string) {
  let reversedString = [];
  for (let key of string) {
    reversedString.push(key)
  }
  reversedString.reverse("")
  if (string === reversedString.join("")) {
    return true
  } else {
    return false
  }
}
// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function maxNumberIndex (numbersArray) {
  let numberIndex = 0;
  for (let key in numbersArray) {
    if (numberIndex < numbersArray[key]) {
      numberIndex = key
    }
  }
  return numberIndex
}
// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function minNumberIndex (numbersArray) {
  let numberIndex = 0;
  for (let key in numbersArray) {
    if (numberIndex > numbersArray[key]) {
      numberIndex = key
    }
  }
  return numberIndex
}
// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres;
function biggestName(namesArray) {
  let biggestName = namesArray[0];
  for (let key in namesArray) {
    if (biggestName.length < namesArray[key].length) {
      biggestName = namesArray[key];
    }
  }
  return biggestName;
}
// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
function mostRepeated(numbersArray) {
  let mostRepeatedNumberCount = 0;
  let currentNumberCount = 0;
  let indexRepeatedNumber = 0;
  for (let key in numbersArray) {
    let verifyNumber = numbersArray[key];
    for (let key2 in numbersArray) {
      if (verifyNumber === numbersArray[key2]) {
        currentNumberCount += 1;
      }
    }
    if (currentNumberCount > mostRepeatedNumberCount) {
      mostRepeatedNumberCount = currentNumberCount;
      indexRepeatedNumber = key;
    }
    currentNumberCount = 0;
  }
  return numbersArray[indexRepeatedNumber];
}
// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word;
function verifyTwoStrings(word, ending) {
  return word.endsWith(ending)
}

function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  controle = true;
  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      controle = false;
    }
  }
  return controle;
}

