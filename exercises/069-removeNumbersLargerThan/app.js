let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
const removeNumbersLargerThan = (num, obj) => {
    for (key in obj) {
        if (obj[key] > num) {
            delete obj[key];
        }
    }
    return obj;
}

removeNumbersLargerThan(5, obj);
console.log(obj);