const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let first_name;

rl.question('Qual o seu nome? ', (name) => {
  first_name = name;
});

console.log(first_name);

