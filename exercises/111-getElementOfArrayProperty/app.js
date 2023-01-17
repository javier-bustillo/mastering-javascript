let obj = {
    key: ['Jamil', 'Albrey']
};

function getElementOfArrayProperty(obj, key, index) {
    if (obj[key] < 1 || !(Array.isArray(obj[key]))) return undefined;

    for (let i = 0; i < obj[key].length; i++) {
        if (i !== index) return undefined;
        else if (i === index) return obj[key][i];
    }
}
let output = getElementOfArrayProperty(obj, 'key', 2);
console.log(output);