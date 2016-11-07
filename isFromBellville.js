const assert = require('assert') //importing assert function to JS
//Declaring function
//this function check if the car is from Bellville and return boolen
var isFromBellville = function(lic){
  Bellville = lic.startsWith('CY')
  return Bellville;
};

console.log(isFromBellville('CY 833-221'));
assert.equal(isFromBellville('CY 833-221'),true);
