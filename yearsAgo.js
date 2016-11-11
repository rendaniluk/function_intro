const assert = require('assert');

var yearsAgo = function(year){
  var presentyear = 2016,
      yearback = year.getFullYear();
  return presentyear - yearback;
  };

console.log(yearsAgo(new Date('2001')));

assert.equal(yearsAgo(new Date('1989')),27);
assert.equal(yearsAgo(new Date('2014')),2);
