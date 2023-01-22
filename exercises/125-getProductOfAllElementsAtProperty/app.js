let obj = {
    key: [1, 2, 3, 4]
};

let aux = 1;

function getProductOfAllElementsAtProperty(obj, key) {
    if (obj[key] < 1 || !(Array.isArray(obj[key]))) return 0;

    for (x of obj[key]) {
        aux *= x;
    }
    return aux;
}
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24