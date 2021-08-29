// Para declarar uma variável podemos utilizar const, let e var (sendo esse último o menos utilizado dos 3), const não permite alteração no seu valor, já let e var permite que o valor seja alterado.

// Crie uma constante chamada MyName e atribua a ela o seu nome;
const myName = "João Gabriel";
// Crie uma constante chamada BirthCity e atribua a ela a sua cidade natal;
const birthCity = "Recife";
// Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu;
let birthYear = 1992;
// Utilize o console.log() para imprimir as constantes e variáveis que você criou;
console.log(myName, birthCity, birthYear);
// Altere o valor de birthYear para 2030. Faça um console.log() novamente para ver o que acontece;
birthYear = 2030;
console.log(birthYear);
// Altere o valor atribuído à constante birthCity. Faça um console.log() novamente! Você saberia explicar por que recebemos uma mensagem de erro?
birthCity = "São Paulo";
console.log(birthCity); 
// O erro ocorre pois a váriavel birthCity é uma constante e não pode receber novos valores.
