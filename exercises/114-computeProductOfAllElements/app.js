function computeProductOfAllElements(arr) {
    let aux = 1;
    if (arr.length < 1) return 0;
    else
        for (let i = 0; i < arr.length; i++) {
            aux *= arr[i];
        }
    return aux;
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60