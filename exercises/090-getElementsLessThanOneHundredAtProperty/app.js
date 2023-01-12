let obj = {
    key: [10, 20, 30, 101]
};

function getElementsLessThan100AtProperty(obj, key) {
    let myArr = [];

    for (key in obj) {
        if (!(Array.isArray(obj[key])) || obj[key] < 1) return myArr;
        else
            for (x of obj[key]) {
                if (obj[key].every(x => x > 100)) return myArr;
                else if (x < 100) myArr.push(x);
            }
    }
    return myArr;
}

let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output);