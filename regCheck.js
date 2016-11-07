const assert = require('assert');
//declaring function
//This function check if if a registration number is for GP, L, EC, MP
var regCheck = function (regNum,loc){
   var check_reg = regNum.endsWith(loc)
   return check_reg;
};

//storing variable using var,calling function regCheck and print results
var isGP = regCheck('DV 23 NB GP', 'GP');
console.log(isGP);
var isMP = regCheck('DV 23 LP GP', 'MP');
console.log(isMP);
//testing wheather function return expected result
assert.equal(regCheck('BWA 554 L','L'),true);
assert.equal(regCheck('RENDANI EC','L'),false);
