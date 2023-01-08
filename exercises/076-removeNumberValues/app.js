let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
const removeNumberValues = obj => {
    for (let key in obj) {
        if (Number(obj[key])) {
            delete obj[key];
        }
    }
    return obj;
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }