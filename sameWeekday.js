const assert = require('assert')
var sameWeekday = function(date1,date2){
  var pastDate = date1.getDay(),
      currentDate = date2.getDay();
  return pastDate == currentDate;
};

assert.equal(sameWeekday(new Date('1989-03-10'),new Date('2016-11-10')),false);
assert.equal(sameWeekday(new Date('1989-03-09'),new Date('2016-11-10')),true);
