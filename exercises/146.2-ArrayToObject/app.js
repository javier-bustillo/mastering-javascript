let obj = {};

function fromListToObject(array) {

    for (x of array) {
        obj[x[0]] = x[1];
    }

    return obj;
}

let output = fromListToObject([
    ['make', 'Ford'],
    ['model', 'Mustang'],
    ['year', 1964]
])
console.log(output) // => { make: 'Ford', model: 'Mustang', year: 1964 }