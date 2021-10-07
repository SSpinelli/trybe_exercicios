const assert = require('assert'); // Sintaxe para incluir o módulo assert

console.log(assert.strictEqual(50, 50)); // Sem erros: 50 === 50
console.log(assert.strictEqual(50, 60)); // AssertionError: 50 !== 70