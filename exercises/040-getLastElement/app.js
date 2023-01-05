const getLastElement = array => {
    if (array.length === 0) return undefined;
    else return array[array.length - 1];
}

let output = getLastElement([0, 1, 0, 2]);
console.log(output);