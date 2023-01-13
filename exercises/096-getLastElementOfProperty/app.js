let obj = {
    key: [7, 2, 5, 10, 22]
};


function getLastElementOfProperty(obj, key) {
    if (obj[key] < 1 || !(Array.isArray(obj[key]))) return undefined;
    else return obj[key][obj[key].length - 1];
}

let output = getLastElementOfProperty(obj, 'key');
console.log(output);