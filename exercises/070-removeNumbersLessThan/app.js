let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
const removeNumbersLessThan = (num, obj) => {
    for (let key in obj) {
        if (obj[key] < num) {
            delete obj[key];
        }
    }
    return obj;
}

removeNumbersLessThan(5, obj);
console.log(obj);