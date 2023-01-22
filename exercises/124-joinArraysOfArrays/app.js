function joinArrayOfArrays(arr) {
    let myArr = [];

    for (let i = 0; i < arr.length; i++) {
        myArr = myArr.concat(arr[i]);
    }
    return myArr;
}
let output = joinArrayOfArrays([
    [1, 4],
    [true, false],
    ['x', 'y']
]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']