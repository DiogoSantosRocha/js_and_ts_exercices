let readlineSync = require('readline-sync'); 
let somaNotas = 0;
let quantidadeNotas = 0;
let imputUsuario = 0;
let res;
let media;
while(true){
  imputUsuario = readlineSync.question('Digite uma nota ou "fim" para encerrar: ');
  if(imputUsuario == 'fim'){
    if(quantidadeNotas > 1){
      media = somaNotas / quantidadeNotas;
      console.log(`A média é ${media}`);
      break;
    }else{
      console.log('Digite mais um número: ');
    }
    
  }else if(!isNaN(imputUsuario)){
     res = Number(imputUsuario);
     somaNotas = somaNotas + res;
     quantidadeNotas++;
  }else{
     console.log('ERROR');
  }
}

