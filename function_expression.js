// this code won't run since function_expression load only when the interpreter
//reaches that line of code.
//call the function
myFunc();

//declare the function
var myFunc = function(){
    console.log('Function Expression');
}
