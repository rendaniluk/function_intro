const assert = require('assert'); //importing assert function to js
//function
var isTuesday = function(day){
Today = day.startsWith('Tu');
return Today;
};
//storing function result in variable
var theDay=isTuesday('Monday');
var thDay=isTuesday('Tuesday');
var thiDay=isTuesday('Wednesday');
var thaDay=isTuesday('Thursday');
var thoDay=isTuesday('Friday');
//printing result of the function
console.log(theDay);
console.log(thDay);
console.log(thiDay);
console.log(thaDay);
console.log(thoDay);
//verifying the expected result using assert function
assert.equal(isTuesday('Tuesday'),true);
assert.equal(isTuesday('Monday'),false);
