// Crie uma constante que receba a nota de uma pessoa em um desafio técnico, e atribua a ela um valor entre 1 e 100;
const grade = 89;
// Implemente uma lógica que verifique se a pessoa foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações;
// 1 - Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
// 2 - Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
// 3 - Se a nota for menor que 60, imprima "você foi reprovada(o)"
// Crie uma estrutura condicional utilizando if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
// Altere o valor da nota para verificar se as condições que você implementou funcionam;
if (grade >= 80 && grade <= 100) {
    console.log("Parabéns, você foi aprovada(o)!")
} else if (grade < 80 && grade >= 60) {
    console.log("Você está na nossa lista de espera")
}else if (grade < 60 && grade >= 0){
    console.log("Você foi reprovada(o)")
} else {
    console.log("Insira um número positivo entre 0 e 100")
}