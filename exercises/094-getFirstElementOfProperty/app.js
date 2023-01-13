let obj = {
    key: [1, 2, 4]
};

function getFirstElementOfProperty(obj, key) {
    if (obj[key] < 1 || !(Array.isArray(obj[key]))) return undefined;
    for (let i = 0; i < obj[key].length; i++) {
        if (i === 0) return obj[key][i];
    }
}

let output = getFirstElementOfProperty(obj, 'key');
console.log(output);