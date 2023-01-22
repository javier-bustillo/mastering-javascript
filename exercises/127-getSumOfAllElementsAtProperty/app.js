let obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    let initialValue = 0;

    if (obj[key] < 1 || !(Array.isArray(obj[key]))) return 0;

    const sumOfAllElementsAtProperty = obj[key].reduce((accumulator, currentValue) =>
        accumulator + currentValue, initialValue);

    return sumOfAllElementsAtProperty;
}
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13