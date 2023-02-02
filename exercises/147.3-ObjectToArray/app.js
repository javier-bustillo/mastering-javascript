function convertObjectToList(obj) {
    let entries = Object.entries(obj);
    return entries;
}

let output = convertObjectToList({
    name: "Holly",
    age: 35,
    role: "producer"
});
console.log(output); // [['name', 'Holly'], ['age', 35], ['role', 'producer']]