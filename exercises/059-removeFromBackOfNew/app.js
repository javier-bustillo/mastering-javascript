const removeFromBackOfNew = arr => {
    const newArr = arr.slice(0, -1);
    return newArr;
}
let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output);
console.log(arr);