let obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas',
};

const removeStringValuesLongerThan = (num, obj) => {
    for (let key in obj) {
        if (obj[key].length > num) {
            delete obj[key];
        }
    }
    return obj;
}



removeStringValuesLongerThan(6, obj);
console.log(obj);