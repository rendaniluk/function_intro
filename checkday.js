const assert = require('assert');// importing assert

//declaring function checkday
var checkday = function(day){
  isWeekDay = day.endsWith('day');
  return isWeekDay;
};

//calling the function checkday
checkday('monday');
checkday('tuesday');
checkday('wednesday');
checkday('thursday');
checkday('friday');

//printing the output
console.log(checkday('monday'));
console.log(checkday('tuesday'));
console.log(checkday('wednesday'));
console.log(checkday('thursday'));
console.log(checkday('friday'));
//testing code using assert function
assert.equal(checkday('monday'),true);
assert.equal(checkday('tuesday'),true);
assert.equal(checkday('wednesday'),true);
assert.equal(checkday('thursday'),true);
assert.equal(checkday('friday'),true);
