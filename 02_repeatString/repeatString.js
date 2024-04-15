const repeatString = function(textRepeat, timesRepeat) {
    let string = "";
    if (timesRepeat < 0) return "ERROR";
//    if (timesRepeat == undefined && textRepeat == undefined) return "";
    for (let i = 0; i < timesRepeat; i++) {
        string += textRepeat;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
