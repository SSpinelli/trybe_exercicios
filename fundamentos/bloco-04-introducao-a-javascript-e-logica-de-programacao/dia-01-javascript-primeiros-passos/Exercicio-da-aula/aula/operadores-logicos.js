// Dentro do JavaScript nós possuímos os operadores lógicos, que servem para criação de lógicas pois eles definem se algo é 1(true) ou 0(false).

// O operador AND && só da verdadeiro se as duas condicionais derem true.
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// Crie uma constante chamada currentHour que recebe um número entre 4 e 24 de sua escolha.
const currentHour = 23;
// Crie uma variável chamada message que, inicialmente, é uma string vazia.
let message;
// Implemente condicionais para que:
// 1 - Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir"
// 2 - Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D"
// 3 - Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?"
// 4 - se o horário estiver entre 11 e 14, insira "Hora do almoço!!!"
// 5 - se o horario estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado"
if (currentHour >= 22) {
    message = "Não deveriamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour > 11 && currentHour < 14) {
    message = "Hora do almoço!!!!";
} else if (currentHour > 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado";
} else {
    message = "deveria estar dormindo";
}
// Agora imprima a variável message fora das suas condições;
console.log(message)

// Já o operador OR || só da falso se as duas condicionais forem false.
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// Crie uma variável chamada weekDay que recebe a string "quarta-feira"
let weekDay = "sábado";
// Implemente condicionais para que:
// 1 - Se nossa variável weekDay for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D"
// 2 - Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU"
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quita-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe");
} else if (weekDay === "sábado" || weekDay === "domingo") {
    console.log("FINALMENTE, descanço merecido UwU");
} else {
    console.log("Insira um valor válido");
}

// O operador NOT pode inverter o valor booleano de um elemento.
console.log(!42); 
console.log(!0); 
const squirtle = "melhor pokemon inicial";
console.log(!squirtle); 
console.log(!null);
console.log(!undefined);