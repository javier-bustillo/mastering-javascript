let obj = {
    key: [1, 2, 3]
}

function getAverageOfElementsAtProperty(obj, key) {
    let aux = 0;
    if (obj[key] < 1 || !(Array.isArray(obj[key]))) return 0;
    else
        for (x of obj[key]) {
            aux += x;
        }
    let averageOfNumbers = aux / obj[key].length;
    return averageOfNumbers;
}
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);