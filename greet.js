const assert = require('assert');// importing assert
//declaring the function.
var greet = function (name) {
    return 'hi how are you ' +name;
};

console.log(greet('rendani')/*calling function*/); //printing the massage and name
console.log(greet('thabiso')/*calling function*/); //printing the massage and name
console.log(greet('jabu')/*calling function*/); //printing the massage and name
console.log(greet('dyllon')/*calling function*/); //printing the massage and name
console.log(greet('azola')/*calling function*/); //printing the massage and name
console.log(greet('climent')/*calling function*/); //printing the massage and name
assert.equal(greet('thabiso'), 'hi how are you thabiso');//testing code using assert function
assert.equal(greet('jabu'), 'hi how are you jabu');//testing code using assert function
assert.equal(greet('dyllon'), 'hi how are you dyllon');//testing code using assert function
assert.equal(greet('azola'), 'hi how are you azola');//testing code using assert function
assert.equal(greet('climent'), 'hi how are you climent');//testing code using assert function
assert.equal(greet('rendani'), 'hi how are you rendani');//testing code using assert function
