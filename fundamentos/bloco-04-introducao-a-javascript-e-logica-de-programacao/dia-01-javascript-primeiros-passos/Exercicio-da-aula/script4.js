const currentHour = 23;
let message;

if (currentHour >= 22) {
    message = "Não deveriamos comer nada, é hora de dormir";
    console.log(message);
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
    console.log(message);
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
    console.log(message);
} else if (currentHour > 11 && currentHour < 14) {
    message = "Hora do almoço!!!!";
    console.log(message);
} else if (currentHour > 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado";
    console.log(message)
} else {
    message = "deveria estar dormindo";
    console.log(message)
}

let weekDay = "quarta-feira";

if (weekDay === "segunda-feira" || "terça-feira" || "quarta-feira" || "quita-feira" || "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe");
} else if (weekDay === "sábado" || "domingo") {
    console.log("FINALMENTE, descanço merecido UwU");
} else {
    console.log("Insira um valor válido");
}