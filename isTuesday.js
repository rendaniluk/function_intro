const assert = require('assert'); //importing assert function to js
//function
var isTuesday = function(day){
Today = day.startsWith('Tu');
return Today;
};
//storing function result in variable
var theDay=isTuesday('Tuesday');
var thDay=isTuesday('Monday');
//printing result of the function
console.log(theDay);
console.log(thDay);
//verifying the expected result using assert function
assert.equal(isTuesday('Tuesday'),true);
assert.equal(isTuesday('Monday'),false);
