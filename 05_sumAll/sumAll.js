const sumAll = function(min, max) {
    let sumNums = 0;
    if (Number.isInteger(min) && Number.isInteger(max) && 
        min > 0 && max > 0) {
        const temp = min;
        if (min > max) { min = max; max = temp }
        for (let i = min; i <= max; i++) {
            sumNums = sumNums + i;
        }
    } else {
        return "ERROR";
    }
    return sumNums;
};

// Do not edit below this line
module.exports = sumAll;
