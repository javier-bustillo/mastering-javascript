const removeFromFront = arr => {
    arr.shift();
    return arr;
}
let input = [1, 2, 3];
let output = removeFromFront(input);
console.log(output);