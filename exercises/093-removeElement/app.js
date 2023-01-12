function removeElement(arr, n) {
    let myArr = [];

    if (arr.length < 1) return myArr;
    else
        for (x of arr) {
            if (arr.every(x => x === n)) return myArr;
            else if (!(arr.includes(n))) return 'discarder parameter is not included';
            else if (x !== n) myArr.push(x);


        }
    return myArr;
}

let output = removeElement([1, 2, 3, 2, 1], 3);
console.log(output);