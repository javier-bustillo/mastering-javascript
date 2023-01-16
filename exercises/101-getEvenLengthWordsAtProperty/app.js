let obj = {
    key: ['a', 'longi', 'gamei']
};


function getEvenLengthWordsAtProperty(obj, key) {
    let myArr = [];

    if (obj[key] < 1 || !(Array.isArray(obj[key]))) return myArr;
    else
        for (x of obj[key]) {
            if (obj[key].every(x => x.length % 2 !== 0)) return myArr;
            else if (x.length % 2 === 0) myArr.push(x);
        }
    return myArr;
}

let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']