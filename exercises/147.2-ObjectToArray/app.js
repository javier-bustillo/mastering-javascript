function listAllValues(obj) {
    /* let myArr = [];

    for (let prop in obj) {
        myArr.push(obj[prop]);
    }
    return myArr; */

    let propertyValues = Object.values(obj);
    return propertyValues;
}

let output = listAllValues({
    name: 'Krysten',
    age: 33,
    hasPets: false
});
console.log(output);