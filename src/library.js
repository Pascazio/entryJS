// Export funcion sum into external souce
function sum(first, second) {
    return first + second;
};

function sott(first, second) {
    return first - second;
};

function molt(first, second) {
    return first * second;
};

function div(first, second) {
    return first / second;
};

//Function that allows you to see the result without writing console.log
function showResult(first, second) {
    const x = sum(first, second);
    console.log("Il risutato della somma e':",  x);
    const y = sott(first, second);
    console.log("Il risutato della sottrazione e':", y);
    const z = molt(first, second);
    console.log("Il risutato della moltiplicazione e':", z);
    const k = div(first, second);
    console.log("Il risutato della divisione e':", k);
}


//Export module sum
module.exports = {
    sum,
    sott,
    molt,
    div,
    showResult,
    

};

