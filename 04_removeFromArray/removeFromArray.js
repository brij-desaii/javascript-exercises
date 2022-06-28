const removeFromArray = function() {
    let args = Array.from(arguments);
    let arr = args[0];
    for (let i = 1; i < args.length; i++){
        for(let j = 0; j < arr.length; j++){
            if (args[i] === arr[j]){
                arr.splice(j, 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
