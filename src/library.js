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
    console.log('Il risutato della somma �:', x);
    const y = sott(first, second);
    console.log('Il risutato della sottrazione �:', y);
    const z = molt(first, second);
    console.log('Il risutato della moltiplicazione �:', z);
    const k = div(first, second);
    console.log('Il risutato della divisione �:', k);
}
//Create a single function
function showResultSum(first, second) {
    const a = sum(first, second);
    console.log('Il risutato della somma �:', a);
}
function showResultSott(first, second) {
    const b = sott(first, second);
    console.log('Il risutato della sottrazione �:', b);
}

function showResultMolt(first, second) {
    const c = molt(first, second);
    console.log('Il risutato della moltiplicazione �:', c);
}

function showResultDiv(first, second) {
    const d = div(first, second);
    console.log('Il risutato della divisione �:', d);
}


//Export module sum
module.exports = {
    sum,
    sott,
    molt,
    div,
    showResult,
    showResultSum,
    showResultSott,
    showResultMolt,
    showResultDiv,
};

