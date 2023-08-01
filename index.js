const { readFileSync } = require('fs');

function gerarFaturaStr(fatura, pecas) {

     // função query
    function getPeca(apresentacao) {
      return pecas[apresentacao.id];
    }
    ...
    
    for (let apre of fatura.apresentacoes) {
      const peca = getPeca(apre);
}          

const faturas = JSON.parse(readFileSync('./faturas.json'));
const pecas = JSON.parse(readFileSync('./pecas.json'));
const faturaStr = gerarFaturaStr(faturas, pecas);
console.log(faturaStr);
