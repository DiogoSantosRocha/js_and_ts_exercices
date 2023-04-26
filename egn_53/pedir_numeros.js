let readlineSync = require('readline-sync');
let num = readlineSync.question('Digite um número: ');
console.log(`O dobro de ${num} é ${num*2} e sua metade é ${num/2}`);
