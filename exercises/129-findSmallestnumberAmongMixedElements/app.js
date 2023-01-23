function findSmallestNumberAmongMixedElements(arr) {
    let myArr = [];
    if (arr.length < 1) return 0;
    for (x of arr) {
        if (arr.some(x => x === Number(x))) {
            if (x === Number(x)) myArr.push(x);
        } else return 0;
    }
    myArr.sort();
    let smallestNumber = myArr[0];
    return smallestNumber;
}

let output = findSmallestNumberAmongMixedElements([9, 'lincoln', 4, 'octopus']);
console.log(output); // --> 4