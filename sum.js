//Importing required data from an external source
const { a, b} = require('./resources');


//Importing function from an external source
const { sum } = require('./library');

//Function that allows you to see the result without writing console.log
function showResult(){
    const x = sum(a,b);
    console.log(x);
}

//Run
showResult();
