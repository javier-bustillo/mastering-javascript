function addToFront(arr, element) {
    arr.unshift(element);
    return arr;
}

let output = addToFront([1, 2], 3);
console.log(output);