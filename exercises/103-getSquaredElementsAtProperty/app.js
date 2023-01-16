let obj = {
    key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    let myArr = [];

    if (obj[key] < 1 || !(Array.isArray(obj[key]))) return myArr;
    else obj[key].forEach(element => {
        myArr.push(Math.pow(element, 2))
    });

    return myArr;

}


let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]