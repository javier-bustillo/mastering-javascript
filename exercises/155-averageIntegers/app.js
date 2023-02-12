function average(array_of_numbers) {
    let averageResult = sum(array_of_numbers) / array_of_numbers.length;
    return averageResult;
}

function sum(numbers) {
    let sumResult = numbers.reduce((a, b) => a + b, 0);
    return sumResult;
}

console.log(sum([1, 2]));
console.log(average([1, 2]));