function squareElements(arr) {
    let myArr = [];
    arr.forEach(element => {
        myArr.push(Math.pow(element, 2));
    });

    return myArr;
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]