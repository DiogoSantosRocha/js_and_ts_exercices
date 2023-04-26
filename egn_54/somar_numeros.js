let readlineSync = require('readline-sync');
let num1 = Number(readlineSync.question('Digite o primeiro número: '));
let num2 = Number(readlineSync.question('Digite o segundo número: '));
console.log(`A soma entre ${num1} e ${num2} é ${num1 + num2}`);
