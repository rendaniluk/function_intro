const assert = require('assert') //importing assert function to JS
//Declaring function
//this function check if the car is from Limpopo and return boolen
var isFromLimpopo = function(lic4){
  Limpopo = lic4.endsWith('L')
  return Limpopo;
};
//calling and printing-out results of all functions above
console.log(isFromLimpopo('BWA 758 L'));
//testing functions using assert function
assert.equal(isFromLimpopo('BWA 758 L'),true);
