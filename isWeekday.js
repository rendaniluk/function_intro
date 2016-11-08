const assert = require('assert'); //importing assert function to JS.
//declaring function isWeekday
var isWeekday = function(days){
    var weekdays = !days.startsWith('S');
  return weekdays;
};
//calling and printing stored variables
var mon=isWeekday('Monday');
console.log(mon);
var Sun=isWeekday('Sunday');
console.log(Sun);
//testing the code is it return expected result
assert.equal(isWeekday('Monday'),true)
assert.equal(isWeekday('Sunday'),false)
