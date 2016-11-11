const assert = require('assert')
var sameWeekday = function(date1,date2){
  return date1.getDay() == date2.getDay();
};

assert.equal(sameWeekday(new Date('1989-03-10'),new Date('2016-11-10')),false);
assert.equal(sameWeekday(new Date('1989-03-09'),new Date('2016-11-10')),true);
