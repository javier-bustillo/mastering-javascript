function filterOddElements(arr) {
    const myArr = arr.filter(x => x % 2 !== 0);

    return myArr;
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]