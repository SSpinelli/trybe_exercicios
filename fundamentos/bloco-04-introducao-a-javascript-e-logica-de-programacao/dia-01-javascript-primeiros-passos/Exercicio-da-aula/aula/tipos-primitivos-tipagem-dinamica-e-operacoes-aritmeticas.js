// Dentro do JavaScript nós temos esses tipos primitivos, string, number, boolean, undefined e nulo. Além disso, vale ressaltar que o JS tem a tipagem dinâmica, significa que o JS identifica automaticamente o tipo do dado que estamos colocando.

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
// O operador typeof retorna qual o tipo do dado de um certo elemento.
console.log(typeof patientAge, typeof patientId, typeof patientInfo, typeof patientEmail);

// Crie uma constante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8;
const base = 5;
let height = 8;
// Crie uma constante chamada área e atribua a ela o resultado da multiplicação da base pela altura.
const area = (base * height);
console.log(area)
// Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.
const perimeter = ((base*2)+(height*2))
console.log(perimeter);