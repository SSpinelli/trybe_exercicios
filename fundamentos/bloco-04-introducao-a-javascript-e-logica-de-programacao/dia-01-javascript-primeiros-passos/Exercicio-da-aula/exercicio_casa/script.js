const a = 5;
const b = 4;
const c = 8;
const d = -3;
const e = 0;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

if (a > b) {
    console.log(a)
} else {
    console.log(b)
}

if (a > b && a > c) {
    console.log(a)
} else if (b > a && b > c) {
    console.log(b)
} else {
    console.log(c)
}

if (d > 0) {
    console.log("Positive")
} else if (d < 0) {
    console.log("negative")
} else {
    console.log(0)
}

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

const piece = "rei";

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

const grade = 87;

if (grade >= 90 && grade <= 100) {
    console.log("A")
} else if (grade >= 80 && grade < 90) {
    console.log("B")
} else if (grade >= 70 && grade < 80) {
    console.log("C")
} else if (grade >= 60 && grade < 70) {
    console.log("D")
} else if (grade >=50 && grade < 60) {
    console.log("E")
} else if (grade < 50 && grade >= 0) {
    console.log("F")
} else {
    console.log("Insira um numero entre 0 e 100 ")
}

const f = 8;
const g = 3;
const h = 10;

let verificaSePar = (f%2) + (g%2) + (h%2);

if (verificaSePar === 0) {
    console.log("true")
} else {
    console.log("false")
}

if (verificaSePar === 0) {
    console.log("false")
} else {
    console.log("true")
}

const custoDoProduto = 10;
const valorDeVenda = 12;
let totalVendido = 1000;

const custoMaisImposto = custoDoProduto * 1.2;
const lucro = valorDeVenda - custoMaisImposto;

if (custoDoProduto >= 0 && valorDeVenda >= 0) {
    console.log(lucro * totalVendido)
} else {
    console.log("Error, os valores não podem ser negativos")
};

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
