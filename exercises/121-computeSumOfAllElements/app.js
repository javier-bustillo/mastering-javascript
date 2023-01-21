let aux = 0;

function computeSumOfAllElements(arr) {
    for (x of arr) {
        aux += x;
    }
    return aux;
}

let output = computeSumOfAllElements([5, 3, 9])
console.log(output); // --> 6