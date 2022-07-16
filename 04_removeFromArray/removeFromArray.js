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


    // Method 3
    // const removeFromArray = function(...args) {
        // the very first item in our list of arguments is the array, we pull it out with args[0]
        
        // const array = args[0];
        // const newArray = [];
        // array.forEach((item) => {
        //     if (!args.includes(item)) {
        //         newArray.push(item);
        //     }
        // });
        // return newArray;
    // }
};

// Do not edit below this line
module.exports = removeFromArray;
