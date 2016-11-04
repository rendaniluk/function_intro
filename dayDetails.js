const assert = require('assert');
//function
var dayDetails = function(day){
var isWeekend = day.startsWith('S');
var isDay = day.endsWith('day');
var length = day.length;
console.log('Is a weekend : ' + isWeekend);
console.log('Is a weekday : ' + isDay);
return isDay;
}
// now call it:
//store the function result in a variable
var details = dayDetails('Wednesday');
console.log(details);
// use the function result immediatly
console.log(dayDetails('October'));
assert.equal(dayDetails('Wednesday'),true);
assert.equal(dayDetails('October'),false);
