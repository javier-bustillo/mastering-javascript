function getLargestNumberAmongMixedElements(arr) {
    let myArr = [];

    if (arr.length < 1) return 0;
    if (arr.some(x => x === Number(x))) {
        for (x of arr) {
            if (x === Number(x))
                myArr.push(x);
        }
    } else return 0;
    let sorted = myArr.sort();
    let largestNumber = sorted[sorted.length - 1];
    return largestNumber;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5