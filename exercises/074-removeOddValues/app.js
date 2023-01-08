let obj = {
    a: 2,
    b: 3,
    c: 4
};
const removeOddValues = obj => {
    for (let key in obj) {
        if (obj[key] % 2 !== 0) {
            delete obj[key];
        }
    }
    return obj;

}

removeOddValues(obj);
console.log(obj)