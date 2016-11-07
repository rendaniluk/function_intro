const assert = require('assert') //importing assert function to JS
//Declaring function
//this function check if the car is from Paarl and return boolen
var isFromPaarl = function(lic2){
  Paarl = lic2.startsWith('CJ')
  return Paarl;
};
//calling and printing-out results of all functions above
console.log(isFromPaarl('DR 12 TY GP'));
//testing functions using assert function
assert.equal(isFromPaarl('DR 12 TY GP'),false);
