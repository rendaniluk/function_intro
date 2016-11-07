const assert = require('assert') //importing assert function to JS
//Declaring function
//this function check if the car is from Gauteng and return boolen
var isFromGauteng = function(lic3){
  Gauteng = lic3.endsWith('GP')
  return Gauteng;
};
//calling and printing-out results of all functions above
console.log(isFromGauteng('DRT 122 GP'));
//testing functions using assert function
assert.equal(isFromGauteng('DRT 122 GP'),true);
