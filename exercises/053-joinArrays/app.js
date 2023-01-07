const joinArrays = (arr1, arr2) => {
    let result = arr1.concat(arr2);
    return result;

}
let output = joinArrays([1, 2], [3, 4]);
console.log(output);