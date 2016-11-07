const assert = require('assert');//importing assertto js
//declaring function
var countRegNumber = function(regNum){
   str = regNum.split(",");
   str = str.length;
  return str;

};
//calling function with the countRegNumber string
var regcount= countRegNumber('CA 182736,CY 523519,CJ 812328,AA 11 BR GP')
console.log(regcount); //printing the length of string
assert.equal(regcount, 4) //testing code using assert function
