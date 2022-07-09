const reverseString = function(str) {

    if (!str) return '';

    // string looping method
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr;

    // Array method
    return str
        .split("") // turn string into an array of characters including space
        .reverse() // reverse array 
        .join(""); // joins array to make string, including spaces
};

// Do not edit below this line
module.exports = reverseString;
