let aux = 0;

function getLargestElement(arr) {
    if (arr.length < 1) return 0;

    for (x of arr) {
        if (x > aux) aux = x;
    }
    return aux;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;([5, 2, 8, 3]);
console.log(output); // --> 8;