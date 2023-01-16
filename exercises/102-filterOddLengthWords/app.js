function filterOddLengthWords(words) {
    let myArr = [];

    if (words.length < 1 || !(Array.isArray(words))) return myArr;
    else if (words.every(word => word.length % 2 === 0)) return myArr;
    else myArr = words.filter(word => word.length % 2 !== 0);

    return myArr;
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']