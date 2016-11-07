const assert = require('assert') //importing assert function to JS
//Declaring Function isFrom that takes two parameters and return boolean.
function isFrom(licNumber, loc) {
  var regNum_Location  =licNumber.startsWith(loc)
  //console.log(regNum_Location);
    return regNum_Location;
};
//storing variable as constant to call function is from and print its results
const FromPaarl = isFrom('CJ 98036','CJ')
console.log(FromPaarl);
const FromBellville = isFrom('CY 789-223','CY')
console.log(FromBellville);
const FromCapeTown = isFrom('CA 789-223','CA')
console.log(FromCapeTown);
const FromDurban = isFrom('ND 562-981','CA')
console.log(FromDurban);

//testing function isFrom using assert function
assert.equal(isFrom('CJ 98036','CJ'),true);
assert.equal(isFrom('CA 789-233','CA'),true);
assert.equal(isFrom('CY 98536','CJ'),false);
assert.equal(isFrom('ND 562-981','CA'),false);
