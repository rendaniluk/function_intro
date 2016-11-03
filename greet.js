const assert = require('assert');// importing assert
//declaring the function.
var greet = function (name) {
    return 'hi how are you ' +name;
};

console.log(greet('rendani')/*calling function*/); //printing the massage and name
assert.equal(greet('rendani'), 'hi how are you rendani');//testing code using assert function
