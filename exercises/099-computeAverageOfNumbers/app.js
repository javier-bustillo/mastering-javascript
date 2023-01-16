function computeAverageOfNumbers(arr) {
    let aux = 0;
    if (arr.length < 1) return 0;
    else
        for (x of arr) {
            aux += x;
        }
    let averageOfNumbers = aux / arr.length;
    return averageOfNumbers;
}

let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output);