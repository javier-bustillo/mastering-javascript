let obj = {};

function fromListToObject(array) {
    /* for (x of array) {
            obj[x[0]] = x[1];
        }

        return obj; */

    const entries = new Map(array);
    const obj = Object.fromEntries(entries);

    return obj;

}

let output = fromListToObject([
    ['make', 'Ford'],
    ['model', 'Mustang'],
    ['year', 1964]
])
console.log(output) // => { make: 'Ford', model: 'Mustang', year: 1964 }