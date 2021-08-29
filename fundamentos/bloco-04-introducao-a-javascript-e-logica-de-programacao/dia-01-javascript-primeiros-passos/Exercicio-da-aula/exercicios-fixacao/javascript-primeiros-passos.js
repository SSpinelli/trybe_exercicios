// Faça 5 programas, um para cada operação aritmética. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para todos os 5 operadores aritmeticos.
const a = 5;
const b = 4;
const e = 0;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
// Faça um programa que retorne o maior de dois números.
if (a > b) {
    console.log(a)
} else {
    console.log(b)
}
// Faça um programa que retorne o maior de 3 números.
const c = 8;

if (a > b && a > c) {
    console.log(a)
} else if (b > a && b > c) {
    console.log(b)
} else {
    console.log(c)
}
//Faça um programa que, dado um valor definido numa constante, retorne "positive", "negative" ou "zero"
const d = -3;

if (d > 0) {
    console.log("Positive")
} else if (d < 0) {
    console.log("negative")
} else {
    console.log(0)
}
// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
let anguloA = 90;
let anguloB = 45;
let anguloC = 44;

let somaDosAngulos = anguloA + anguloB + anguloC;

let anguloPositivo = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (anguloPositivo) {
    if (somaDosAngulos === 180) {
        console.log("É um triângulo")
    } else {
        console.log("Não é um triângulo")
    }
} else {
    console.log("insira apenas valores positivos")
}
// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
const piece = "Rei";

switch (piece.toLowerCase()) {
    case "rei":
        console.log("Todos os lados e direções, apenas uma casa")
        break;
    case "rainha":
        console.log("Todos os lados e direções")
        break;
    case "bispo":
        console.log("Diagonais")
        break;
    case "torre":
        console.log("Horizontal e Vertical")
        break;
    case "cavalo":
        console.log("se move em L, pode pular sobre as peças")
        break;
    case "peão":
        console.log("para frente, apenas uma casa")
        break;
    default:
        console.log("Essa peça ai é de outro jogo!! haha")
        break;
};
// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
const grade = 87;

if (grade >= 90 && grade <= 100) {
    console.log("A");
} else if (grade >= 80 && grade < 90) {
    console.log("B");
} else if (grade >= 70 && grade < 80) {
    console.log("C");
} else if (grade >= 60 && grade < 70) {
    console.log("D");
} else if (grade >=50 && grade < 60) {
    console.log("E");
} else if (grade < 50 && grade >= 0) {
    console.log("F");
} else {
    console.log("Insira um numero entre 0 e 100 ")
}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
const f = 2;
const g = 3;
const h = 8;

let verifyIfEven = (f%2) + (g%2) + (h%2);

if (verifyIfEven <= 2 ) {
    console.log(true)
} else {
    console.log(false)
}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
if (verifyIfEven > 0) {
    console.log(true)
} else {
    console.log(false)
}

// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)
const costOfProduct = 10;
const saleValue = 12;
let totalSold = 1000;

const costPlusTax = costOfProduct * 1.2;
const profit = saleValue - costPlusTax;

if (costOfProduct >= 0 && saleValue >= 0) {
    console.log(profit * totalSold)
} else {
    console.log("Error, os valores não podem ser negativos")
};

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
let aliquotINSS;
let aliquotIR;

let grossSalary = 985;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
}

let liquidSalary = baseSalary - aliquotIR;

console.log(liquidSalary);
