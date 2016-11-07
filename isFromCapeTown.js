const assert = require('assert') //importing assert function to JS
//Declaring functions
//this function check if the car is from CapeTown and return boolen
var isFromCapeTown = function(lic1){
  CapeTown = lic1.startsWith('CA')
  return CapeTown;
};

console.log(isFromCapeTown('CJ 58631'));
assert.equal(isFromCapeTown('CJ 58631'),false);
