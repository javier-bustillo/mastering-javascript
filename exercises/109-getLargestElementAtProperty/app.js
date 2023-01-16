let obj = {
    key: [1, 2, 4]
};

function getLargestElementAtProperty(obj, key) {
    let aux = 0;

    if (obj[key] < 1 || !(Array.isArray(obj[key]))) return [];
    else
        for (x of obj[key]) {
            if (x > aux) aux = x;
        }
    return aux;
}
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4