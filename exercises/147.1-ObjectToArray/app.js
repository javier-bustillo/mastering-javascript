function getAllKeys(obj) {
    let myArray = [];

    for (let key in obj) {
        myArray.push(key);
    }
    return myArray;
}
let output = getAllKeys({
    name: 'Sam',
    age: 25,
    hasPets: true
});
console.log(output);