let obj = {
    key: [1, 2, 6]
};

function getNthElementOfProperty(obj, key, n) {
    if (obj[key] < 1 || !(Array.isArray(obj[key]))) return undefined;

    for (let i = 0; i < obj[key].length; i++) {
        if (obj[key].length < n) return undefined;
        else if (i === n) return obj[key][i];
    }

}

let output = getNthElementOfProperty(obj, 'key', 2);
console.log(output);