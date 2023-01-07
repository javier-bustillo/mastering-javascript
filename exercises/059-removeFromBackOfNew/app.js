const removeFromBackOfNew = arr => {
    arr.pop();
    const newArr = arr;
    return newArr;
}
let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output);
console.log(arr);