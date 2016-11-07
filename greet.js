const assert = require('assert');// importing assert
//declaring the function.
var greet = function (name) {
    return 'hi how are you ' +name;
};


console.log(greet('azola')/*calling function*/); //printing the massage and name
console.log(greet('Precious')/*calling function*/); //printing the massage and name
assert.equal(greet('thabiso'), 'hi how are you thabiso');//testing code using assert function
assert.equal(greet('jabu'), 'hi how are you jabu');//testing code using assert function
