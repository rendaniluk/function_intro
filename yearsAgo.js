var yearsAgo = function(year){
  var theYear = new Date(year);
  var yearthen = theYear.getFullYear();
  return yearthen;
  };

yearback=yearsAgo(2016);
console.log(yearback);
