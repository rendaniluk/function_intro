const assert = require('assert')
var sameWeekday = function(date1,date2){
  var days = new Date(date1,date2);
  var day1 = days.getDay(date1);
  var day2 = days.getDay(date2);
  return day1==day2;
};
var mon=sameWeekday('6 November 2016','14 November 2016')
console.log(mon);
assert.equal(sameWeekday('6 November 2016','14 November 2016'),false);
