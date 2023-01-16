function keep(arr, element) {
    let myArr = [];
    for (x of arr) {
        if (arr.every(x => x !== element)) return myArr;
        else if (x === element) myArr.push(x);
    }
    return myArr;
}

let output = keep([1, 1, 3, 1, 1], 2);
console.log(output);