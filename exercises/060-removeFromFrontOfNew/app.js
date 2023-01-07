const removeFromFrontOfNew = arr => {
    arr.shift();
    const newArr = arr;
    return newArr;
}
let arr = [1, 2, 3];
let output = removeFromFrontOfNew(arr);
console.log(output);
console.log(arr);