let obj = {
    key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    let myArr = [];

    if (obj[key] < 1 || !(Array.isArray(obj[key]))) return myArr;
    else
        for (x of obj[key]) {
            if (obj[key].every(x => x % 2 !== 0)) return myArr;
            myArr = obj[key].filter(x => x % 2 === 0);
        }
    return myArr;
}
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]