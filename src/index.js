//Importing required data from an external source
const { a, b,  } = require('./resources');


//Importing function from an external source
const { showResult, showResultSum, showResultSott, showResultMolt, showResultDiv } = require('./library');



//Run
showResult(a, b);
showResultSum(a, b);
showResultSott(a, b);
showResultMolt(a, b);
showResultDiv(a, b);
