let obj = {
    key: [10, 20, 30, 10]
}

function getElementsThatEqual10AtProperty(obj, key) {
    let myArr = [];
    for (key in obj) {
        if (obj[key] < 1 || !(Array.isArray(obj[key]))) return myArr;
        else
            for (x of obj[key]) {
                if (obj[key].every(x => x !== 10)) return myArr;
                else if (x === 10) myArr.push(x);
            }
    }
    return myArr;
}

let output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output);