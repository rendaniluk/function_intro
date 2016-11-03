//print out variable details function to prevent reapeating yourself
var printDetails = function(value){
    console.log(value);
    console.log(typeof value);
    // NOTE this function is NOT returning anything
}

printDetails('this is a string');
printDetails(100);
printDetails(false);
