let obj = {
    key: [1, 2, 3]
};

const getAverageOfElementsAtProperty = (obj, key) => {
    let sum = 0;
    let average = 0;

    if (obj[key] < 1 || !(Array.isArray(obj[key]))) return 0;
    else
        for (let i in obj[key]) {
            sum += obj[key][i];
        }
    average = sum / obj[key].length;
    return average;
}

let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);