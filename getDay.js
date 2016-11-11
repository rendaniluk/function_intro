const assert = require('assert')
var TheDay=function(date){
var specificDay = date.getDay();
return specificDay;
};

var theday=TheDay(new Date('1989-03-09'));
console.log(theday);
assert.equal(TheDay(new Date('1989-03-09')),4)
assert.equal(TheDay(new Date('2016-11-11')),5)
