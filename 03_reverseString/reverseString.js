const reverseString = function(string) {
//    let string = prompt("Gimme a string:")
    let chars = "";
    let reversed = "";
    for (i = 0; i <= string.length; i++) {
        chars += string.charAt(i);
//        console.log(chars);
    }
    for (j = chars.length; j >= 0; j--) {
        reversed += chars.charAt(j);
//        console.log(reversed);
    }
    return reversed;
//    console.log(reversed);
};

// reverseString();

// Do not edit below this line
module.exports = reverseString;
