let obj = {};

function transformFirstAndLast(array) {
    let firstElement = array[0];
    let lastElement = array[array.length - 1];
    obj[firstElement] = lastElement;

    return obj;
}

let output = transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']);
console.log(output);