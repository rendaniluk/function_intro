const assert = require('assert'); //importing assert function to JS
//Declaring functions
//this function check if the car is from Bellville and return boolen
var isFromBellville = function(lic){
  Bellville = lic.startsWith('CY')
  return Bellville;
};
//this function check if the car is from CapeTown and return boolen
var isFromCapeTown = function(lic1){
  CapeTown = lic1.startsWith('CA')
  return CapeTown;
};
//this function check if the car is from Paarl and return boolen
var isFromPaarl = function(lic2){
  Paarl = lic2.startsWith('CJ')
  return Paarl;
};
//this function check if the car is from Gauteng and return boolen
var isFromGauteng = function(lic3){
  Gauteng = lic3.endsWith('GP')
  return Gauteng;
};
//this function check if the car is from Limpopo and return boolen
var isFromLimpopo = function(lic4){
  Limpopo = lic4.endsWith('L')
  return Limpopo;
};

//calling and printing-out results of all functions above
console.log(isFromBellville('CY 833-221'), isFromLimpopo('DRT 122 GP'),
 isFromGauteng('DR 12 TY GP'), isFromPaarl('CJ 58631'),
 isFromCapeTown('CA 822-958') );
 //testing functions using assert function
assert.equal(isFromPaarl('DR 12 TY GP'),false);
assert.equal(isFromBellville('CY 833-221'),true);
assert.equal(isFromGauteng('DRT 122 GP'),true);
assert.equal(isFromLimpopo('BWA 758 L'),true);
assert.equal(isFromCapeTown('CJ 58631'),false);
