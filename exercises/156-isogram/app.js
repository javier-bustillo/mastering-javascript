function isIsogram(text) {
    // add each char to a set
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    // note: a set drops dup values
    // thus, to see if all the chars were unique,
    // check length of text and the size of the set 
    let charSet = new Set();
    for (char of text) {
        charSet.add(char.toLowerCase());
    }
    return charSet.size === text.length ? true : false;
}

console.log(isIsogram("Camile")) // => true
console.log(isIsogram("Camille")) // => false