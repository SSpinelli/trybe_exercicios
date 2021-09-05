function nomeDaFuncao(param1, param2) {
  //código que faz alguma cois
  let resultado = param1 + param2;
  return resultado;
}

let statusCarro = "desligado";
let aceleracao = 0;
let rotacaoDoVolante = 0;

function ligarDesligar() {
  if (statusCarro === "desligado") {
    statusCarro = "ligado";
  } else {
    statusCarro = "desligado"
  }
  return statusCarro;
}

function acelerar (incremento) {
  aceleracao += incremento;
  return "Acelerando a " + aceleracao + " km/h";
}

function frear (decremento) {
  aceleracao -= decremento;
  return "Desacelerando para " + aceleracao + " km/h"
}

function girarVolante (anguloRotacao) {
  rotacaoDoVolante = anguloRotacao;
  return rotacaoDoVolante + " graus"
}

console.log(ligarDesligar());
console.log(acelerar(10));
console.log(girarVolante(-90));
console.log(frear(5));
console.log(girarVolante(0));
console.log(frear(5));
console.log(ligarDesligar());

// Pegue cada um dos exercícios da primeira parte das nossas aulas de JavaScript e faça com que todos eles sejam funções de um mesmo arquivo. 

// Faça 5 programas um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para;

// Adição
function sum (a, b) {
  return a + b; 
}
// Subtração
function minus (a, b) {
  return a - b;
}
// Multiplicação
function times (a, b) {
  return a * b;
}
// Divisão
function divided (a, b) {
  return a / b;
}
// Módulo
function module (a, b) {
  return a % b;
}
// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados;
function itsBigger (a, b) {
  if (a > b) {
    return a;
  } if (b > a) {
    return b;
  }
}
// Faça um programa que retorne o maior de três números.
function WhoIsTheBiggest (a, b, c) {
  if (a > b && a > c) {
    return a;
  } if (b > a && b > c) {
    return b;
  } if (c > a && c > b) {
    return c;
  }
}
// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário;
function itsTruhty (a) {
  if (a === true) {
    return "positive"
  } else if (a === false) {
    return "negative"
  } else {
    return "zero"
  }
}
// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso o contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
function itsTriangle (a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0 ) {
    return "Escreva apenas ângulos positivos";
  } switch (a + b + c) {
    case 180:
      return true;
    default:
      return false;
  }
}
// escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
function chessMoves (nomeDaPeca) {
  switch (nomeDaPeca.toLowerCase()) {
    case "pawn":
      return "anda uma casa para frente, se for o primeiro movimentos pode andar 2";
    case "bishop":
      return "anda nas diagonais"
    case "horse":
      return "anda em L pode pular peças"
    case "tower":
      return "anda na vertical e na horizontal"
    case "queen":
      return "anda na vertical, diagonal e horizontal"
    case "king":
      return "anda na vertical, diagonal e horizontal, mas apenas 1 casa"
    default:
      return "e isso lá é peça de xadrez?"
  } 
}
// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos da A a F.
function gradeNumberToLetter (grade) {
  if (grade >= 90 && grade <= 100) {
    return "A";
  } else if (grade >= 80 && grade < 90) {
    return "B";
  } else if (grade >= 70 && grade < 80) {
    return "C";
  } else if (grade >= 60 && grade < 70) {
    return "D";
  } else if (grade >= 50 && grade < 60) {
    return "E";
  } else if (grade >= 0 && grade < 50) {
    return "F";
  } else {
    return "Coloque o número entre 0 e 100"
  }
}
// Escreva um programa que defina 3 números em constantes e retorne true se pelo menos uma das 3 for par.
function itsAtleastOneEven (a, b, c) {
  if ((a % 2) + (b % 2) + (c % 2) > 2) {
    return false;
  } else {
    return true;
  }
}
// Escreva um programa que defina 3 números em constantes e retorne true se pelo menos uma das 3 for impar.
function itsAtleastOneOdd (a, b, c) {
  if ((a % 2) + (b % 2) + (c % 2) > 0) {
    return true;
  } else {
    return false;
  }
}
// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quando de lucro a empresa terá ao vender 1000 desses produtos.
function profit (cost, valueOfSale, totalOfSale) {
  if (cost < 0 || valueOfSale < 0 || totalOfSale < 0) {
    return "Coloque apenas valores positivos"
  } 
  let totalCost = cost * 1.2;
  let profitPerSale = valueOfSale - totalCost;
  let totalProfit = profitPerSale * totalOfSale;
  return totalProfit;  
}
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
function baseSalary(salary) {
  if (salary <= 1556.94) {
    return salary * 0.92;
  } else if (salary >= 1556.95 && salary <= 2594.92) {
    return salary * 0.91;
  } else if (salary >= 2594.93 && salary <= 5189.82) {
    return salary * 0.89;
  } else {
    return salary - 570.88;
  } 
}
function liquidSalary(baseSalary) {
  if (baseSalary <= 1903.98) {
    return baseSalary
  } else if (baseSalary >= 1903.99 && baseSalary <= 2826.65) {
    let irAliquot = (baseSalary * 0.075) - 142.80;
    return baseSalary - irAliquot; 
  } else if (baseSalary >= 2826.66 && baseSalary <= 3751.05) {
    irAliquot = (baseSalary * 0.15) - 354.80;
    return baseSalary - irAliquot;
  } else if (baseSalary >= 3751.06 && baseSalary <= 4664.68) {
    irAliquot = (baseSalary * 0.225) - 636.13
    return baseSalary - irAliquot;
  } else {
    irAliquot = (baseSalary * 0.275) - 869.36
    return baseSalary - irAliquot;
  }
}
