const reverseString = function(string) {
    let rev = "";
    for (let i = string.length-1; i >= 0; i--){
        let letter = string.charAt(i);
        rev = rev.concat(letter);
    }
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
