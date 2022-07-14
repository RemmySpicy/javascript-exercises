const removeFromArray = function(arr, ...args) {
    
    // Method 1
    // This array contains strings that needs to be removed from main array
    let removeItem = [...args];
    return arr.filter( val => removeItem.indexOf(val) < 0)
    
    // Mathod 2
    // let localArr = [...arr];
    // for (let i = arr.length; i >= 0; i--) {
    //     for (let j = 0; j < args.length; j++) {
    //         if (arr[i] === args[j]) {
    //             localArr.splice(i, 1)
    //         }
    //     }
    // }
    // return localArr;
};

// Do not edit below this line
module.exports = removeFromArray;
