let obj = {
    key: ['It', 'hasi', 'some', 'wordsi']
}

function getOddLengthWordsAtProperty(obj, key) {
    let myArr = [];
    if (obj[key] < 1 || !(Array.isArray(obj[key]))) return myArr;
    else
        for (x of obj[key]) {
            if (obj[key].every(x => x % 2 === 0)) return myArr;
            else if (x.length % 2 !== 0) myArr.push(x);
        }
    return myArr;
}
let output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output);