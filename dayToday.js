const assert = require('assert')
var tod = Date();
var dayToday = function(){
  var today = new Date();
  return today;
};

var aday = dayToday();
console.log(aday);
assert.equal(dayToday(),tod)
