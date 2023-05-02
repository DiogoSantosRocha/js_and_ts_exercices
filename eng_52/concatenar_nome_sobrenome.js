let readlineSync = require('readline-sync');
let name = readlineSync.question('Qual seu nome? ')
let sobreName = readlineSync.question('Qual seu sobrenome? ');
console.log(`Olá ${name} ${sobreName}`);
