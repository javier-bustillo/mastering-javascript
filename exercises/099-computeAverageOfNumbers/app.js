function computeAverageOfNumbers(arr) {
    let aux = 0;
    if (arr.length < 1) return [];
    else
        for (x of arr) {
            aux += x;
        }
    return x;
}

let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output);