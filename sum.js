//Global declaration of constants
const a = 3;
const b = 5;

//Function declaration
function sum(first, second){
    return first + second;
};

function showResult(){
    const x = sum(a,b);
    console.log(x);
}

//Run
showResult();
