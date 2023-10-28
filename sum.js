//Importing required data from an external source
const { a, b} = require('./resources');

//Function declaration
function sum(first, second){
    return first + second;
};
//Function that allows you to see the result without writing console.log
function showResult(){
    const x = sum(a,b);
    console.log(x);
}

//Run
showResult();
