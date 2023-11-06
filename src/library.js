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
    console.log('Il risutato della somma è:', x);
    const y = sott(first, second);
    console.log('Il risutato della sottrazione è:', y);
    const z = molt(first, second);
    console.log('Il risutato della moltiplicazione è:', z);
    const k = div(first, second);
    console.log('Il risutato della divisione è:', k);
}
//Create a single function
function showResultSum(first, second) {
    const a = sum(first, second);
    console.log('Il risutato della somma è:', a);
}
function showResultSott(first, second) {
    const b = sott(first, second);
    console.log('Il risutato della sottrazione è:', b);
}

function showResultMolt(first, second) {
    const c = molt(first, second);
    console.log('Il risutato della moltiplicazione è:', c);
}

function showResultDiv(first, second) {
    const d = div(first, second);
    console.log('Il risutato della divisione è:', d);
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

