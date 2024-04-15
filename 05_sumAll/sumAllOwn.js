const sumAll = function(numOne, numTwo) {
    let sumNums = 0;
    let numSmaller;
    let numBigger;
    // if (Number.isInteger(numOne) && Number.isInteger(numTwo) &&
    //     (numOne > 0 && numTwo > 0)) {
    if (Number.isInteger(numOne) && Number.isInteger(numTwo) && 
        numOne > 0 && numTwo > 0) {
        let numSmaller = numOne < numTwo ? numOne : numTwo;
        let numBigger = numOne < numTwo ? numTwo : numOne;
        for (let i = numSmaller; i <= numBigger; i++) {
            sumNums = sumNums + i;
        }
    } else {
        return "ERROR";
    }
    return sumNums;
};

// Do not edit below this line
module.exports = sumAll;
