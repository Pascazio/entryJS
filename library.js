// Export funcion sum into external souce
function sum(first, second) {
    return first + second;
};

//Function that allows you to see the result without writing console.log
function showResult() {
    const x = sum(a, b);
    console.log(x);
}



//Export module sum
module.exports = {
    sum, 
    showResult,
};


