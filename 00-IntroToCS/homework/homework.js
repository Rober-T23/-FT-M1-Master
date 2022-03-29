'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  var sum = 0
  var numReverse =[];
  numReverse=num.split('').reverse().join('');

  for(var i = 0;i<numReverse.length;i++){
   sum +=  numReverse[i]*2 **i;
    
  }
  return sum;

}

function DecimalABinario(num) {
  // tu codigo aca
 

  // convert to binary
  let num1 = num.toString(2);
  return num1;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}