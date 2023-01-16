let obj = {
    key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    let myArr = [];

    if (obj[key] < 1 || !(Array.isArray(obj[key]))) return myArr;
    else
        for (x of obj[key]) {
            if (obj[key].every(x => x % 2 === 0)) return myArr;
            else if (x % 2 !== 0) myArr.push(x);
        }
    return myArr;
}

let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]