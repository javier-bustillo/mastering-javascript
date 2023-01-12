let obj = {
    key: [10, 2, 3]
}

function getElementsGreaterThan10AtProperty(obj, key) {
    let myArr = [];
    if (obj[key] < 1 || !(Array.isArray(obj[key]))) return myArr;
    else
        for (x of obj[key]) {
            if (obj[key].every(x => x < 10)) return myArr;
            else if (x > 10) myArr.push(x);
        }
    return myArr;
}

let output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output);