let arr = ['a', 'c', 'e'];
let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

function select(arr, obj) {
    let myObj = {};
    for (let key in obj) {
        for (x of arr) {
            if (x === key) {
                myObj[key] = obj[key];
            }
        }
    }
    return myObj;
}

let output = select(arr, obj);
console.log(output);