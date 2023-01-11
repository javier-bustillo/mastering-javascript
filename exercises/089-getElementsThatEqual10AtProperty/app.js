let obj = {
    key: [10, 10, 10, 10]
}

function getElementsThatEqual10AtProperty(obj, key) {
    let myArr = [];
    for (key in obj) {
        if (obj[key] < 1 || !(Array.isArray(obj[key]))) return [];
        else
            for (x of obj[key]) {
                if (x !== 10) return [];
                else if (x === 10) {
                    myArr.push(x);
                }
            }
    }
    return myArr;
}

let output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output);