'use strict'

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

function BinarioADecimal(num) {
  // tu codigo aca
  var sum = parseInt(num, 2);
  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  var cont = num.toString(2)
  return cont;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}