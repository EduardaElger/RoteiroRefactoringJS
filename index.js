const { readFileSync } = require('fs');

function gerarFaturaStr(fatura, pecas) {

    // função extraída
    function calcularTotalApresentacao(apre, peca) {
      let total = 0;
      switch (peca.tipo) { 
        ...
      ...
      return total;
    }
    ...
    let total = calcularTotalApresentacao(apre, peca);
    ....
}          

const faturas = JSON.parse(readFileSync('./faturas.json'));
const pecas = JSON.parse(readFileSync('./pecas.json'));
const faturaStr = gerarFaturaStr(faturas, pecas);
console.log(faturaStr);
