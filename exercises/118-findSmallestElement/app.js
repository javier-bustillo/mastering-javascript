let aux = 99999999;

function findSmallestElement(arr) {
    if (arr.length < 1) return 0;

    for (x of arr) {
        if (x < aux) aux = x;
    }
    return aux;
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1