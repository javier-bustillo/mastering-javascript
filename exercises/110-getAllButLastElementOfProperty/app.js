let obj = {
    key: [1, 2, 3]
};

function getAllButLastElementOfProperty(obj, key) {
    let myArr = [];

    if (obj[key] < 1 || !(Array.isArray(obj[key]))) return myArr;



    return myArr;
}

let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]